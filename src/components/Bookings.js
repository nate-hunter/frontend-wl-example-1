import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBookings } from '../actions/bookingActions';

class Bookings extends React.Component {
  componentDidMount(){
    this.props.fetchBookings();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newBooking) {
      this.props.bookings.unshift(nextProps.newBooking)
    }
  };

  render() {
    const bookings = this.props.bookings.map(booking => (
      <div key={booking.id} className="booking">
        <h3>| {booking.date} |</h3>
        <p>{booking.session_goal}</p>
        <button type="button">Book</button>
        <hr/>
      </div>
    ))
    return (
      <div>
        <h1>Bookings:</h1>
        {bookings}
      </div>
    );
  };
};

Bookings.propTypes = {
  fetchBookings: PropTypes.func.isRequired,
  bookings: PropTypes.array.isRequired,
  newBooking: PropTypes.object
}

const mapStateToProps = state => ({
  bookings: state.bookings.items,
  newBooking: state.bookings.item
})

export default connect(mapStateToProps, { fetchBookings })(Bookings);
