// 역 for 반복믄
let sum = 0;
for(let i = 10; i>0;i--){
    sum +=i
   // console.log(`index=${i},sum${sum}`);
}

//1에서 10까지 홀수의 합
let oddsum = 0;
for (let i =1; i<=10;i+=2){
    oddsum += i;
    console.log(`index=${i},sum${oddsum}`);
}

//48에서 10까지 3의 배수의 합
let sum3 =0;
for (let i = 100; i >=10; i -= 3){
    sum3 += i;
    // console.log(`index=${i},sum${sum3}`);
}