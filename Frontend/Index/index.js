// Get elements from the DOM

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-container");
const dropdowns = document.querySelectorAll(".dropdown > div");
const subDropdowns = document.querySelectorAll(".sub-dropdown > div");

// Toggle variable
let menuOpen = false;

// Set click event to menu button
menuBtn.addEventListener("click", () => {
  // Toggle mega menu show class
  menu.classList.toggle("mega-menu-show");
  // If the menu open variable is false
  if (menuOpen === false) {
    // Set the close icon to the menu button
    menuBtn.innerHTML = `
        <span class="material-symbols-outlined">
            close
        </span>
        `;
    // Set menu open to true
    menuOpen = true;
  } else {
    // Set the menu icon to the menu button
    menuBtn.innerHTML = `
        <span class="material-symbols-outlined">
            menu
        </span>
        `;
    // Set menu open to false
    menuOpen = false;
  }
});

// Select all dropdowns
dropdowns.forEach((dropdown) => {
  // Add click event
  dropdown.addEventListener("click", (e) => {
    // Toggle dropdown menu show class
    dropdown.nextElementSibling.classList.toggle("menu-show");
    // Toggle icon rotated class
    dropdown.lastElementChild.classList.toggle("icon-rotated");
  });
});

// Select all sub dropdowns
subDropdowns.forEach((subDropdown) => {
  // Add click event
  subDropdown.addEventListener("click", (e) => {
    // Toggle sub dropdown menu show class
    subDropdown.nextElementSibling.classList.toggle("sub-menu-show");
    // Toggle icon rotated class
    subDropdown.lastElementChild.classList.toggle("icon-rotated");
  });
});

// disabling inspect element
document.addEventListener("contextmenu", function (e) {
  e.preventDefault(); //this prevents right click
});
document.onkeydown = function (e) {
  if (event.keycode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    return false;
  }
};

// slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
setInterval(() => {
  plusSlides(-1);
}, 3000);
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
