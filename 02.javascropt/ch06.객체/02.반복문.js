let maria = { 이름: '마리아', 나이: 25, 직업: '학생' };
console.log(maria.이름);


let name = '제임스';
let age = 25;
let job = '게이머';
let james = { name: name, age: age, job: job };
console.log(james)

//객체에 대한 반복문은 for ~ in 을 사용한다.
for (let key in maria)
    console.log(key, ':', maria[key]);

//ES-6 (2015년도에 제정된 표준)
//key 값과 value 를 가리키는 변수의 이름이 동일하면 변수명 생략 가능
let james2 = {name, age,job}      //{ name: name, age: age, job: job }을 의미

//JSON(javaScript Object Notation)
//외부와 테이터를 주고 받을 때 사용됨
//사실상의 업계 표준(de facto standard)
let externalform =JSON.stringify(james);
console.log(typeof externalform);
console.log(externalform);

let person =JSON.parse(externalform);
console.log(person);
console.log(person.name ==james.name && person.age == james.age);