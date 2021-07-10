var f = function(){
    console.log(1+2);
}
console.log(f);
f();

// 함수가 값이 될 수 있다! 

var a = [f];
a[0]();
console.log(a[0]);

var o = {
    func:f
}
o.func();