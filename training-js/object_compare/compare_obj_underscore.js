const _ = require('underscore');



let a = {
  name:'A',
  age:16,
  address:{
    street:'AAA'
  },
  arr: [
    {
      city:'A',
      code:'A'
    },
    {
      city:'B',
      code:'B'
    },
  ]
};

let b = {
  age:16,
  arr: [
    {
      city:'A',
      code:'A'
    },
    {
      city:'B',
      code:'B'
    },
  ],
  name:'A',
  address:{
    street:'AAA'
  }
};
console.log(_.isEqual(a,b));