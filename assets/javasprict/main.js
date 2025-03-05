const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});

// window.onscroll=function(){
//   let header = document.getElementById("header");

// }

function updateHeaderColor() {
  let body = document.body;
  let header = document.getElementById("header");
  let bgColor = window.getComputedStyle(header).backgroundColor;

  if (bgColor === "rgb(255, 255, 255)") { 
      header.style.backgroundColor = "black";
      header.style.color = "white";
  } else { 
      header.style.backgroundColor = "white";
      header.style.color = "black";
  }
}

function toggleBackground() {
  let body = document.body;
  
  // 背景色を切り替え
  if (body.style.backgroundColor === "black") {
      body.style.backgroundColor = "white";
  } else {
      body.style.backgroundColor = "black";
  }
  
  updateHeaderColor();
}

updateHeaderColor();


