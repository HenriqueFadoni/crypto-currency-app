import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Platform
} from 'react-native';

import WelcomeAndroid from '../components/WelcomeScreen/WelcomeAndroid';
import WelcomeIos from '../components/WelcomeScreen/WelcomeIos';

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
    let renderScreen = (
      <WelcomeIos
        title="WELCOME TO"
        subTitle="CRYPTO-WATCH"
        animation={{ opacity: fadeAnim }}
        navigation={this.props.navigation}
      />
    );

    if (isAndroid) {
      renderScreen = (
        <WelcomeAndroid
          title="WELCOME TO"
          subTitle="CRYPTO-WATCH"
          animation={{ opacity: fadeAnim }}
          navigation={this.props.navigation}
        />
      );
    }
    return (
      <View style={styles.container}>
        {renderScreen}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default WelcomeScreen;