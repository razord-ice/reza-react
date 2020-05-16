import { createStore } from 'redux';

const initialState = {};
const reducer = ( state=initialState, action ) => {
    switch( action.type ){
        case 'ADD_TO_CART':
            console.log(action.payloads)
            return {
                ...state,
                data: action.payloads
            }
        default:
            return {
                ...state
            }
    }
};

export const initializeStore = (preloadedState = initialState) => {
    return createStore(reducer, preloadedState)
}