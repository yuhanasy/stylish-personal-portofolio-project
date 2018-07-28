document.addEventListener("DOMContentLoaded", function() {
  var btn = document.getElementById("menu-button");
  var sideMenu = document.getElementById("menu");
  var anu = document.getElementsByClassName("bun")
  sideMenu.className = "";

  btn.addEventListener('click', function() { active() });
  function active() {
    if (sideMenu.className === "active") {
      sideMenu.className = "";

      anu[0].className = "bun";
      anu[1].className = "bun";
      anu[2].className = "bun";
    }
    else {
      sideMenu.className = "active";
      
      anu[0].className += " bunTop";
      anu[1].className += " bunMiddle";
      anu[2].className += " bunBottom";
    }
  }
}, false);