import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBooking } from '../actions/bookingActions';

class BookingForm extends React.Component {
  state = {
    title: '',
    body: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();

    const booking = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createBooking(booking)
  };

  render(){
    return(
      <div>
        <h1>Make Booking</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Date: ***CREATE CALENDAR***</label><br />
            <br />
            <input type="text" name="date" value={this.state.date} onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>Time: </label><br />
            <br />
            <input type ="text" name="time" value={this.state.time} onChange={this.onChange} />
          </div>
          <br/>
          <div>
            <label>Goals: </label><br /><br />
            <select value={this.state.session_goal} name="session_goal" onChange={this.onChange}>
              <option>---</option>
              <option value="Get better grades">Get better grades</option>
              <option value="Pass an important exam">Pass an important exam</option>
              <option value="Prepare for SAT/SSAT">Prepare for SAT/SSAT</option>
              <option value="Gain better proficiency in a subject struggling with">Gain better proficiency in a subject struggling with</option>
            </select>
          </div>
          <br/>
          <div>
            <label>Subject: </label><br /><br />
            <select value={this.state.subject} name="subject" onChange={this.onChange}>
              <option>---</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="Reading">Reading</option>
              <option value="Writing">Writing</option>
              <option value="Programming">Programming</option>
            </select>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <br/>
      </div>
    )
  }
};

BookingForm.propTypes = {
  createBooking: PropTypes.func.isRequired
};

export default connect(null, { createBooking })(BookingForm);
