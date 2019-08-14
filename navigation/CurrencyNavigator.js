import { createStackNavigator, createAppContainer } from 'react-navigation';

import currencyScreen from '../screens/currencyScreen';
import currencyListScreen from '../screens/currencyListScreen';

const cryptoCurrencyNav = createStackNavigator({
    currencyList: {
        screen: currencyListScreen
    },
    currency: {
        screen: currencyScreen
    }
});

export default createAppContainer(cryptoCurrencyNav);