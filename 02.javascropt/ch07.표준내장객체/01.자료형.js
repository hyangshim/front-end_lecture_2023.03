//기본형 -primitiver type
let number =273.14;
let string ='hello!'
let boolean =true;
console.log(typeof(number),typeof(string),typeof(boolean));

// 객체 자료형 -기본 자료형을 객체로 만든 것을 Wrapper class라 불림
let numObj = new Number (273.14);
let strObj = new String('hello!');
let boolObj = new Boolean(true);
console.log(typeof(numObj),typeof(strObj),typeof(boolObj));

console.log(number == numObj ,number === numObj);

let fruits ='사과,딸기,바나나'
console.log(fruits.split(','));