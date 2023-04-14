let body = document.querySelector("body");
let isLight = true;
let mode = document.querySelector("#mode");
let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
let p = document.querySelectorAll("p");
let li = document.querySelectorAll("li");
let a = document.querySelectorAll("a");
let nava = document.querySelectorAll(".nav-a");
mode.addEventListener("click", (e) => {
  isLight = !isLight;
  if (isLight) {
    body.style.backgroundColor = "white";
    mode.innerHTML = "DARK";
    h1.forEach((heading) => {
      heading.style.color = "#2d3f4e";
    });
    h2.forEach((heading) => {
      heading.style.color = "#2d3f4e";
    });
    p.forEach((para) => {
      para.style.color = "#2d3f4e";
    });
    li.forEach((list) => {
      list.style.color = "#2d3f4e";
    });
    a.forEach((link) => {
      link.style.color = "#2d3f4e";
    });
    nava.forEach((link) => {
      link.style.color = "white";
    });
  } else {
    body.style.backgroundColor = "#2d3f4e";
    mode.innerHTML = "LIGHT";
    h1.forEach((heading) => {
      heading.style.color = "white";
    });
    h2.forEach((heading) => {
      heading.style.color = "white";
    });
    p.forEach((para) => {
      para.style.color = "white";
    });
    li.forEach((list) => {
      list.style.color = "white";
    });
    a.forEach((link) => {
      link.style.color = "white";
    });
  }
});
