import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Bookings from './components/Bookings';
import BookingForm from './components/BookingForm';
import Map from './components/Map'

import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src="https://images.ctfassets.net/e4m0suk6oqie/16UOVXJ7fwcEGIguEg6yqs/ee86ad14fff1f3c536c021835411d168/welogo_white.png" className="App-logo" alt="logo" />
        </header>
        <nav>
          <Link to="/bookings">
            <div>
              <img src="https://images.ctfassets.net/e4m0suk6oqie/16UOVXJ7fwcEGIguEg6yqs/ee86ad14fff1f3c536c021835411d168/welogo_white.png" className="App-logo" alt="logo" />
            </div>
          </Link><br/>
          <Link to="/home">Home</Link><br/>
          <Link to="/map">Map</Link><br/>
          <Link to="/signup">Signup</Link>
        </nav>
        <hr/>
        <br/>
        <Switch>
          <Route path="/bookings/:id" render={(renderProps) => {
            console.log('props rendering',renderProps)
            return <Home />
          }} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/map" component={Map} />
          <Route path="/signup" component={Signup}/>

          <BookingForm />
          <hr />
          <Bookings />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
