document.addEventListener("DOMContentLoaded", function() {
  var btn = document.getElementById("menu-button");
  var sideMenu = document.getElementById("menu");
  sideMenu.className = "";

  btn.addEventListener('click', function() { active() });
  function active() {
    if (sideMenu.className === "active") {
      return sideMenu.className = "";
    }
    else {
      return sideMenu.className = "active";
    }
  }
}, false);