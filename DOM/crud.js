//function to create an element in the dom
function create(){
    const paragraph = document.createElement("p")
    paragraph.innerHTML = "What is your name?"
    document.body.appendChild(paragraph)
    // const btn = createElement("button")
    // console.log("button clicked")
}

//function to read an element in the dom
function read(){
const readQn = document.getElementById("readQn")
console.log(read)
}

//function to update an element in the dom
function update(){
const updateQn = document.getElementById("updateQn")
}

//function to delete an element in the dom
function disappear(){
const deleteQn = document.getElementById("deleteQn")
}

