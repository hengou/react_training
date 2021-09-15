const initialState = { messages: [], users: [] };
const ACTIONS = Object.freeze({
    SET_MESSAGES: 'SET_MESSAGES',
    SET_USERS: 'SET_USERS',
});

const PRIVATE_ACTIONS = Object.freeze({
    INIT: 'INIT'
});

// pure function
function reducer(state = initialState, action) {
    switch (action.type) {
        case PRIVATE_ACTIONS.INIT: return state;
        case ACTIONS.SET_MESSAGES:
            return { ...state, messages: action.values };
        case ACTIONS.SET_USERS:
            return { ...state, users: action.values };
        default: return state;
    }
}

let state=reducer(undefined,{type:PRIVATE_ACTIONS.INIT});
console.log(state);

state=reducer(state,{type:ACTIONS.SET_MESSAGES, values:[{id:0}, {id:1}]});
console.log(state);

state=reducer(state,{type:ACTIONS.SET_USER, values:[{name:'ok'}, {name:'ko'}]});
console.log(state);