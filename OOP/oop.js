//object literal
const person ={
    name: "Ayebare",
    age: 29,
    greet:function(){
        console.log(`My name is ${this.name} `)
    }

}

// const person2 = new Object()
// person2.name = "Andrew"
// person2.age = 60


//constructor function--the variable should be capital letter
function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`)
}
const person2 = ("Mutesi", 23)
console.log(person2)
person2.greet()
const person4 = ("Brian", 33)
person4.greet()
const person3 = ("Ashley", 36)
person3.greet()
const person5 = ("Felicity", 43)
person5.greet()



class Xperson{
    constructor (name,age)

    {
        this.name = name;
    this.age = age;
    this.powers = this.powers;
}
power(){
    console.log(`I have ${this.powers}`)
}
}
const Xperson2 = new Xperson("Munir",30, "claws")
console.log(Xperson2)
Xperson2.powers()
const Xperson3 = new Xperson("Cotrida",60, "cancer")
console.log(Xperson3)
Xperson3.powers()
const Xperson4 = new Xperson("Elizabeth",40, "wind")
console.log(Xperson4)
Xperson4.powers()

to  Everyone
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const emp1 = new Employee("David", 28, "Software Engineer");
emp1.greet();
emp1.work();