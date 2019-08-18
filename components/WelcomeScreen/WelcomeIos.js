import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Animated,
} from 'react-native';

import ButtonDefault from './Button';

const WelcomeIos = props => (
    <>
        <Animated.View style={[styles.titlesContainerIos, props.animation]}>
            <Text style={styles.subTitle}>{props.title}</Text>
            <Text style={styles.title}>{props.subTitle}</Text>
        </Animated.View>
        <ButtonDefault navigation={props.navigation} />
    </>
);

const styles = StyleSheet.create({
    titlesContainerIos: {
        borderRadius: 1000,
        height: 300,
        width: 300,
        alignSelf: 'center',
        paddingTop: 120,
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
    }
});

export default WelcomeIos;