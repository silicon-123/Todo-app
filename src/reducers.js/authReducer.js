import { LOGIN, LOGOUT, REGISTER } from '../actions/authActions';

const initialState = {
  user: null,  // or an empty object if user details are expected to be an object
 
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case REGISTER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
