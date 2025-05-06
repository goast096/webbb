function callmethod(){
    let counter =0;
    return function(){ //封存在記憶體內部
        counter++;
        return counter;
    }
}
let add = callmethod();
add();
add();
add();
add();
console.log(add());

callmethod();
callmethod();
callmethod();
callmethod();
callmethod();
console.log(callmethod());

//閉包-呼叫函式內的函式
//有疑問的地方放中斷點