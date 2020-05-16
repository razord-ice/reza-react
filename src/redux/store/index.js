import { createStore } from 'redux';

const initialState = {
    cart:[]
};

const reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case 'ADD_TO_CART':
            state = {
                ...state,
                cart: [...state.cart, action.payloads]
            };
            return state;
        default:
            return state;
    }
};

export const initializeStore = (preloadedState = initialState) => {
    return createStore(reducer, preloadedState)
}
