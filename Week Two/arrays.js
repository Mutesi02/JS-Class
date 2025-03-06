let branches =["main", "satellite"];
let produceList =["soya", "cowpeas", "beans", "soy peas", "gnuts"];
let suppliers =["John Traders Ltd", "AgroFarm Ltd", "Mattuga Farms", "Maganjo Cooperatives"];
let userRoles =["manager", "director","sales agent"];
// console.log(suppliers.length)

let firstSupplier = suppliers[0]
console.log(firstSupplier)

let secondSupplier = suppliers[1]
console.log(secondSupplier)


suppliers[0] ="katende";
console.log(suppliers)

let lastIndex = suppliers.length -1; //This looks for the last supplier
console.log(lastIndex);

// let stockOfBeans = {
//     produceName :"beans",
//     quantity :200,
// }

// let stockOfMaize ={
//     produceName :"maize",
//     quantity :1500,
// }

// let stockOfCowpeas ={
//     roduceName :"cowpeas",
//     quantity :500,
// }

// let stockOfSoypeas ={
//     roduceName :"soypeas",
//     quantity :300,
// }

// let stockOfGnuts ={
//     roduceName :"gnuts",
//     quantity :6000,
// }

let stockInventory = [
    { produce: "Beans", quantity: 2000 },
    { produce: "Grain Maize", quantity: 1500 },
    { produce: "Cow Peas", quantity: 1800 },
    { produce: "G-nuts", quantity: 1200 },
    { produce: "Soybeans", quantity: 1000 }
];
// console.log("Available stock with Quantity is:", stockInventory)

let salesRecords = [
    { produce: "Beans", buyer: "Michael", amountPaid: 50000, salesAgent: "Alice", date: "2025-02-10" },
    { produce: "Soybeans", buyer: "Sarah", amountPaid: 80000, salesAgent: "Brian", date: "2025-02-11" }
];

//name, amount due, contact, NIN
let trustedBuyers = [
    { name: "James Ouma", NIN: "CM1234567890AB", amountDue: 150000, dueDate: "2025-03-01" },
    { name: "Mariam Njeri", NIN: "CM9876543210XY", amountDue: 200000, dueDate: "2025-03-05" }
];

let salesAgent = ["Alice", "Brian", "Charles", "Deborah"]