// JavaScript 코드 - 스크롤

var darkBackground = document.querySelector(".dark-background");
var navbar = document.querySelector(".navbar_main");

function handleNavbarScroll1() {
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;

    var darkBackgroundHeight = darkBackground.offsetHeight;
    var darkBackgroundTop = darkBackground.offsetTop;

    var triggerPosition1 = darkBackgroundTop + (darkBackgroundHeight * 0.9);

    if (scrollPosition >= triggerPosition1) {
      navbar.classList.add("navbar_scroll");
    } else {
      navbar.classList.remove("navbar_scroll");
    }
 }

  window.addEventListener("scroll", handleNavbarScroll1);
  window.addEventListener("resize", handleNavbarScroll1);