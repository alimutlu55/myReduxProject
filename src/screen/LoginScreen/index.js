import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Header, Button, Body, Title } from 'native-base';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions'
import { fetchExchangeRate } from '../../actions'
import { TouchableOpacity } from 'react-native-gesture-handler';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    alreadySaved = false
  }

  _changeScreen = aim => {
    switch (aim) {
      case 'HOMESCREEN':
        this.props.navigation.navigate('Drawer')
    }
  }

  _handleSubmit = values => {
    this.props.dispatch(fetchUser(values))
    this.props.dispatch(fetchExchangeRate())
  }

  render() {
    if (this.props.INVALID_PASSWORD) {
      alert('Yanlş şifre.Tekrar deneyiniz.')
    }
    if (this.props.AUTH_SUCCESS) {
      this._changeScreen('HOMESCREEN')
    }

    return (
      <View style={styles.container}>
        <Header>
          <Body>
            <Title>Sign In</Title>
          </Body>
        </Header>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirm: '' }}
          onSubmit={this._handleSubmit}
          validationSchema={
            Yup.object().shape({
              email: Yup
                .string()
                .email('*Invalid format')
                .required('*Please enter your email'),
              password: Yup
                .string()
                .required('*Please enter your password')
            })
          }>
          {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched, isValid }) => (
            <View style={{ marginTop: 60 }}>
              <View >
                <TextInput
                  style={styles.txtInput}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder='Email'
                  autoCapitalize={'none'}
                  onBlur={() => setFieldTouched('email')} />
                {touched.email && <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>}
              </View>
              <View >
                <TextInput
                  style={styles.txtInput}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder='Password'
                  autoCapitalize={'none'}
                  onBlur={() => setFieldTouched('password')}
                  secureTextEntry={true} />
                {touched.password && <Text style={{ color: 'red', fontSize: 12 }}>{errors.password}</Text>}
              </View>
              <Button
                block
                onPress={handleSubmit}
                disabled={!isValid}
                style={styles.btn}>
                <Text>Sign In</Text>
              </Button>
            </View>
          )}
        </Formik>
        <View style={styles.signUp}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Forgot Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    AUTH_SUCCESS: state.token,
    INVALID_PASSWORD: state.invalid
  }
}

export default connect(mapStateToProps)(index)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#BEBDBD',
    height: 50,
    width: 400,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  btn: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  signUp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  }
})

