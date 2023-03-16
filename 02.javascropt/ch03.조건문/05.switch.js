//switch -multi select
let score = 54;
let scoreDigit = parseInt(score / 10);        //10으로 나눈 몫,정수값
let grade;

switch (scoreDigit) {
    case 10:
    case 9:
        grade = 'a';
        break;
    case 8:
        grade = 'b';
        break;
    case 7:
        grade = 'c';
        break;
    case 6:
        grade = 'd';
        break;
   default :
   grade ='f';
}
   console.log(`성적:${score},학점:${grade}`);

