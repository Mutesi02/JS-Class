//traversing means moving up and down the DOM. It also allows you to move between elements dynamically
let parent = document.getElementById("produce");
console.log(parent.children)
console.log(parent.firstElementChild.textContent)
console.log(parent.lastElementChild.textContent)

let child = document.getElementById("text")
console.log(child.parentElement)

let middleSibling = document.getElementById("middle")
console.log(middleSibling.previousElementSibling.textContent)
