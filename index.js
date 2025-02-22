let leftSide = document.querySelector('.left-side');
let rightSide = document.querySelector('.right-side');
let page1 = document.querySelector('.page-1');
let page2 = document.querySelector('.page-2');
let page3 = document.querySelector('.page-3');
let page4 = document.querySelector('.page-4');


const buttons = document.querySelectorAll("button");

leftSide.style.transform = "TranslateX(-500px)"
leftSide.style.opacity = "0"

rightSide.style.transform = "TranslateX(500px)"
rightSide.style.opacity = "0"

window.onload = function(){
  leftSide.style.transform = "TranslateX(0)"
  leftSide.style.opacity = "1"

  rightSide.style.transform = "TranslateX(0)"
  rightSide.style.opacity = "1"
}

arrowFirst.addEventListener("click", () => {
  const hiddenText = document.querySelector(".hidden-text-1");
  const pages = document.querySelector(".page-1");
  const arrows = document.querySelector('.arrow-1');
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
    pages.style.height= "250px" 
    arrows.style.transform = "rotate(180deg)"
  } else {
    hiddenText.style.display = "none"; 
    pages.style.height= "150px" 
    arrows.style.transform = "rotate(0deg)"
  }
});

arrowSecond.addEventListener("click", () => {
  const hiddenText = document.querySelector(".hidden-text-2");
  const pages = document.querySelector(".page-2");
  const arrows = document.querySelector('.arrow-2');
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
    pages.style.height= "250px" 
    arrows.style.transform = "rotate(180deg)"
  } else {
    hiddenText.style.display = "none"; 
    pages.style.height= "150px" 
    arrows.style.transform = "rotate(0deg)"
  }
});

arrowThird.addEventListener("click", () => {
  const hiddenText = document.querySelector(".hidden-text-3");
  const pages = document.querySelector(".page-3");
  const arrows = document.querySelector('.arrow-3');
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
    pages.style.height= "250px" 
    arrows.style.transform = "rotate(180deg)"
  } else {
    hiddenText.style.display = "none"; 
    pages.style.height= "150px" 
    arrows.style.transform = "rotate(0deg)"
  }
});

arrowFourth.addEventListener("click", () => {
  const hiddenText = document.querySelector(".hidden-text-4");
  const pages = document.querySelector(".page-4");
  const arrows = document.querySelector('.arrow-4');
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
    pages.style.height= "250px" 
    arrows.style.transform = "rotate(180deg)"
  } else {
    hiddenText.style.display = "none"; 
    pages.style.height= "150px" 
    arrows.style.transform = "rotate(0deg)"
  }
});





