
import { createStore } from 'redux'
import * as REST_CONFIG from '../config/config'

export const initialState = { messages: [], users: [] };
export const ACTIONS = Object.freeze({
    SET_MESSAGES: 'SET_MESSAGES',
    SET_USERS: 'SET_USERS',
});

const PRIVATE_ACTIONS = Object.freeze({
    INIT: 'INIT'
});

// pure function
function reducer(state = initialState, action) {
    switch (action.type) {
        case PRIVATE_ACTIONS.INIT:
            setInterval(() => {
                fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.users, { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        store.dispatch({
                            type: ACTIONS.SET_USERS, values: arr
                        })
                        return arr;
                    })
            }, 10000)

            setInterval(() => {
                fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.messages, { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        store.dispatch({
                            type: ACTIONS.SET_MESSAGES, values: arr
                        })
                        return arr;
                    })
            }, 10000)

            return state;
        case ACTIONS.SET_MESSAGES:
            return { ...state, messages: action.values };
        case ACTIONS.SET_USERS:
            return { ...state, users: action.values };
        default: return state;
    }
}

// let state=reducer(undefined,{type:PRIVATE_ACTIONS.INIT});
// console.log(state);

// state=reducer(state,{type:ACTIONS.SET_MESSAGES, values:[{id:0}, {id:1}]});
// console.log(state);

// state=reducer(state,{type:ACTIONS.SET_USER, values:[{name:'ok'}, {name:'ko'}]});
// console.log(state);

const store = createStore(reducer);

store.subscribe(() => {
    console.warn(store.getState());
})

store.dispatch({
    type: PRIVATE_ACTIONS.INIT
});

// store.dispatch({
//     type:ACTIONS.SET_USERS, 
//     values:[{name:'ok'}, {name:'ko'}]
// });

// store.dispatch({
//     type:ACTIONS.SET_MESSAGES, 
//     values:[{id:0}, {id:1}]
// });

export default store;