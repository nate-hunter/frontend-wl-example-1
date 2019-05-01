import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../actions/userActions'; //handles the fetch, and saves the user object to the Redux store and adds the token to localStorage.

class Signup extends Component {
  state = {
    username: "",
    password: "",
    role: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>
        <br/>
        <label>Username:  </label>
        <input
          name="username"
          placeholder="Please Enter Username"
          value={this.state.username}
          onChange={this.handleChange}/><br />
        <br/>
        <label>Password:  </label>
        <input
          type="password"
          name="password"
          placeholder="Please Enter A Password"
          value={this.state.password}
          onChange={this.handleChange}/><br />
        <br/>
        <label>Role:  ***MAKE DROPDOWN/SELECT***</label>
        <input
          name="role"
          placeholder="Are you a student or tutor?"
          value={this.state.role}
          onChange={this.handleChange}/><br />
        <br/>
        <input type="submit" value="Sign Up!"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(Signup);
