import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

/*
class App extends Component{
  render(){
    var p1 =document.createElement('p');
    p1.textContent = "これはサンプルです";
    document.body.appendChild(p)
*/
    export default App;
