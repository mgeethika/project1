
import React, { Component } from 'react';
// import {BrowserRouter} from  "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';



class App extends Component {
  render(){
    return(
      
      <div className="App">
      
      <Navbar/>
      </div>
     
     

    );
  }


}
export default  App;