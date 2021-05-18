// Combine Reducers: split state & reducers

const redux = require("redux");

//imorted logger
const reduxlogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

//created the logger and initialize it
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_SWEETS = "BUY_SWEETS";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creators
function buySweets() {
  return {
    type: BUY_SWEETS,
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// initialize the state
const initialSweetState = {
  numOfSweets: 200,
};

const initialIcecreamState = {
  numOfIceCreams: 50,
};

const sweetReducer = (state = initialSweetState, action) => {
  switch (action.type) {
    case BUY_SWEETS:
      return {
        ...state,
        numOfSweets: state.numOfSweets - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// combine reducers

const rootReducer = combineReducer({
  mySweet: sweetReducer,
  myIcecream: iceCreamReducer,
});

//call the apply middleware with logger
const store = createStore(rootReducer, applyMiddleware(logger));

{
} //it define logger{}
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State Value", store.getState());
});

store.dispatch(buySweets());
store.dispatch(buySweets());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
