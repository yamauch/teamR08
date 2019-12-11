import React, { Component } from 'react';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
import './change.css';
import tree from './images/tree.jpg';

class change extends Component {
    render() {
      returun(
          <div>
              <img src={tree} className="display_tree" alt="error" />
          </div>
      );
    }
  }
  export default change;