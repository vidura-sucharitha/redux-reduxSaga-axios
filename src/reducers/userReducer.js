export const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

const initState = {
  user: undefined,
};

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = user => ({
  type: SET_USER,
  user,
});

const userReducer = (state = initState, action) => {
  if (action.type === SET_USER) {
    const {user} = action;
    return {...state, user: user};
  } else {
    return state;
  }
};

export default userReducer;
