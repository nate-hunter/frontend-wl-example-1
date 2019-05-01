import { FETCH_BOOKINGS, NEW_BOOKING } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action){
  switch (action.type) {
    case FETCH_BOOKINGS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_BOOKING:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
