// 선언적 함수
function add(a, b){          //a,b -parameter, argument, 인수
    return a + b;
}
console.log(add(3,4));
console.log(add(5,8));

//익명 함수
const anoynousSum =function (a, b){
    return a +b;
}
console.log(anoynousSum(3,4));
console.log(anoynousSum(1,8));

//화살표 함수,람다 함수
const arrowSum =(a,b)=> a+b;
console.log(arrowSum(9,4));
console.log(arrowSum(10,8));