import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import usersReducer from './usersReducer'

export default combineReducers({
  bookings: bookingReducer,
  currentUser: usersReducer
});
