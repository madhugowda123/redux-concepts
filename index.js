const redux = require("redux");

//for creating a store
const createStore = redux.createStore;

//1.define with string constraints
const BUY_CAKE = "BUY_CAKE";

//1.Action Creator = function(){}
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "im here to buy a cake",
  };
}

//2.initialize the state
const initialState = {
  numOfCakes: 10,
};

//reducer -(state,action => newState)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1, //10-1=9,9-1=8
      };
    //new state value

    default:
      return state;
  }
};
//3:create a store & hold the application  store

const store = createStore(reducer);

//4:getState() gives the initial state valueof the application state

console.log("initial state", store.getState());

//5:subscribe()

const unsubscribe = store.subscribe(() => {
  console.log("updated state value", store.getState());
});

// 6:accept action as parameter in dispatch(action);
store.dispatch(buyCake());

// step
unsubscribe();
