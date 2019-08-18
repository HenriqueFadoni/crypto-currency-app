import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const ButtonRouteIOS = props => (
    <TouchableOpacity
        style={[styles.container, props.bgColor]}
        onPress={() => {
            props.navigation.navigate({ routeName: props.route });
        }}
    >
        <Text style={[styles.text, props.textColor]}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 230,
        marginTop: 100,
        padding: 10,
        borderRadius: 150,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
});

export default ButtonRouteIOS;