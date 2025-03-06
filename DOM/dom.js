function changeColor(){
    let story = document.getElementById("para")
    story.style.color = "orange"
    alert("color changed")
}
function changeText(){
    let text = document.getElementById("para2")
    text.innerHTML = "<ul><li>Bean</li><li>Maize</li><li>Cowpeas</li></ul>"
    let textTwo = document.getElementById("para3")
    textTwo.textContent = "New text"
}
