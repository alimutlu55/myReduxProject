import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'
import { TextInput } from 'react-native-gesture-handler';
import { investMoney } from '../../actions'
import { withdrawMoney } from '../../actions'
import { connect } from 'react-redux'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        };
    }

    invest = (amount) => {
        if (this.props.dispatch(investMoney(amount))) {
            alert('İşlem Başarıyla Gerçekleşti.')
        }
        this.setState({ amount: 0 })
    }

    withDraw = (amount) => {
        if (this.props.totalMoneyTL >= amount) {
            this.props.dispatch(withdrawMoney(amount))
            this.setState({ amount: 0 })
        } else {
            alert('BAKİYE YETERSİZ')
        }
    }

    render() {
         const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View style={styles.view}>
                    <View >
                        <TextInput
                            placeholder='Miktar Giriniz'
                            onChangeText={(amount) => this.setState({ amount })}
                            value={this.state.amount}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.operations}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.invest(this.state.amount)}
                        >
                            <Text style={styles.text}> Para Yatır</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.withDraw(this.state.amount)}
                        >
                            <Text style={styles.text}> Para Çek</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalMoneyTL: state.totalMoneyTL,
    }
}

export default connect(mapStateToProps)(index)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    operations: {
        flexDirection: 'row',
    },
    textInput: {
        height: 30,
        width: 90,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 10,
        borderRadius: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 30,
        width: 90,
        borderRadius: 10,
        marginHorizontal: 10
    },
    text: {
        fontSize: 16,
        fontWeight: '400'
    }
})
