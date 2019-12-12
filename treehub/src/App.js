import React from 'react';
//import logo from './logo.svg';
import './App.css';
import image from './images/joucho_fuantei_man.png';
import image2 from './images/jk.png';
import toumei from './images/toumei.png';
//import { object } from 'prop-types';
//var Treelink = new Treelink[20];




function App() {
  const [image_state,getImage] = React.useState(toumei);
  const [send_image,setImage] = React.useState(toumei);
  function click_recieve() {
    console.log(image_state);
    //({clicklink: image_url});  
    getImage(image)
    //console.log(image);
    console.log(image_state);
  }
  function click_send(){
    setImage(image_state);
  }
  return (
    <div className="App">
      <button onClick={click_recieve}>
        <img src={image} alt=""/>
      </button>
      <button onClick={click_send}>
        <img src={send_image} alt=''/>
      </button>
    </div>
  );
}

export default App;
