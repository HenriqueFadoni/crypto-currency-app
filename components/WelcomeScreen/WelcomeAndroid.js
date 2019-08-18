import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
} from 'react-native';

import ButtonDefault from './Button';

const WelcomeAndroid = props => (
    <View style={styles.container}>
        <Animated.View style={[styles.titlesContainerAndroid, styles.animation]}>
            <Text style={styles.subTitle}>{props.title}</Text>
            <Text style={styles.title}>{props.subTitle}</Text>
        </Animated.View>
        <View style={styles.btnContainer}>
            <ButtonDefault color='blue' navigation={props.navigation} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center'
    },
    titlesContainerAndroid: {
        borderRadius: 1000,
        height: 250,
        width: 250,

        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        marginBottom: 100,

        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
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

export default WelcomeAndroid;