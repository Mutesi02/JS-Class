//and(&&)
//Addition(+)
//Subtraction(_)
//Greater than(>)
//Less than(<)

//Squareroot

//exponations
//increment

//eqaulity(==)
//Modulus(%)
//inequality(!=)
//parenthesis()
//NOT(!)
//Percentages(%)
//increment operators(++)

//Six categories

//Assignment Operators
//Equal(=)
//less than or equal to(<=)
//greater than or equal to(>=)
//decrement(--)
//strict equality(===)

//Comparison Operators
//Equal(=)
//less than or equal to(<=)
//greater than or equal to(>=)
//strict equality(===)

// Arithmentic Operator
//Divide(|)
//Multiplication(*)


// Logical Operators
//Or
//And

// Increment Operator
// Decrement Operator
//decrement(--)
// Ternary Operators

//Arithmetic
let pricePerKg = 3000;
let quantity = 10;
let totalCost = pricePerKg*quantity;
console.log("The price of 10kg of beans is:" + totalCost)
console.log(`The price of beans is: ${totalCost}$`)

//dicount
let discount = 500;
let discountedPrice = totalCost-discount;
console.log(discountedPrice)

//comparison
let buyerMoney =5000;
let priceOfMaizePerKg =6000;
console.log(buyerMoney!==priceOfMaizePerKg)

//Logical operators
let stockIsAvailable =true;
let buyerIsLegit =false;
console.log(stockIsAvailable && buyerIsLegit)

//concatination
let buyerName ="Felicity";
let productName ="Soya";
let receiptMessage ="Thank you," +buyerName +"You have just purchased"+quantity+"kgs of"+productName;
console.log(receiptMessage)

//Assignment operators
let stock =100;
let sales =20;
stock =stock-sales;
stock-=sales
// console.log(stock)

let salesRevenue =0;
salesRevenue =salesRevenue+totalCost
salesRevenue+=totalCost
console.log(salesRevenue)

//Exercise One
let a=4;
let b=3;
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a===a)
console.log(a!=a)
console.log(a!==a)
console.log(a!='a')
console.log(a=='a')
console.log(a==='a')

//Exercise Two
let myAge =250;
let yourAge =25;
let ageDifference =myAge-yourAge;
console.log("I am " +  ageDifference + " years older than you.")

//Exercice Three
let challenge ="30 Days Of Javascript";
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
let result =challenge.substr(3);
console.log(result)
let result =challenge.slice(3);
console.log(result)
console.log(result.includes("script"))//It return true if the word word exits in a string
let JavascriptArray =challenge.split(" ");//.split(" ") breaks the the string wherever there's space.
console.log(JavascriptArray)
let x = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let xArray = x.split(", ");
console.log(xArray)
let y =challenge.replace("javascript", "python");//It has failed though
console.log(y)

//Order of precedence
let value =3+(4*5);
console.log(value)
let value =10/2*4+5-3;
console.log(value)

