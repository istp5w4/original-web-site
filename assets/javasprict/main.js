const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});

// window.onscroll=function(){
//   let header = document.getElementById("header");

// }

// function updateHeaderColor() {
//   let body = document.body;
//   let header = document.getElementById("header");
//   let bgColor = window.getComputedStyle(header).backgroundColor;

//   if (bgColor === "rgb(255, 255, 255)") { 
//       header.style.backgroundColor = "black";
//       header.style.color = "white";
//   } else { 
//       header.style.backgroundColor = "white";
//       header.style.color = "black";
//   }
// }

// function toggleBackground() {
//   let body = document.body;
  
//   // 背景色を切り替え
//   if (body.style.backgroundColor === "black") {
//       body.style.backgroundColor = "white";
//   } else {
//       body.style.backgroundColor = "black";
//   }
  
//   updateHeaderColor();
// }

// updateHeaderColor();

document.addEventListener("DOMContentLoaded", function () {
  const headerLogo = document.querySelector(".header__logo");
  const aboutColor = document.querySelector(".btn_about");
  const reserveColor = document.querySelector(".btn_reserve");
  const spanColor = document.querySelector(".hamburger span");

  const sections = document.querySelectorAll("section");

  console.log("test")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bgColor = window.getComputedStyle(entry.target).backgroundColor;

          console.log(entry.target);
          console.log(bgColor);

          if (bgColor === "rgb(255, 255, 255)") {
            headerLogo.classList.add("dark"); // 背景が白なら文字を黒に
            aboutColor.classList.add("dark");
            reserveColor.classList.add("dark");
            spanColor.classList.add("dark");
            // .header__logo.dark
            console.log(headerLogo.classList);
          } else {
            headerLogo.classList.remove("dark"); // それ以外なら白に
            aboutColor.classList.remove("dark");
            reserveColor.classList.remove("dark");
            spanColor.classList.remove("dark");
            // .header__logo
            console.log(headerLogo.classList);
          }
        }
      });
    },
    { threshold: 0.5 } // 80%見えたら判定
  );

  sections.forEach((section) => observer.observe(section));
});



// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector(".hamburger");
//   const sections = document.querySelectorAll("section");

//   console.log("test")
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const bgColor = window.getComputedStyle(entry.target).backgroundColor;

//           console.log(entry.target);
//           console.log(bgColor);

//           if (bgColor === "rgb(255, 255, 255)") {
//             hamburger.classList.add("dark"); // 背景が白なら文字を黒に
//             // .header__logo.dark
//             console.log(hamburger.classList);
//           } else {
//             hamburger.classList.remove("dark"); // それ以外なら白に
//             // .header__logo
//             console.log(hamburger.classList);
//           }
//         }
//       });
//     },
//     { threshold: 0.5 } // 80%見えたら判定
//   );

//   sections.forEach((section) => observer.observe(section));
// });