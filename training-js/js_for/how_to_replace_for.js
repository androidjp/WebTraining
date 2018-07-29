// 数组去空

const filterNotEmpty = arr => arr.filter(Boolean);

// const arrContainsEmptyVal = [2,3,4,1, undefined, null, 0, ''];
// console.log(arrContainsEmptyVal);
// console.log(filterNotEmpty(arrContainsEmptyVal));
// console.log(arrContainsEmptyVal);

//-------------------------------------------------------------

// 对象数组中符合条件的人 加工资
// const VIPUsers = [
//     { username: "Kelly", isVIP: true, balance: 20 },
//     { username: "Tom", isVIP: false, balance: 19 },
//     { username: "Stephanie", isVIP: true, balance: 30 }
// ];
//
// let result = VIPUsers.map(user => user.isVIP? {...user, balance: user.balance + 100}: user);
// console.log(result);

//-------------------------------------------------------------

//判断字符串是否含有元音字母
// const randomStr = 'hifjdoifj';
//
// const hasYuanYin = char => ['a','e','i','o','u'].includes(char);
// console.log(hasYuanYin(randomStr));


//-------------------------------------------------------------

// 全判断： 判断以下所有人是否都是成年人
const users = [
    { name: "Jim", age: 23 },
    { name: "Lily", age: 17 },
    { name: "Will", age: 25 }
];

console.log(users.every(item => item.age > 30));

console.log(users.find(user=> user.age>=18));