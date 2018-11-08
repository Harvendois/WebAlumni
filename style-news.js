window.addEventListener("scroll", function() {
  if (this.pageYOffset > 100) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "white";
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
  }
});

var heart = document.getElementsByClassName("fa-heart")[0];
var sectionIntro = document.getElementsByClassName("section")[0];
var intro = document.getElementById("box2");

var rect;
var y;
