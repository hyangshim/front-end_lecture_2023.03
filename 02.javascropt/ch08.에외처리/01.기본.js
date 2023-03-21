// error.error.error();
//try catch으로 묶으면 서버가 멈추지 않고 에러가 기록됨
try{
    error.error.error();
}catch(e){
    console.log(e.name);
    console.log(e.message);
}

console.log('This is end')