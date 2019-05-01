import { FETCH_BOOKINGS, NEW_BOOKING } from './types';

export const fetchBookings = () => dispatch => {
  fetch('http://localhost:3000/api/v1/bookings')
  .then(resp => resp.json())
  .then(bookings =>
    dispatch({
      type: FETCH_BOOKINGS,
      payload: bookings
    })
  );
};

export const createBooking = bookingData => dispatch => {
  console.log('action called')
  fetch('http://localhost:3000/api/v1/bookings', {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(bookingData)
  })
  .then(resp => resp.json())
  .then(booking => dispatch({
    type: NEW_BOOKING,
    payload: booking
  }))
};
