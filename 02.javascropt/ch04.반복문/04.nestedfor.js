
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < 5; k++) {
        star += '*';
    }
    //console.log(star)
}

// 다이아 몬드(1사분면)
for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let k = 0; k < i; k++) {          //i개 만큼 별 만들기
        star += '*';
    }
    // console.log(star);
}
// 별모양 그리기(4사분면)
for (let i = 5; i >= 1; i--) {
    let star = '';
    for (let k = 0; k < i; k++) {           //i개 만큼 별 만들기
        star += '*';
    }
    // console.log(star)
}
// (2,4사분면)
for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let k = 0; k < 5 - i; k++)                //5-i 만큼 공백 만들기
    star += ' ';
for (let k = 0; k < i; k++) {                 //i개 만큼 별 만들기
    star += '*';
}
    console.log(star);
}

//3사분면
for (let i = 5; i <= 1; i--) {
    let star = '';
    for (let k = 0; k < 5 - i; k++)               //5-i 만큼 공백 만들기
    star += ' ';
for (let k = 0; k < i; k++) {                 //i개 만큼 별 만들기
    star += '*';
}
    console.log(star);
}