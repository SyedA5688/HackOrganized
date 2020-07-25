import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarSignedIn from './components/layout/NavbarSignedIn';
import NavbarSignedOut from './components/layout/NavbarSignedOut';
import Home from './components/tabs/Home';
import About from './components/tabs/About';
import Account from './components/tabs/Account';
import Assignments from './components/tabs/Assignments';
import BrainStorm from './components/tabs/BrainStorm';
import CurrentWork from './components/tabs/CurrentWork';
import ProjectDetails from './components/tabs/ProjectDetails';
import Resources from './components/tabs/Resources';
import TeamBuilder from './components/tabs/TeamBuilder';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import firebaseKey from './config/firebaseKey';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseKey.firebaseConfig);
    }
  }

  onAuthChange = (user) => {
    this.setState({isAuthenticated: !!user});
  }

  render() {
    if (this.state.isAuthenticated){
      // If logged in, show Main Tab Navigator
      return (
        <BrowserRouter>
          <div className="App" >
            <NavbarSignedIn />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/assignments" component={Assignments} />
              <Route exact path="/brainstorm" component={BrainStorm} />
              <Route exact path="/currentwork" component={CurrentWork} />
              <Route exact path="/projectdetails" component={ProjectDetails} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/teambuilder" component={TeamBuilder} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div className="App" >
            <NavbarSignedOut />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/teambuilder" component={TeamBuilder} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
