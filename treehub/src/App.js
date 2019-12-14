 
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
import MenuButton from './images/MenuButton.jpg';
import SaveButton from './images/SaveButton.jpg';


var images = new Array(SaveButton,SaveButton,SaveButton,ccc,ccc,ccc,ccc,ccc,ccc,ccc,toumei,joucho,jk);
var SaveImages = new Array(ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,ccc,);
var MenuImages = new Array(SaveButton,SaveButton,SaveButton,SaveButton,SaveButton,SaveButton,SaveButton,SaveButton,SaveButton,SaveButton);

/*
<button onClick = { () => click_recieve(11)}>
            <li><img src={SaveButton} className="Edit_menu_img"></img></li>
            </button>
                        <button onClick = {() => click_recieve(12)}>
            <li><img src={SaveButton} className="Edit_menu_img"></img></li>
            </button>
            <li><img src={SaveButton} className="Edit_menu_img"></img></li>
            */
function Edit(){
  
  const[menucheck,setCheck] = React.useState(false);//メニューのオンオフを切り替えるboolean

  const [image_state,getImage] = React.useState(toumei);

  const [top,setTop] = React.useState(SaveImages[0]);
  const [firstL,setFL] = React.useState(SaveImages[1]);
  const [firstR,setFR] = React.useState(SaveImages[2]);
  const [secondL,setSL] = React.useState(SaveImages[3]);
  const [secondM,setSM] = React.useState(SaveImages[4]);
  const [secondR,setSR] = React.useState(SaveImages[5]);
  const [bottomL,setBL] = React.useState(SaveImages[6]);
  const [bottomML,setBML] = React.useState(SaveImages[7]);
  const [bottomMR,setBMR] = React.useState(SaveImages[8]);
  const [bottomR,setBR] = React.useState(SaveImages[9]);
  

  function click_recieve(i) {//受け取りの関数。iが配列の番号
    getImage(MenuImages[i]);
    console.log(image_state);
  }
  
  function top_send(){//渡すときの関数。
    setTop(image_state);
  }
  function firstL_send(){
    setFL(image_state);
  }
  function firstR_send(){
    setFR(image_state);
  }
  function secondL_send(){
    setSL(image_state);
  }
  function secondM_send(){
    setSM(image_state);
  }
  function secondR_send(){
    setSR(image_state);
  }
  function bottomL_send(){
    setBL(image_state);
  }
  function bottomML_send(){
    setBML(image_state);
  }
  function bottomMR_send(){
    setBMR(image_state);
  }
  function bottomR_send(){
    setBR(image_state);
  }
  function menuChange(){
    setCheck(!menucheck);
  }

  return(
    <>
    <h1>TreeHub</h1>
    <section className="Edit_left">
      <div className="Edit_tree_item">{/*position:relation*/}
        <img src={tree}className="Edit_img_tree"></img>

        <img src={SaveImages[0]}className="Edit_item1"></img>
        <img src={SaveImages[1]}className="Edit_item2"></img>
        <img src={SaveImages[2]}className="Edit_item3"></img>
        <img src={SaveImages[3]}className="Edit_item4"></img>
        <img src={SaveImages[4]}className="Edit_item5"></img>
        <img src={SaveImages[5]}className="Edit_item6"></img>
        <img src={SaveImages[6]}className="Edit_item7"></img>
        <img src={SaveImages[7]}className="Edit_item8"></img>
        <img src={SaveImages[8]}className="Edit_item9"></img>
        <img src={SaveImages[9]}className="Edit_item10"></img>
        <div className="Menu"> 
          <ul className={`${menucheck ? 'Edit_menu_open Edit_itembox':'Edit_menu_close Edit_itembox'}`}>
            <li><input type="image" src={MenuImages[0]} className="Edit_menu_img" onClick = { () => click_recieve(0)}></input></li>
            <li><input type="image" src={MenuImages[1]} className="Edit_menu_img" onClick = { () => click_recieve(1)}></input></li>
            <li><input type="image" src={MenuImages[2]} className="Edit_menu_img"onClick = { () => click_recieve(2)}></input></li>             
          </ul>
          <input  type="image" src={MenuButton} className={`${menucheck ? 'MenuButton_after':'MenuButton_before'}`} onClick ={menuChange} ></input>
         </div>
      </div>
    </section>
    
    <section className="Edit_right">
      <div className="Edit_tree_item">
        <img src={tree}className="Edit_img_tree"></img>

        <input type="image" src={top} className="Edit_item1" onClick = {top_send}></input>
        <input type="image" src={firstL} className="Edit_item2" onClick = {firstL_send}></input>
        <input type="image" src={firstR} className="Edit_item3" onClick = {firstR_send}></input>
        <input type="image" src={secondL} className="Edit_item4" onClick = {secondL_send}></input>
        <input type="image" src={secondM} className="Edit_item5" onClick = {secondM_send}></input>
        <input type="image" src={secondR} className="Edit_item6" onClick = {secondR_send}></input>
        <input type="image" src={bottomL} className="Edit_item7" onClick = {bottomL_send}></input>
        <input type="image" src={bottomML} className="Edit_item8" onClick = {bottomML_send}></input>
        <input type="image" src={bottomMR} className="Edit_item9" onClick = {bottomMR_send}></input>
        <input type="image" src={bottomR} className="Edit_item10" onClick = {bottomR_send}></input>

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





