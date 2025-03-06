//function to create
function create(){
const paragraph = document.createElement("p")
paragraph.innerHTML = "Which produce do you want?"//Enables you to ensure that the produce appears on the screen
document.body.appendChild(paragraph)
}

//function to read
function read(){
const readFms = document.getElementById("readFms")
console.log("Read Farms")
}

//function to update
function update(){
const updateLts = document.getElementById("updateLts") 
console.log("Update the different lists")
} 

//function to delete
function erase(){
const deleteIt = document.getElementById("deleteIt")
console.log("Delete commodity Items")
}