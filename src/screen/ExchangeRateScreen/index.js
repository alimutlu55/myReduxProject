import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, width: width, height: height, alignItems: 'center' }}>
                <Text style={styles.txtHeader}>DÖVİZ KURU</Text>
                <View style={styles.container}>
                    <Text style={styles.txt}>Dolar: {this.props.exchangeRate.dolar}</Text>
                    <Text style={styles.txt}>Euro:  {this.props.exchangeRate.euro}</Text>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        exchangeRate: state.exchangeRate
    }
}

export default connect(mapStateToProps)(index);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E8E6E5',
        width: width * 75 / 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 30 / 100,
        marginVertical: height * 20 / 100
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    txtHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20
    }
})