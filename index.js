var front = document.querySelectorAll('.front');
var back = document.querySelectorAll('.back');
var flipper = document.querySelectorAll('.flip-container');
var img = document.querySelectorAll('.exp-img');


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none";
    img[i].style.height = '50px';
  }
  for (var i = 0; i < back.length; i++) {
    back[i].style.transform = "rotateY(360deg)";
    back[i].style.backfaceVisibility = "visable";
  }
  for (var i = 0; i < flipper.length; i++) {
    flipper[i].classList.add('noHover')
  }
}
