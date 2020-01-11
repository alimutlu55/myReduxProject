import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { Header, Button, Body, Title } from 'native-base';
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    alreadySaved = false
  }

  _handleSubmit = values => {
    axios.post('http://localhost:8000/kayitGetir', { // BU EMAİL DAHA ÖNCE KULLANILMIŞ MI KONTROLÜ
      email: values.email
    }).then((response) => {
      if (response.data[0] == undefined) {           // KULLANILMADI İSE YENİ KAYIT EKLE
        axios.post('http://localhost:8000/kayitEkle', {
          name: values.name,
          lastName: values.lastName,
          email: values.email,
          password: values.password
        }).then((response) => {
          Alert.alert(
            //title
            'Kayıt Başarılı',
            //body
            '',
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
          );
        })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert('Bu emaile kayıtlı bir kullanıcı bulunmaktadır.')
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Body>
            <Title>Sign Up</Title>
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
                .min(6)
                .required('*Please enter your password'),
              passwordConfirm: Yup
                .string()
                .oneOf([Yup.ref('password')], 'Passwords didnt match.')
                .required('*Please enter your confirm password'),
              name: Yup
                .string()
                .required('*Please enter your name'),
              lastName: Yup
                .string()
                .required('*Please enter your last name'),
            })
          }>
          {({ values, handleChange, handleSubmit, errors, touched, setFieldTouched, isValid }) => (
            <View style={{ marginTop: 60 }}>
              <View >
                <TextInput
                  style={styles.txtInput}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  placeholder='Name'
                  autoCapitalize={'none'}
                  onBlur={() => setFieldTouched('name')} />
                {touched.name && <Text style={{ color: 'red', fontSize: 12 }}>{errors.name}</Text>}
              </View>
              <View >
                <TextInput
                  style={styles.txtInput}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  placeholder='Last Name'
                  autoCapitalize={'none'}
                  onBlur={() => setFieldTouched('lastName')} />
                {touched.lastName && <Text style={{ color: 'red', fontSize: 12 }}>{errors.lastName}</Text>}
              </View>
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
              <View >
                <TextInput
                  style={styles.txtInput}
                  onChangeText={handleChange('passwordConfirm')}
                  value={values.passwordConfirm}
                  placeholder='Password Confirm'
                  autoCapitalize={'none'}
                  onBlur={() => setFieldTouched('passwordConfirm')}
                  secureTextEntry={true} />
                {touched.passwordConfirm && <Text style={{ color: 'red', fontSize: 12 }}>{errors.passwordConfirm}</Text>}
              </View>
              <Button
                block
                onPress={handleSubmit}
                disabled={!isValid}
                style={styles.btn}>
                <Text>Sign Up</Text>
              </Button>
            </View>
          )}
        </Formik>
      </View>
    )
  }
}

export default index

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
  }
})

