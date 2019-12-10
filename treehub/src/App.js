import React from 'react';
//import logo from './logo.svg';
import './App.css';
import image from './images/joucho_fuantei_man.png';
//var Treelink = new Treelink[20];
  var clicklink;
function click_recieve(e) {
  clicklink = image;
  console.log(clicklink);

}

function App() {
  return (
    <div className="App">
      <button onClick={click_recieve} e = {image}>
      <img src = {image} alt = ""/>
      </button>
    </div>
  );
}

export default App;
