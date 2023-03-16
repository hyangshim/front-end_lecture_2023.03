// 조건 연산자, 3항 연산자
let num = 10;
let evenodd = (num % 2==0)?'짝수' : '홀수';
console.log(`${num}은/는${evenodd}입니다.`);

let varible = 3;
varible = (typeof(varible)=='undefined')? 0 : varible;
console.log(varible);