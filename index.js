const redux = require('redux')
const createStore = redux.createStore

const Buy_Cake = 'Buy_Cake'

function buycake(){
    return{
    type: Buy_Cake,
    info: 'First redux action'
    }
}

//(previousState,action)

const initialState={
    numofcakes: 10
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_Cake: return{
            ...state,
            numofcakes: state.numofcakes -1
        }
        default: return state
    }
}
//creating store

const store = createStore(reducer)
console.log('Initial state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()