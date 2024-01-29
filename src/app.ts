// import {hi} from './m1';
//
// console.log("hello");
// let ab: number = 10;
// console.log("hahaha");
// console.log("132324");
// console.log(hi);
// const student = {name: "lxw", age: 12}
// console.log(student.name)
//
// console.log("nihao");

class Person {
    name = "lxwss";
    age: number = 18;

    seyHello(na: string) {
        this.name = na
        console.log(this.name);
    }
}

class Dog {
    // name:string;
    // age:number;
    private name: string;
    private age: number;

    constructor(age: number, name: string) {
        this.name = name
        this.age = age
    }

    bark() {
        console.log(this.name);
    }
}

// const per = new Person();
// per.name="lxw";
// console.log(per.name);
// console.log(per.age);
// per.seyHello("hhhhhh")

const dog = new Dog(16, "1");
dog.bark()

