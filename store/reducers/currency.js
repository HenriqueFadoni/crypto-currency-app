import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currencyList: [],
    error: null
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

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        // Fetch Data Reducer
        case actionTypes.FETCH_CURRENCY_DATA_SUCCESS: return fetchDataSuccess(state, action);
        case actionTypes.FETCH_CURRENCY_DATA_FAIL: return fetchDataFail(state, action);
        // Default State
        default: return state;

    };
};

export default currencyReducer;