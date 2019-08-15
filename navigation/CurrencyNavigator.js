import { createStackNavigator, createAppContainer } from 'react-navigation';

import welcomeScreen from '../screens/welcomeScreen';
import currencyListScreen from '../screens/currencyListScreen';
import currencyScreen from '../screens/currencyScreen';

const cryptoCurrencyNav = createStackNavigator({
    welcomeScreen: {
        screen: welcomeScreen
    },
    currencyList: {
        screen: currencyListScreen
    },
    currencyItem: {
        screen: currencyScreen
    }
});

export default createAppContainer(cryptoCurrencyNav);