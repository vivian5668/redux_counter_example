// this is our reducer

import { createStore } from 'redux';

const initialState = {
    count: 3
};

//update state or initialize it 
const reducer = (state = initialState, action) => {
    console.log('reducer running', action);

    switch (action.type) {
        case 'INCREMENT':
            //return a copy of the state, update it and return the updated one
            //start with {}, empty object, copy state into it and update the count value
            return Object.assign({}, state, { count: state.count + 1 });
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;