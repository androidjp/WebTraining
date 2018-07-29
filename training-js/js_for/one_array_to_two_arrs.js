// 一个数组，通过filter，得到符合条件和不符合条件的两个数组

const partitionArr = (arr, isValid) =>
    arr.reduce(
        ([pass, fail], elem) => isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]
    );

const partitionArr_for = (arr, isValid) => {
    const pass = [];
    const fail = [];
    for (let i = 0; i < arr.length; i++) {
        if (isValid(arr[i])) {
            pass.push(arr[i]);
        } else {
            fail.push(arr[i]);
        }
    }
    return [pass, fail];
};

const users = [
    {name: "Adam", age: 30, sex: "male"},
    {name: "Helen", age: 27, sex: "female"},
    {name: "Amy", age: 25, sex: "female"},
    {name: "Anthony", age: 23, sex: "male"},
];

const isMale = person => person.sex === 'male';

let [maleUser, femaleUser] = partitionArr(users, isMale);
console.log(maleUser, femaleUser);

[maleUser, femaleUser] = partitionArr_for(users, isMale);
console.log(maleUser, femaleUser);
