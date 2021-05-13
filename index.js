const Buy_Cake = 'uy_Cake'

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