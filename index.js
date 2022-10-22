var checkbox = document.querySelector("input[name=checkbox]");

// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     bgbody = document.querySelector("body").style.backgroundColor="white";
//     bglabel= document.querySelector("label").style.backgroundImage="none";
//     bglabel= document.querySelector("label").style.backgroundColor="hsl(230, 22%, 74%)";
//     bgball= document.querySelector(".ball").style.backgroundColor="white";
//     bgheader = document.querySelector("header").style.backgroundColor="hsl(0, 1%, 95%)";
//     lightH1 = document.querySelector(".light-h1").style.color="hsl(230, 17%, 14%)";
//     bgcard = document.querySelector(".card").style.backgroundColor="hsl(230, 22%, 74%)";
//   } else {
//     bgbody = document.querySelector("body").style.backgroundColor="";
//     bglabel= document.querySelector("label").style.backgroundImage="";
//     bgball= document.querySelector(".ball").style.backgroundColor="";
//     bgheader = document.querySelector("header").style.backgroundColor="";
//     lightH1 = document.querySelector(".light-h1").style.color="";
//     bgcard = document.querySelector(".card").style.backgroundColor="";

//   }
// });

checkbox.addEventListener("change", function() {
  if (this.checked) {
    bgheader = document.querySelector("header").style.backgroundColor="hsl(225, 100%, 98%)";
    bgball= document.querySelector(".ball").style.backgroundColor="white";
    bglabel= document.querySelector("label").style.backgroundImage="none";
    bglabel= document.querySelector("label").style.backgroundColor="hsl(230, 22%, 74%)";
    const backgrounds = document.querySelectorAll('.light-bg');
    backgrounds.forEach((backgrounds) => {
      backgrounds.style.backgroundColor = "hsl(0, 0%, 100%)";
    })
    const lightText = document.querySelectorAll('.lightText');
    lightText.forEach((lightText) => {
      lightText.style.color = "hsl(230, 17%, 14%)";
    })
    const cardBg = document.querySelectorAll('.card');
    cardBg.forEach((cardBg) => {
      cardBg.style.backgroundColor = "hsl(227, 47%, 96%)";
    })
  }else {
    bgheader = document.querySelector("header").style.backgroundColor="";
    bgball= document.querySelector(".ball").style.backgroundColor="";
    bglabel= document.querySelector("label").style.backgroundImage="";
    bgball= document.querySelector(".ball").style.backgroundColor="";
    const element = document.querySelectorAll('.light-bg');
    element.forEach((element) => {
      element.style.backgroundColor = "";
    })
    const lightText = document.querySelectorAll('.lightText');
    lightText.forEach((lightText) => {
      lightText.style.color = "";
    })
    const cardBg = document.querySelectorAll('.card');
    cardBg.forEach((cardBg) => {
      cardBg.style.backgroundColor = "";
    })
  }
});