//  let person ={
//   name:"john", 
//   age: 16;
//     speak :function(){
//         console.log("Hello my name is " +this.name +"I am " +this.age +"years old")
//     }
//     }
// console.log(person.name);
// person.speak()

let store={
    name: "Karibu groceries",
    location: "Maganjo",
    stock:{
        beans:100,
        peas:200,
        maize:300,
    },
    saleProduce: function(quantity){
        console.log("sold successfully")
    }
}
store.saleProduce()

let calculator ={
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    }
    }
console.log(calculator.add(12,4))
console.log(calculator.subtract(12,4))
