//1
document.getElementById("paragraphOne").style.cssText = "color:red; background:yellow; font-size:20px; font-family:Arial; border: 2px solid black; padding:10px;";
document.getElementById("paragraphTwo").style.cssText = "color:green; background:pink; font-size:20px; font-family:Arial; border: 2px solid black; padding:10px;";
document.getElementById("paragraphThree").style.cssText = "color:blue; background:purple; font-size:20px; font-family:Arial; border: 2px solid black; padding:10px;";
document.getElementById("paragraphFour").style.cssText = "color:maroon; background:red; font-size:20px; font-family:Arial; border: 2px solid black; padding:10px;";

//2
// const paragraphs = document.querySelectorAll("p");
// for(i=0; i<allParagraphs.length; i++){
//     if(i===0 || i===2){
//         paragraphs[i].style.color = "green";
//     }else {
//         paragraphs[i].style.color = "red";
//     }
// };

//3
const paragraphs = document.querySelectorAll("p");
for(i=0; i<allParagraphs.length; i++){ //I had to loop through each paragraph
   //set text content
   paragraphs[i].textContent = `This is my new text ${i+1}`; //i+1 ensures that the text is dynamically updated to reflect the current paragraph.
   //set id
   paragraphs[i].setAttribute("id", `para-${i+1}`);
   //set class
   paragraphs[i].setAttribute("class", `class-2${i+1}`);
};

