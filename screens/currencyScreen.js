import React from 'react';
import { View } from 'react-native';

import CurrencyHeader from '../components/CurrencyHeader';
import CurrencyChanges from '../components/CurrencyChanges';
import CurrencyFinance from '../components/CurrencyFinance';
import CurrencyMarketCap from '../components/CurrencyMarketCap';
import CurrencyAdditionalInfo from '../components/CurrencyAdditionalInfo';

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