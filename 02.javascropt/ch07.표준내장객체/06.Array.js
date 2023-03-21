//  Array
// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('audi', 'Benz', 'BMW', 'Volvo');
console.log(cars);

//배열 속성
console.log(fruits.length, cars.length);

//메소드
//1.concat
let newfruits = fruits.concat('orange', 'mango')
console.log(fruits);
console.log(newfruits);

//2.join
console.log(`내가 갖고 싶은 차 ${cars.join(', ')}`);

//3.pop()*          *파괴적 메소드
console.log(cars.pop());           //마지막 요소를 빼낸다
console.log(cars);

//4.push()*
cars.push('Hyundai');              //마지막 부분은 없애고 새로운 요소 추가
console.log(cars);

//5.reverse()*
cars.reverse();             //배열의 순서를 뒤집어 준다 ex)123->321
console.log(cars);

//6.slice()            //-시작 인텍스는 포함,마지막 인덱스는 포함하지 않음
let germanyCars = cars.slice(1);
console.log(germanyCars);
console.log(cars.slice(1, 3));

//7.sort()*
cars.sort();
console.log(cars);
let numbers = [34, 56, 8, 29, 94, 46, 75];

//오름차순(ascending order)
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

//내림차순(descending order)
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

//객체의 배열
let fruitArray = [
    { name: 'aple', price: 1000 },
    { name: 'orange', price: 2000 },
    { name: 'cherry', price: 3000 }
];
//이름의 오름차순
fruitArray.sort(function(a,b){
  if(a.name < b.name)
  return -1
  if(a.name > b.name)
  return 1;
  return 0;
});
console.log(fruitArray);

//가격의 내림차순
fruitArray.sort(function(a,b){
    return b.price - a.price
});
console.log(fruitArray);


//8. spilce()*
let someFruits =fruits.splice(1, 3);
console.log(fruits);
console.log(someFruits);

//isPalindrome()을 Array method를 이용하여 만들기
function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}
console.log(isPalindrome('우영우'));
console.log(isPalindrome('hello'));