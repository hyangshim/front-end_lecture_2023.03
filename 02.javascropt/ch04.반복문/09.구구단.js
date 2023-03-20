//구구단
let num = 2
for (let i = 1; i <= 9; i++){
    // console.log(`${num}*${i}=${num*i}`);
}
//랜덤 구구단
let dan = parseInt(Math.ceil(Math.random() * 8)+1);
for(let i = 1; i <= 9;i++){
    console.log(`${dan} * ${i} = ${dan*i}`);
}

// 알람시계
let hour = 0,minute = 20;
let newhour,newminute