import { createStore } from 'redux'

let defaultState = {
  originAmount: '0.00'
}

//reducer is a function that updates state and it takes two arguments state and action
//(state = defaultState) is equivalent of ES5 state = state || defaultState - if state is defined use state if not, use dafaultState
let amount = (state = defaultState, action) => {
  if(action.type ==='CHANGE_ORIGIN_AMOUNT') {
    //create a new object Object.assign({}) - becouse dirrect mutetig state is not allowed, then copy state and assign action.data to originAmount
    //return  Object.assign({}), state, {originAmount : action.data} is equivalent of below where we use spread operator. spread operator returns new object
    return {
      ...state, originAmount : action.data
    }
  }

  //else return defaul state
  return state;
}

//store is where you save you state
let store = createStore(amount);

export default store;
