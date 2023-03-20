///객체 (Object)


//배열(Array)
let fruits = ['딸기','사과','수박','참외'];
console.log(typeof fruits);

let fruitObj ={0:'딸기',1:'사과',2:'수박',3:'참외'};   //키(인덱스) :밸류
console.log(fruits[0],fruitObj[1])



//객체(object,python dictionary,ㅓava Map)
let persinArray =['제임스',28,'남자',175,'프로그래머',30.0]
let persinInfo = {
    name:'제임스',age:28,gender:'남자',        //key가 string인 경우 따옴표 생략 가능
    height:175,job:'프로그래머',bmi:30.0
}

console.log(persinArray);
console.log(persinInfo);

//객체에 대한 접근
console.log(persinInfo['name']);                //이런식으로 사용하지 않음
console.log(persinInfo.name);                   //대부분 이렇게 사용함
let key ='age'
console.log(persinInfo[key]);                   // 이렇게 변수일때 사용