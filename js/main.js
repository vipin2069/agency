// Global variables
const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMobile = document.getElementById("nav");
const headerElement = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-mobile .list-link");
const submit = document.querySelector(".myForm");

// Toggle navigation
const toggleMenu = () => {
  navMobile.classList.toggle("active");
  headerElement.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);
submit.addEventListener("submit", validation);
submit.addEventListener("submit", validFName);
submit.addEventListener("submit", validLName);
submit.addEventListener("submit", validEmail);
submit.addEventListener("submit", validPno);

// form validation
function validation() {
  if (validEmail() && validFName() && validLName() && validPno()) {
    return true;
  } else {
    alert("Form submitted successfully!");
  }
}

function validFName() {
  var regName = /^[a-zA-Z]+$/;
  var strName = document.getElementById("fname").value;
  if (!regName.test(strName)) {
    alert("Invalid First name given.");
    return false;
  } else {
    return true;
  }
}

function validLName() {
  var regName = /^[a-zA-Z]+$/;
  var strName = document.getElementById("lname").value;
  if (!regName.test(strName)) {
    alert("Invalid Last name given.");
    return false;
  } else {
    return true;
  }
}

function validEmail() {
  var x = document.getElementById("email").value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert("Please enter a valid e-mail address ");
    return false;
  }
}

function validPno() {
  var num = document.getElementById("phone").value;
  var phoneno = /^\+?([0-9]{2})?[ ]?([0-9]{10})$/;
  if (num === phoneno) {
    alert("Please enter a valid Numeric Phone no.");
    return false;
  } else {
    return true;
  }
}

//Add/remove header border bottom on scroll
const headerScrollEvent = () => {
  if (this.scrollY >= 30) {
    headerElement.classList.add("active-scroll");
  } else {
    headerElement.classList.remove("active-scroll");
  }
};

window.addEventListener("scroll", headerScrollEvent);

// Add selected link styles to the link clicked and close navigation when clicking the links
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMobile.classList.remove("active");
    headerElement.classList.remove("active");

    let current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace("current", "");
    link.className += "current";
  })
);

// Scroll Reveal
const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
});
sr.reveal(".image-left, .popular-destinations-data, .plan-trip-DataTransfer", {
  origin: "left",
});
sr.reveal(".image-center", {
  origin: "bottom",
});

sr.reveal(".image-right, .showcase-data", {
  origin: "right",
});
sr.reveal(".beach-data-wrapper", {
  origin: "bottom",
  interval: 250,
});
sr.reveal(".newsletter-container", {
  origin: "top",
});
sr.reveal(".footer-container-inner > div, .footer-seperator, .copyright", {
  origin: "bottom",
  interval: 250,
});
