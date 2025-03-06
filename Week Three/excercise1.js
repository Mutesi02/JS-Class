//1
// const paragraghOne = document.querySelector("p");
console.log(paragraghOne)

//2
const paragraghOne = document.querySelector("paragraghOne");
const paragraghTwo = document.querySelector("paragraghTwo");
const paragraghThree = document.querySelector("paragraghThree");
const paragraghFour = document.querySelector("paragraghFour");
console.log(paragraghOne,paragraghTwo,paragraghThree,paragraghFour);

//3
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

//4
console.log(allParagraphs.length);
for(i=0; i<allParagraphs.length; i++){
    console.log(allParagraphs[i])
};

//5
// let paragraphs = document.querySelectorAll("p");
if(paragraphs.length>=4){
    paragraphs[3].textContent = "paragraphFour"
};

//6--Incomplete
allParagraphs[3].setAttribute = ("class", "paragraphs");
allParagraphs[3].setAttribute = ("id", "paragraphFour");
allParagraphs[3].setAttribute = ("paragraphFour");
