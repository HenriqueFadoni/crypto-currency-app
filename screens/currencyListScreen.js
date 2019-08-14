import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import axios from 'axios';

import Item from '../components/Item';

class CurrencyListScreen extends Component {
    state = {
        list: []
    }

    async componentDidMount() {
        const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
        const { data } = await axios.get(url, {
            qs: {
                'start': '1',
                'limit': '1',
                'convert': 'USD,BTC'
            },
            headers: {
                'X-CMC_PRO_API_KEY': '4d3c2c59-cc1c-407f-893d-41e054ef8f2f'
            },
            json: true,
            gzip: true
        });
        this.setState({ list: data });
    }

    render() {
        return (
            <View style={styles.itemContainer}>
                <FlatList 
                    keyExtractor={item => item.id}
                    data={this.state.list.data}
                    renderItem={itemData => (
                        <Item item={itemData.item}/>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 20
    }
});

export default CurrencyListScreen;