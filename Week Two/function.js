// function name(){
//     return
// }
// name()

// //function to add without parameters
// function add(a,b){
//     // let a =10;
//     // let b =15;
//     let sum=a+b;
//     return sum;
// }
// console.log(add(5,3))

// //function square
// function square(a){
//     let square =a*a;
//     return square;
// }
// console.log(square(9))

// //changing variables into functions
// let square =function(a){
//     return square;
// }

// //Arrow variables
// const square =(a)=>a*a;

//function calculate total cost
function CalculateTotalPrice(quantity, pricePerKg,produce){
   let totalPrice =pricePerKg*quantity;
return totalPrice;
console.log("The total cost for" + quantity + "kg of " + produce + "is:" +totalCost + "Ugx");
}
CalculateTotalPrice("Beans", 2000, 20)
CalculateTotalPrice("Maize", 3000, 15)
CalculateTotalPrice("CowPeas", 4000, 30)