import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Left, Icon } from 'native-base'
import { connect } from 'react-redux'
import ExchangeRate from '../ExchangeRateScreen'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moneyFlag: 'TR',
            userName: '',
            userLastName: ''
        };
    }

    
    render() {
        const totalMoneyUSD = (this.props.totalMoneyTL / this.props.exchangeRate.dolar).toFixed(2);
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={true}
                    scrollIndicatorInsets={{ top: 10, left: 10, bottom: 10, right: 10 }}>
                    <View style={styles.container}>
                        <View style={styles.header} >
                            <Text style={styles.txtHeader}>HOŞGELDİN {this.props.user.name}</Text>
                        </View>
                        <View style={styles.view}>
                            <View style={{ width: 150, height: 150, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 75, borderColor: '#E8E6E5' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#565556' }}> TOPLAM </Text>
                                {this.state.moneyFlag == 'TR' ?
                                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#181818' }}>{this.props.totalMoneyTL} </Text>
                                    : <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#181818' }}>{totalMoneyUSD} </Text>}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                <TouchableOpacity
                                    style={{ borderColor: '#E8E6E5', borderWidth: 1, borderRadius: 5, marginHorizontal: 10, width: 40, alignItems: 'center' }}
                                    onPress={() => this.setState({ moneyFlag: 'TR' })}>
                                    <Text style={{ fontWeight: 'bold' }}>TL</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ borderColor: '#E8E6E5', borderWidth: 1, borderRadius: 5, width: 40, alignItems: 'center' }}
                                    onPress={() => this.setState({ moneyFlag: 'USD' })} >
                                    <Text style={{ fontWeight: 'bold' }}>USD</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <ExchangeRate />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalMoney: state.totalMoney,
        totalMoneyTL: state.totalMoneyTL,
        exchangeRate: state.exchangeRate,
        user: state.user,
    }
}

export default connect(mapStateToProps)(index);

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center',
        marginVertical: 20
    },
    txtHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222222'
    },
    view: {
        marginVertical: height * 20 / 100,
        alignItems: 'center',
        flexDirection: 'column',
    }
})
