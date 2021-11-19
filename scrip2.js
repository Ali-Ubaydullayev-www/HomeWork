function obj(num1, num2) {
    if (num1, num2) {
        console.log(num1 + num2);
    }
    if  (num1) {
        return function (num2) {
            console.log(num1 + num2);
        }
    }
}
obj(1)(2);
obj(1, 2);




const obj1 = {
    a : 1,
    b : 2,
    getA(){
        console.log(this.a);
        return this
    },
    getB(){
        console.log(this.b);
    },
}

obj1.getA().getB()


