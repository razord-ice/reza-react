import { createStore } from 'redux';

const initialState = {
    qty: 0,
    items: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CART_LIST":
            return {
                ...state,
            };

        case "ADD_CART":
            return {
                ...state,
                qty: parseInt(state.qty) + parseInt(action.qty),
                items: action.items,
            };

        case "CART_UPDATE":
            return {
                ...state,
                qty: parseInt(action.qty),
                items: action.items,
            };

        default:
            return state;
    }
};

export const initializeStore = (preloadedState = initialState) => {
    return createStore(reducer, preloadedState)
}
