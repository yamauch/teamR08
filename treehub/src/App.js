import React, { Component } from 'react';
import './App.css';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import tree from './images/tree.jpg';
import ccc from './images/ccc.jpg';
import { array, string } from 'prop-types';

var images = new Array(ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc);

function Edit(){
  const[menucheck,setCheck] = React.useState(false);
  function menuChange(){
    setCheck(!menucheck);
  }
  return(
    <>
    <h1 className="Edit_header">これは編集画面です</h1>
    <section className="Edit_left">
      <div className="Edit_tree_item">{/*position:relation*/}
        <img src={tree}className="Edit_img_tree"></img>
        <img src={images[0]}className="Edit_item_size Edit_item1"></img>
        <img src={images[1]}className="Edit_item_size Edit_item2"></img>
        <img src={images[2]}className="Edit_item_size Edit_item3"></img>
        <img src={images[3]}className="Edit_item_size Edit_item4"></img>
        <img src={images[4]}className="Edit_item_size Edit_item5"></img>
        <img src={images[5]}className="Edit_item_size Edit_item6"></img>
        <img src={images[6]}className="Edit_item_size Edit_item7"></img>
        <img src={images[7]}className="Edit_item_size Edit_item8"></img>
        <img src={images[8]}className="Edit_item_size Edit_item9"></img>
        <img src={images[9]}className="Edit_item_size Edit_item10"></img>
        <button className={`${menucheck ? 'items_after':'items_before'}`} onClick ={menuChange} >かざり</button>
        <article >
          <ul className={`${menucheck ? 'Edit_menu_open Edit_itembox':'Edit_menu_close Edit_itembox'}`}>
            <li><img src={images[0]} className="Edit_menu_img"></img></li>
            <li><img src={images[0]} className="Edit_menu_img"></img></li>
            <li><img src={images[0]} className="Edit_menu_img"></img></li>
          </ul>
        </article>
      </div>
      
    </section>
    
    <section className="Edit_right">
      <div className="Edit_tree_item">
        <img src={tree}className="Edit_img_tree"></img>
        <img src={images[0]}className="Edit_item_size Edit_item1"></img>
        <img src={images[1]}className="Edit_item_size Edit_item2"></img>
        <img src={images[2]}className="Edit_item_size Edit_item3"></img>
        <img src={images[3]}className="Edit_item_size Edit_item4"></img>
        <img src={images[4]}className="Edit_item_size Edit_item5"></img>
        <img src={images[5]}className="Edit_item_size Edit_item6"></img>
        <img src={images[6]}className="Edit_item_size Edit_item7"></img>
        <img src={images[7]}className="Edit_item_size Edit_item8"></img>
        <img src={images[8]}className="Edit_item_size Edit_item9"></img>
        <img src={images[9]}className="Edit_item_size Edit_item10"></img>
      </div>
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
export default App;
