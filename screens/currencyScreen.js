import React from 'react';
import { View } from 'react-native';

import CurrencyHeader from '../components/currencyHeader';
import CurrencyChanges from '../components/currencyChanges';
import CurrencyFinance from '../components/currencyFinance';
import CurrencyMarketCap from '../components/currencyMarketCap';
import CurrencyAdditionalInfo from '../components/currencyAdditionalInfo';

currencyScreen = () => (
  <View>
    <CurrencyHeader />
    <CurrencyFinance />
    <CurrencyMarketCap />
    <CurrencyChanges />
    <CurrencyAdditionalInfo />
  </View>
);

export default currencyScreen;