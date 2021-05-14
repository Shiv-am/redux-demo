const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger= reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware


const Buy_Cake = 'Buy_Cake'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buycake(){
    return{
    type: Buy_Cake,
    info: 'First redux action'
    }
}
function buyIceCream () {
    return {
      type: BUY_ICECREAM
    }
  }

//(previousState,action)

const initialCakeState = {
    numOfCakes: 10
  }
  
  const initialIceCreamState = {
    numOfIceCreams: 20
  }

// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case Buy_Cake: return{
//             ...state,
//             numofcakes: state.numofcakes -1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }
//creating store

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case Buy_Cake: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
      default: return state
    }
  }
  
  const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
      default: return state
    }
  }
  
  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
  })


const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()