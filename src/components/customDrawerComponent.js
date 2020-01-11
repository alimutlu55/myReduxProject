import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { connect } from 'react-redux'

class customDrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.profileView}>
                    <View style={styles.custInfo}>
                        <Text style={styles.text}>{this.props.user.name}</Text>
                        <Text style={styles.text}>{this.props.user.lastName}</Text>
                    </View>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {

    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(customDrawerComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    profileView: {
        marginLeft: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    custInfo: {
        marginHorizontal: 15,
        marginVertical: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

