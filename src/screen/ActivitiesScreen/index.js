import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'
import { connect } from 'react-redux'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View style={{ alignItems: 'center', marginVertical: 10, padding:5}}>
                    <Text style={styles.txtHeader}> Hesap Hareketleri</Text>
                </View>
                <ScrollView style={{ margin: 5 }}>
                    {this.props.activities.map(activity =>
                        <TouchableOpacity key={activity.id}>
                            <View style={styles.activities}>
                                <Text style={{ fontSize: 20 }}>{activity.type}</Text>
                                <Text style={{ fontSize: 20 }}>{activity.amount}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps)(index);

const styles = StyleSheet.create({
    activities: {
        marginVertical: 5,
        borderBottomWidth: 1,
        borderColor: '#f2f2e1',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#222222'
    }
})
