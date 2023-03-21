 //Date 객체 생성 방법
 //1. 현재 날짜 /시간 
 let today =new Date();
 console.log(today);                    //2023-03-21T00:16:18.467Z 시간은 반영안됨
 console.log(today.toDateString());     //Tue Mar 21 2023
 console.log(today.toLocaleString());   //2023. 3. 21. 오전 9:18:48 시간도 반영됨

 //yyyy-mm-dd hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num){
    return(num < 10) ? '0' + num : String(num);
}
function myDatetime(date) {

return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate( ))} `+
`${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
} 
console.log(myDatetime(today));

//2.Unix time 기준(1970.1.1 이후 ms 단위)
let UnixDay = new Date(1.6794e12);
console.log(UnixDay);            //2023-03-21T12:00:00.000Z

//3.문자열 기반
let strDate =new Date('2023-03-21 09:25:00');
console.log(strDate);

//4.날짜/시간 요소 기반
let elementDay = new Date(2023,2,21,9,30);   //초,밀리초는 생략 가능
console.log(elementDay);

/*
시간 연산
*/
//더하기 /빼기 
today.setDate(today.getDate() + 100);
console.log(myDatetime(today));
today.setDate(today.getDate() - 100);
console.log(myDatetime(today));

//오늘 : 1년 2개월 3일 후
let date = new Date();
date.setFullYear(date.getFullYear() + 1);   //1년후
date.setMonth(date.getMonth() + 2);         //2개월후
date.setDate(date.getDate( ) + 3);          //3일후
console.log(myDatetime(date));

//시간 간격
let chrismas =new Date(2023,11,25)
let diffMs = chrismas.getTime() -today.getTime();
let difDay = Math.ceil(diffMs / (24 *60 *60 *1000));
console.log(difDay);

//수능일 : 2323-11-26
diffMs = new Date(2023,10,16).getTime() - today.getTime();
difDay = Math.ceil(diffMs / (24 *60 *60 *1000));
console.log(difDay);

//어제 날짜
diffMs = today.getTime() -new Date(2023,02,20).getTime() ;
difDay = Math.floor(diffMs / (24 *60 *60 *1000));
console.log(difDay);

