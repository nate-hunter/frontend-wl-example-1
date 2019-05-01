import {  GET_USER, CREATE_USER, LOGIN_USER, LOGOUT_USER } from '../Constants'

const intitialState = '';


const usersReducer = (state = intitialState, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload;
    case CREATE_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
        return null;
    default:
        return state;
  }
}

export default usersReducer;
