 
import React, { Component } from 'react';
import './App.css';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import tree from './images/tree.jpg';
import ccc from './images/ccc.jpg';
import joucho from './images/joucho_fuantei_man.png';
import jk from './images/jk.png';
import toumei from './images/toumei.png';
import { array, string } from 'prop-types';

var images = new Array(ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,toumei,joucho,jk);

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

function Edit(){
  
  const[menucheck,setCheck] = React.useState(false);
  const [image_state,getImage] = React.useState(toumei);
  const [send_image,setImage] = React.useState(toumei);
  
  function click_recieve(i) {//iが配列の番号
    getImage(images[i]);
    console.log(image_state);
  }
  
  function click_send(){
    setImage(image_state);
  }

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
            <button onClick = { () => click_recieve(11)}>
            <li><img src={images[11]} className="Edit_menu_img"></img></li>
            </button>
            <li><img src={images[12]} className="Edit_menu_img"></img></li>
            <li><img src={images[0]} className="Edit_menu_img"></img></li>
          </ul>
        </article>
      </div>
      
    </section>
    
    <section className="Edit_right">
      <div className="Edit_tree_item">
        <img src={tree}className="Edit_img_tree"></img>
        <button onClick = {click_send}>
        <img src={send_image}className="Edit_item_size Edit_item1"></img>
        </button>
        <img src={images[10]}className="Edit_item_size Edit_item2"></img>
        <img src={images[10]}className="Edit_item_size Edit_item3"></img>
        <img src={images[10]}className="Edit_item_size Edit_item4"></img>
        <img src={images[10]}className="Edit_item_size Edit_item5"></img>
        <img src={images[10]}className="Edit_item_size Edit_item6"></img>
        <img src={images[10]}className="Edit_item_size Edit_item7"></img>
        <img src={images[10]}className="Edit_item_size Edit_item8"></img>
        <img src={images[10]}className="Edit_item_size Edit_item9"></img>
        <img src={images[10]}className="Edit_item_size Edit_item10"></img>
      </div>
    </section>
    </>
  );
}




/*import React from 'react';
//import logo from './logo.svg';
import './App.css';
import joucho from './images/joucho_fuantei_man.png';
import jk from './images/jk.png';
import toumei from './images/toumei.png';
var images = new Array(image,image2);//画像を格納
function App() {
  const [image_state,getImage] = React.useState(toumei);
  const [send_image,setImage] = React.useState(toumei);
  
  function click_recieve(i) {//iが配列の番号
    getImage(images[i]);
    console.log(image_state);
  }
  
  function click_send(){
    setImage(image_state);
  }
  
  return (
    <div className="App">
      <button onClick={ () =>click_recieve(1)} >
        <img src={images[0]} alt=""/>
      </button>
      <button onClick={click_send}>
        <img src={send_image} alt=''/>
      </button>
    </div>
  );
}

export default App;
*/
