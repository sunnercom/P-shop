//dropdown
var dropdownBtn = document.getElementById("dropdownBtn");
var dropdownContent = document.getElementById("myDropdown");

dropdownBtn.addEventListener("click", function() {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

window.addEventListener("click", function(event) {
  if (!event.target.matches('.form-btn')) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
});

//darkmode
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }

//acardion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}