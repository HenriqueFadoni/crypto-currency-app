import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';

import ButtonDefault from '../components/Button';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1500,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;
    const isAndroid = Platform.OS === 'android' ? true : false;
    let renderBtn = <ButtonDefault testID='Btn-welcome' navProps={this.props} />

    if (isAndroid) {
      renderBtn = (
        <View testID='Btn-welcome' style={styles.btnContainer}>
          <ButtonDefault color='blue' navProps={this.props} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.subTitle}>WELCOME TO</Text>
          <Text style={styles.title}>CRYPTO-WATCH</Text>
        </Animated.View>
        {renderBtn}
      </View>
    );
  }
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
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  btnContainer: {
    width: 100,
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default WelcomeScreen;