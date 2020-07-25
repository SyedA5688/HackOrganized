import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Home from './components/tabs/Home';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
