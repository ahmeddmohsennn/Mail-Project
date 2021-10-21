let bars = document.querySelector(".bars");
let nav = document.querySelector("nav");
let menuOpen = false;
bars.addEventListener("click", () => {
  let h3 = document.querySelector("nav h3");
  if (!menuOpen) {
    bars.classList.add("active");
    nav.classList.add("active");
    h3.classList.add("open");
    menuOpen = true;
  } else {
    bars.classList.remove("active");
    nav.classList.remove("active");
    h3.classList.remove("open");
    menuOpen = false;
  }
});
let lis = document.querySelectorAll("nav li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
});
let submenuArrow = document.querySelector(".submenu-arrow ");
let submenuArrowP = document.querySelector(".submenu-arrow p");
let isSubmenu = false;
submenuArrow.addEventListener("click", () => {
  if (!isSubmenu) {
    let submenu = document.querySelector("ul ul");
    submenuArrow.classList.add("open");
    submenuArrowP.innerHTML = "less";
    submenu.classList.add("open");
    isSubmenu = true;
  } else {
    let submenu = document.querySelector("ul ul");
    submenuArrow.classList.remove("open");
    submenuArrowP.innerHTML = "more";
    submenu.classList.remove("open");
    isSubmenu = false;
  }
});
