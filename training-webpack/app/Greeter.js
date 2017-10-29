// const config = require('./config/app.config.json');
// Greeter.js
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
//   };


/// 使用 React + ES6语法 ，写一个组件并返回

import React, {Component} from 'react'
import config from './config/app.config.json';
import styles  from './greeter.css';
class Greeter extends Component{
  render() {
    return (
        <div className={styles.root}>
          {config.greetText}
        </div>
      );
  }
}

export default Greeter