// 1~10홀수의 합
let sum = 0
for (let i = 1; i <= 10; i++){
    if(i % 2 ==0)
    continue
    sum +=i;
    console.log(`index=${i},sum${sum}`);
}

//배열의 값이 홀수인 원소의 합
let numbers = [3,57,25,48,83,79];
let oddsum = 0;
for (let number of numbers){
   /*  if(number % 2 ==0)
    continue
    oddsum += number; */
    if(number % 2 == 1)
    oddsum +=number;
}
console.log(oddsum);