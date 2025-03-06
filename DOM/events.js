//eventListener vs eventHandler
//eventhandler
let btn = document.getElementById(btn)
btn.onclick = function(){
    console.log("button clicked")
}
//element.onclick = function

btn.onclick = function(){
    console.log("button overWritten")
}

//events listener
let btn = document.getElementById(btn)
btn.addEventListener( "click", function(){
    console.log("button clicked")
})

btn.addEventListener( "click", function(){
    console.log("second eventListen")
})
//element.addEventListener(event,function)
function sayHello(){
    console.log("Hello")
}
btn.addEventListener("click", sayHello)
btn.removeEventListener("click", sayHello)
