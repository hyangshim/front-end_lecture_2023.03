// 숫자 변환 내장(built -in)함수

const a ='123.65', b ='0xff',c ='23';

console.log(Number(a),Number(b));
console.log(parseInt(a),parseInt(a));
console.log(parseInt(b),parseFloat(b),parseInt(c));   //255 0 23

console.log(parseInt('1401동'),Number('1401동'));  //출력 : 1401,NaN
console.log(parseInt('1401동503호'));              //출력 : 1401
