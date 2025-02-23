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