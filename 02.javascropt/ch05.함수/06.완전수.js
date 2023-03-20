// 완전수 구하기

// 자기 자신을 제외한 약수의 합 구하는 함수
function sumofDivisors(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0)
            sum += i;
    }
    return sum;
}


//2에서 부터 10000사이의 완전수 구하기
for(let i =2; i<= 10000;i++){
    if(i == sumofDivisors(i))
    console.log(i);
}