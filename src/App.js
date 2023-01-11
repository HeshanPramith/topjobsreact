import React from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Home from './Components/Home';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='main-cont'>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
