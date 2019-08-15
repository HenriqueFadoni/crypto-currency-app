import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

import CurrencyHeader from '../components/currencyHeader';
import CurrencyChanges from '../components/currencyChanges';

currencyScreen = props => {
  Moment.locale('en');
  const dateCreated = props.item.date_added;
  const dateUpdated = props.item.quote.USD.last_updated;

  return (
  <View>
    <CurrencyHeader />
    <View>
     <Text>Max Supply: {Math.round(props.item.max_supply)}</Text>
    </View>

    <Text>Price in USD: {props.item.quote.USD.price.toFixed(2)}</Text>
    <Text>Market Cap: {props.item.quote.USD.market_cap.toFixed(2)}</Text>

    <CurrencyChanges />

    <Text>Date it was created: {Moment(dateCreated).format('MMM d, YYYY')}</Text>
    <Text>Last Updated at: {Moment(dateUpdated).format('MMM d - HH:mm:ss')}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
  return {
    item: state.currency.selectedCur
  }
}

export default connect(mapStateToProps)(currencyScreen);