import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selectedCur: null,
    currencyList: [],
    error: null,
}

const fetchDataSuccess = (state, action) => {
    return {
        ...state,
        currencyList: action.currencyList
    };
};

const fetchDataFail = (state, action) => {
    return {
        ...state,
        error: action.error
    };
};

const getSelectedItem = (state, action) => {
    let selectedItem = null;

    state.currencyList.forEach(currency => {
        if (currency.id === action.id) selectedItem = currency
    });

    return {
        ...state,
        selectedCur: selectedItem
    }
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        // Fetch Data Reducer
        case actionTypes.FETCH_CURRENCY_DATA_SUCCESS: return fetchDataSuccess(state, action);
        case actionTypes.FETCH_CURRENCY_DATA_FAIL: return fetchDataFail(state, action);
        // Select Search Item
        case actionTypes.GET_SELECTED_ITEM: return getSelectedItem(state, action);
        // Default State
        default: return state;
    };
};

export default currencyReducer;