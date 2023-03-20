//디지털 시계,00:00 ~ 23:59
//하루동안 3이 표시되는 시간은 몇초인가?
let totalseconds =0;
for (let hour = 0; hour <24; hour++){
    for(let minute = 0;minute<60;minute++){
        let display = hour +':'+minute;
        if(display.indexOf('3') >=0)               //display에 3이 있으면 0이상인 값을 반환
        totalseconds +=60;
    }
}
console.log(totalseconds);

//ispalindrome 함수 만들기
function ispalindrome(str){
  let reverseStr = '';
  for (let i = str.length -1;i >= 0;i--)
  reverseStr+=str[i];
  return str == reverseStr;
}
console.log(ispalindrome('우영우'));
console.log(ispalindrome('소주 만병만 주소'));

//c:\\progrm Files\\node js\\node.exe 에서 파일명만 출력하세요
const path = '//c:\\progrm Files\\node js\\node.exe';
let index = path.lastIndexOf('\\');
let filename = path.substring(index + 1);
console.log(filename);

let pathArray = path.split('\\');
console.log(pathArray[pathArray.length -1]);









//1에서 1000까지 숫자가 있다.
//0은 몇번,1은 몇번,...,9는 몇번 사용되는가?
let numStr ='';
for (let i = 1; i <=1000; i++)
numStr += i;

console.log(numStr.length);
for(let num = 0; num <= 9; num++){
let count =numStr.split(String(num)).length -1;
console.log(`${num}은/는 ${count}번 사용됨.`)
}