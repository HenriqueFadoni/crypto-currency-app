import { createStackNavigator, createAppContainer } from 'react-navigation';

import welcomeScreen from '../screens/welcomeScreen';
import currencyListScreen from '../screens/currencyListScreen';
import currencyScreen from '../screens/currencyScreen';

const CryptoCurrencyNav = createStackNavigator(
    {
        welcomeScreen: {
            screen: welcomeScreen
        },
        currencyList: {
            screen: currencyListScreen
        },
        currencyItem: {
            screen: currencyScreen
        }
    },
    {
        initialRouteName: 'welcomeScreen'
    }
);

export default createAppContainer(CryptoCurrencyNav);