import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

currencyScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO CRYPTO-WATCH</Text>
      <Button
        title="Search Currency"
        style={styles.button}
        onPress={() => {
          props.navigation.navigate({ routeName: 'currencyList' });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 100
  }
});

export default currencyScreen;