//자바스크립트의 자료형
//1.Number
console.log(5 / 2);
console.log(5 % 2);     //modulo,나머지 계산
console.log(2**10);     //2의 10제곱.1024
console.log(1.3e8);     // 1.3*10 **8승

//2.문자열(String)
console.log('She said "I Iove you"');
console.log("She said \"I Iove you.\"");
console.log('She\tsaid \nI Iove you"');
let Hello='안녕하세요?';
console.log(Hello[0],Hello[5];)
//template literal(`)
console.log('2더하기3을 한결과는',2+3,'입니다.');
console.log('2더하기3을 한결과는 ${2+3}입니다.');
console.log(`She said "I Iove you"`);
console.log(`올해는${new Date().getFullYear()}년 입니다.`);

// 3.논리형 (Booolean)
console.log(typeof(true),typeof false);
console.log(2==2.0,5 >= 4,!('가나다'>'마바사'));
let x =10;
console.log(x>8 || x <-3);           
console.log(x >=0 && x <=5);         //0<=x <=5
console.log(true >10);              //true 가 1로 자동 변환되어 비교가 됨
