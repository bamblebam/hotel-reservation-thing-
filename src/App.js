import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route path="/rooms/:slug">
          <SingleRoom />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
