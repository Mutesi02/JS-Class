//Exercise 4
let str ="30 Days Of Javascript";
let char = str.charAt(15);
console.log(char);

let cCodeJ = str.charCodeAt(11);
console.log(cCodeJ)

console.log(str.indexOf('a'));

console.log(str.lastIndexOf('a'))

let string ="You cannot end a sentence with because because because is a conjuction";
console.log(string.lastIndexOf("because"))

console.log(string.search("because"))

console.log(str.trim())

//Exercise 5
console.log(str.startsWith("30")) //startsWith checks if the string begins with a specified substring

console.log(str.endsWith("Javascript"))

console.log(str.match(/a/g)) ///a/g is a regular expression where 'a' is the character to match and g is the global flag that ensures all occurencies are found.

let x = "30 Days Of ";
let y = "Javascript";
let xy = x.concat(y);
console.log(xy)

console.log(str.repeat(2))

//Exercise 6
let value = '10';
console.log(typeof value)//checking to see whether it's a string
 value =Number(value);
 console.log(typeof value)// number
 console.log(value === 10)

 let value2 = parseFloat('9.8');
 value2 = Math.ceil(value2); //this rounds the figure to 10
 console.log(value2)//evaluates to false because it returns 9.8 which is less that 10

 console.log("python".includes("on") && "jargon".includes("on")); //Checks if python and jargon include "on"

 let sentence = "I hope this course is not full of jargon";
 console.log(sentence.includes("jargon")); //check if it includes jargon

 //We use Math.random to generate a random number.
 let randomNumber =Math.floor(Math.random()*101); //Math.random() generates a random decimal number btn (0,101), while the Math.floor() rounds it down to ensure it's an integer between 0-100.
 console.log(randomNumber)

 let randomNum = Math.floor(Math.random()*50) +51;
 console.log(randomNum)

 let randomN =Math.floor(Math.random()*256);
 console.log(randomN)

let javascriptString = "JavaScript";
let randomString = Math.floor(Math.random()*javascriptString.length);
let randomChar = javascriptString[randomString];
console.log(randomChar)

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 2 7");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

let strg = "You cannot end a sentence with because because because in a conjuction";
console.log(string.substr(31,23)) //31 is for the index where because starts from, while 23 is length from the first because to the last because.