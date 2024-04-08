let menu = document.querySelector(".menu");
let navlinks = document.querySelector(".links");
let button = document.querySelector(".navbar .buttton");
let links = document.querySelector(".links");
let screenWidth = window.innerWidth;


menu.addEventListener("click", () => {  
  links.classList.toggle("show");
  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    if (screenWidth > 995) {
      links.classList.remove("show");
    }
  });
});

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
  if (screenWidth > 995) {
    menu.style.display = "none";
    button.style.display = "flex";

    navlinks.style.display = "flex";
  } else {
    navlinks.style.display = "none";
    button.style.display = "none";
    menu.style.display = "flex";
  }
});

let buttons = document.querySelectorAll(".projects .project");
let i = 0;
buttons.forEach((button) => {
  i++;
  if (i % 2 == 0) {
    button.style.flexDirection = "row-reverse";
  }
});

document.getElementById("download").addEventListener("click", function () {
  var link = document.createElement("a");
  link.setAttribute(
    "href",
    "https://drive.google.com/file/d/1FbZX7iXv7ctVi8zewmVm1Lz2ZxaVd20W/view?usp=drive_link"
  );
  link.setAttribute("download", "Seaf_GamelCV.pdf");
  link.setAttribute("rel", "noopener");
  link.click();
});

document.getElementById("joe").addEventListener("click", function () {
    var linkk = document.createElement("a");
    linkk.setAttribute(
      "href",
      "https://drive.google.com/file/d/1FbZX7iXv7ctVi8zewmVm1Lz2ZxaVd20W/view?usp=drive_link"
    );
    linkk.setAttribute("download", "Seaf_GamelCV.pdf");
    linkk.setAttribute("rel", "noopener");
    linkk.click();
  });

