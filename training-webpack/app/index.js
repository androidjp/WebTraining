// var greeter  = require('./Greeter');
// document.querySelector("#root").appendChild(greeter());

// 使用React+ ES6 方式渲染DOM
import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter'
import './main.css'
;

// import './main.css';//使用require导入css文件

render(<Greeter/> , document.getElementById('root'));

