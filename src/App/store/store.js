
import { combineReducers, createStore } from 'redux'
import * as REST_CONFIG from '../config/config'

export const initialState = { messages: [], users: [], lastMessageId: -1 };
export const ACTIONS = Object.freeze({
    SET_MESSAGES: 'SET_MESSAGES',
    SET_USERS: 'SET_USERS',
    SAVE_MESSAGE: 'SAVE_MESSAGE'
});

const PRIVATE_ACTIONS = Object.freeze({
    INIT: 'INIT'
});

//  function like a worker
function reducer(state = initialState, action) {
    console.error(action.type);
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
                fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.messages + '?id_gte=' + (store.getState().tchat.lastMessageId + 1),
                    { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        let lastId = store.getState().tchat.lastMessageId;
                        arr.forEach(element => {
                            if (lastId < element.id) lastId = element.id;
                        })
                        store.dispatch({
                            type: ACTIONS.SET_MESSAGES, values: arr, maxId: lastId
                        })
                        return arr;
                    })
            }, 10000)

            return state;
        case ACTIONS.SET_MESSAGES:
            return {
                ...state,
                // messages:action.values,
                messages: [...state.messages, ...action.values],
                lastMessageId: action.maxId
            };
        case ACTIONS.SET_USERS:
            return { ...state, users: action.values };
        case ACTIONS.SAVE_MESSAGE:
            console.log(action.values);
            fetch(REST_CONFIG.ADR_REST + REST_CONFIG.RESSOURCES.messages,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(action.value)
                },
            );
            return state;
        default: return state;
    }
}

const modalInitialState = {
    isShown: false,
    content: null
}

const modalReducer = (state = modalInitialState, action) => {
    console.error(action.type);
    switch (action.type) {

        case 'SHOW':
            return { ...state, isShown: true, content: action.value };
        case 'HIDE':
            return { ...state, isShown: false, content: null };

        default:
            return state
    }
}

const store = createStore(combineReducers({tchat:reducer, modal:modalReducer}));

store.subscribe(() => {
    console.warn(store.getState());
})

// call init
store.dispatch({
    type: PRIVATE_ACTIONS.INIT
});

// store.dispatch({
//     type: ACTIONS.SAVE_MESSAGE,
//     value: {
//         "destId": 1,
//         "text": "msg four",
//         "dateTime": "Tue Sep 15 2021 16:12:08 GMT+0100 (UTC+01:00)"
//     }
// });

// store.dispatch({
//     type:ACTIONS.SET_USERS, 
//     values:[{name:'ok'}, {name:'ko'}]
// });

// store.dispatch({
//     type:ACTIONS.SET_MESSAGES, 
//     values:[{id:0}, {id:1}]
// });

export default store;