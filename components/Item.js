import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const item = props => (
    <View style={styles.item}>
        <Text style={styles.itemFont}>{props.item.name}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        marginHorizontal: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(98, 124, 244, 1)'
    },
    itemFont: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});


export default item;