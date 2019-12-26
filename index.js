var front = document.querySelectorAll('.front');
var back = document.querySelectorAll('.back');
var flipper = document.querySelectorAll('.flipper');
var exp = document.querySelectorAll('.exp');
var img = document.querySelectorAll('.exp-img');


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  for (var i = 0; i < exp.length; i++) {
    exp[i].classList.toggle('hover');
  }
  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (var i = 0; i < back.length; i++) {
    back[i].style.transform = "rotateY360deg";
    back[i].style.backfaceVisibility = "visable";
  }
}
