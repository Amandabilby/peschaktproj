function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navtext") {
      x.className += " responsive";
    } else {
      x.className = "navtext";
    }
  }