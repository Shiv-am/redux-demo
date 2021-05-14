const redux = require('redux')
const createStore = redux.createStore

//creating initial state

const { createStore } = require("redux")

const initialState = {
    loading: true,
    users: [],
    error: ''
}
//creating action

const FETCH_USERS_REQUEST= 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS= 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE= 'FETCH_USERS_FAILURE'

//creating action functions

const fetchUsersRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure =(error) =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//creating reducers

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            loading: true
        }
    }
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_SUCCESS: return{
            loading: false,
            users: action.payload,
            error: ''
        }
    }
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_FAILURE: return{
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const store = createStore(reducer)