const INCREASE = 'increase';
const DECREASE = 'decrease';

const initState = {
  counter: 0,
};

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

const countReducer = (state = initState, action) => {
  if (action.type === INCREASE) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === DECREASE) {
    return {...state, counter: state.counter - 1};
  } else {
    return state;
  }
};

export default countReducer;
