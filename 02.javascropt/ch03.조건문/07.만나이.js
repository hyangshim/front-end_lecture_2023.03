/* //생일 - 오늘 현재 만나이 계산
const bYear = 2000, bMonth =3, bDay = 20;
const toDay = new Date();
const tYear =toDay.getFullYear();
const tMonth = toDay.getMonth() + 1;
const tDay = toDay.getDate();
console.log(tYear,tMonth,tDay); */


const byear = 2000, bmonth =1, bday = 1;
const today = new Date();
const tyear =today.getFullYear();
const tmonth = today.getMonth() + 1;
const tday = today.getDate();
console.log(tyear,tmonth,tday);

let age;
if(tmonth > bmonth)
age =tyear - byear;
else if (tmonth <bmonth)
age = tyear - byear -1;
else {
    if (tday>=bday)
    age =tyear - byear;
    else
    age =tyear - byear - 1;
}
console.log(age)