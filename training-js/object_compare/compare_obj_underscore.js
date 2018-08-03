const _ = require('underscore');



let a = {
  name:'A',
  age:16,
  address:{
    street:'AAA'
  }
};

let b = {
  name:'A',
  age:16,
  address:{
    street:'AAA'
  }
};
console.log(_.isEqual(a,b));