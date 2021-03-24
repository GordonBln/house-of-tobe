const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");
const slidedownMenu = document.querySelector(".slidedown-bar");
const slidedownMenuIcon = document.querySelector(".hamburger-menu-slidedown");
hamburgerMenu.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
  slidedownMenuIcon.classList.toggle("active");
});
slidedownMenuIcon.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
  slidedownMenuIcon.classList.toggle("active");
});

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.querySelector(".slidedown-bar").style.top = "0";
  } else {
    document.querySelector(".slidedown-bar").style.top = "-100px";
  }
};
const picker = new Litepicker({
  element: document.getElementById("litepicker"),
  singleMode: false,
  tooltipText: {
    one: "night",
    other: "nights",
  },
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  },
});
