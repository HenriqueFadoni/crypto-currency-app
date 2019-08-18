import React from 'react';
import { Button } from 'react-native';

const ButtonDefault = props => (
    <Button
        title="Search Currency"
        onPress={() => {
            props.navigation.navigate({ routeName: 'currencyList' });
        }}
    />
);
export default ButtonDefault;