import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import LoginScreen from '../screen/LoginScreen'
import SignUpScreen from '../screen/SignUpScreen'
import HomeScreen from '../screen/HomeScreen'
import ActivitiesScreen from '../screen/ActivitiesScreen'
import OperationsScreen from '../screen/OperationsScreen'
import customDrawerComponent from '../components/customDrawerComponent'

const { width } = Dimensions.get('window');


const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
}, {
    headerMode: 'none'
})

const ActivitiesStack = createStackNavigator({
    Activities: {
        screen: ActivitiesScreen
    }
}, {
    headerMode: 'none'
})

const OperationsStack = createStackNavigator({
    Operations: {
        screen: OperationsScreen
    }
}, {
    headerMode: 'none'
})

const LoginStack = createStackNavigator({
    Login: {
        screen: LoginScreen,

    },
    SignUp: {
        screen: SignUpScreen,
    }
},
    {
        headerMode: 'none'
    })

const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            drawerLabel: 'Ana Sayfa'
        }
    },
    Operations: {
        screen: OperationsStack, navigationOptions: {
            drawerLabel: 'Hesap İşlemleri'
        }
    },
    Activities: {
        screen: ActivitiesStack,
        navigationOptions: {
            drawerLabel: 'Hesap Hareketleri'
        }
    }

}, {
    contentComponent: customDrawerComponent,
    drawerWidth: width * 73 / 100,
    contentOptions: {
        activeTintColor: 'orange'
    }
})

const wholeStack = createStackNavigator({
    Login: {
        screen: LoginStack,
    },
    Drawer: {
        screen: Drawer
    }
},
    {
        headerMode: 'none'
    })

export default createAppContainer(wholeStack);