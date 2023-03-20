// Call back 함수
function callfiveTimes(callback){
    for(let i =0; i<5;i++)
    callback();
}

const cb =function(){
    console.log('함수가 호출되었음')
}

callfiveTimes (cb);

callfiveTimes(function() {
    console.log('익명 함수가 호출되었음');
});