var dropdownBtn = document.getElementById("dropdownBtn");
var dropdownContent = document.getElementById("myDropdown");

dropdownBtn.addEventListener("click", function() {
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

// Menuni bosib yopish
window.addEventListener("click", function(event) {
  if (!event.target.matches('.form-btn')) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
});


function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }