import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1 className="ml-5" >HackOrganized</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
