import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchExchangeRate } from '../../actions'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dolar: 0,
            euro: 0
        };
    }

    componentDidMount() {
        axios
            .get('https://www.doviz.gen.tr/doviz_json.asp')
            .then(exchangeRate => exchangeRate.data)
            .then(exchangeRate => {
                console.log(exchangeRate)
                this.props.dispatch(fetchExchangeRate(exchangeRate))
            })
    }

    render() {
        console.log('Propslar');
        console.log(this);
        const { user } = this.props;
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