var o = {
    v1:'v1',
    v2:'v2',
    f1: function(){
        console.log(this.v1); // 약속!! __self__ 느낌
    },
    f2: function(){
        console.log(this.v2);
    },
};

o.f1();
o.f2();