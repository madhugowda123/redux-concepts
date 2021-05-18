// Multiple Reducers

const redux = require("redux");
const createStore = redux.createStore;

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
const initialState = {
  numOfSweets: 200,
  numOfIceCreams: 50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SWEETS:
      return {
        ...state,
        numOfSweets: state.numOfSweets - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State Value", store.getState());
});

store.dispatch(buySweets());
store.dispatch(buySweets());
store.dispatch(buySweets());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
