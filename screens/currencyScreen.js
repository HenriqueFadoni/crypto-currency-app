import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';

currencyScreen = props => {
  Moment.locale('en');
  const dateCreated = props.item.date_added;
  const dateUpdated = props.item.quote.USD.last_updated;

  return (
  <View>
    <Text>{props.item.name} - ( {props.item.symbol} )</Text>
    <Text>Price in USD: {props.item.quote.USD.price.toFixed(2)}</Text>
    <Text>Max Supply: {Math.round(props.item.max_supply)}</Text>

    <Text>Market Cap: {props.item.quote.USD.market_cap}</Text>
    <Text>Changes in 1 hour: {props.item.quote.USD.percent_change_1h.toFixed(2)}</Text>
    <Text>Changes in 24 hour: {props.item.quote.USD.percent_change_24h.toFixed(2)}</Text>
    <Text>Changes in a week: {props.item.quote.USD.percent_change_7d.toFixed(2)}</Text>

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

// {
//   "circulating_supply": 17878150,
//   "cmc_rank": 1,
//   "date_added": "2013-04-28T00:00:00.000Z",
//   "id": 1,
//   "last_updated": "2019-08-15T15:49:38.000Z",
//   "max_supply": 21000000,
//   "name": "Bitcoin",
//   "num_market_pairs": 7815,
//   "platform": null,
//   "quote": Object {
//     "USD": Object {
//       "last_updated": "2019-08-15T15:49:38.000Z",
//       "market_cap": 180482288865.96564,
//       "percent_change_1h": 0.634681,
//       "percent_change_24h": -3.59634,
//       "percent_change_7d": -13.9372,
//       "price": 10095.1322629,
//       "volume_24h": 23689986056.4616,
//     },
//   },
//   "slug": "bitcoin",
//   "symbol": "BTC",
//   "tags": Array [
//     "mineable",
//   ],
//   "total_supply": 17878150,
// }