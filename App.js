import React from 'react';
import AppNavigator from './src/util/AppNavigation';
import { Provider } from 'react-redux'
import store from './src/store'


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;

















/*import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen'
import OperationScreen from './src/screen/OperationsScreen'
import ActivitiesScreen from './src/screen/ActivitiesScreen'
import store from './src/store'
import { Provider } from 'react-redux'

const { width } = Dimensions.get('window');
export default class App extends Component {
  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

const customDrawerComponent = (props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.profileView}>
      <Image style={styles.profile} source={require('./src/images/man.png')} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Operations: OperationScreen,
  Activities: ActivitiesScreen
}, {
  contentComponent: customDrawerComponent,
  drawerWidth: width * 73 / 100,
  contentOptions: {
    activeTintColor: 'orange'
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 90,
    height: 90
  },
  profileView: {
    marginLeft: 10,
    marginVertical: 10,
  },
})*/