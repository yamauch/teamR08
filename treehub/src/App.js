import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import tree from './images/tree.jpg';
import ccc from './images/ccc.jpg';
import { array, string } from 'prop-types';

function Edit(){
  return(
    <>
    <h1 className="Edit_header">これは編集画面です</h1>
    
    <section className="Edit_left">
      <div className="Edit_tree_item">
        <img src={tree}className="Edit_img_tree"></img>
        <img src={ccc}className="Edit_item_size Edit_item1"></img>
        <img src={ccc}className="Edit_item_size Edit_item2"></img>
        <img src={ccc}className="Edit_item_size Edit_item3"></img>
        <img src={ccc}className="Edit_item_size Edit_item4"></img>
        <img src={ccc}className="Edit_item_size Edit_item5"></img>
        <img src={ccc}className="Edit_item_size Edit_item6"></img>
        <img src={ccc}className="Edit_item_size Edit_item7"></img>
        <img src={ccc}className="Edit_item_size Edit_item8"></img>
        <img src={ccc}className="Edit_item_size Edit_item9"></img>
        <img src={ccc}className="Edit_item_size Edit_item10"></img>
      </div>
    </section>

    <section className="Edit_right">
      <img src={tree} className="Edit_img_tree"></img>
    </section>
    </>
  );
}

function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Route exact path ='/'>
        <Link to='/Edit'>
          編集画面へ
        </Link>
      </Route>
        <Route exact path='/Edit'>
          <Edit />
      </Route>
      </BrowserRouter>
    </div>
  );
}


/*
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

*/
    export default App;
