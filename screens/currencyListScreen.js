import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import Item from '../components/Item';

class CurrencyListScreen extends Component {
    state = {
        searchName: '',
        searchList: [],
        isSeaching: false
    }

    async componentDidMount() {
        await this.props.onFetchCurrencies();
    }

    searchCurrency = curName => {
        const name = curName.trim();
        if (name !== '') {
            const newList = this.props.list.map(currency => {
                if (currency.name.includes(name)) {
                    return currency
                }
            }).filter(c => c !== undefined);

            this.setState({
                searchName: name,
                searchList: newList,
                isSeaching: true
            });
        } else {
            this.setState({
                searchName: '',
                searchList: [],
                isSeaching: false
            });
        }
    }

    selectCurrency = currencyId => {
        this.props.onSelectCurrency(currencyId);
        this.setState({
            searchName: '',
            searchList: [],
            isSeaching: false
        });
        this.props.navigation.navigate({ routeName: 'currencyItem' });
    }

    render() {
        return (
            <View style={styles.itemContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Currency by Name"
                    value={this.state.searchName}
                    onChangeText={this.searchCurrency}
                />
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={
                        this.state.isSeaching ?
                            this.state.searchList :
                            this.props.list
                    }
                    renderItem={itemData => (
                        <Item selectCurrency={this.selectCurrency} item={itemData.item} />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 20
    },
    searchInput: {
        marginVertical: 25,
        alignSelf: 'center'
    }
});

const mapStateToProps = state => {
    return {
        list: state.currency.currencyList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCurrencies: () => dispatch(actions.fetchData()),
        onSelectCurrency: id => dispatch(actions.selectedItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListScreen);