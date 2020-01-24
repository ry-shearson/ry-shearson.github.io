var front = document.querySelectorAll('.front');
var back = document.querySelectorAll('.back');
var flipper = document.querySelectorAll('.flip-container');
var img = document.querySelectorAll('.exp-img');
var spaceone = document.querySelectorAll('.spaceone');
var spacetwo = document.querySelectorAll('.spacetwo');


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (var i = 0; i < back.length; i++) {
    back[i].style.transform = "rotateY(360deg)";
    back[i].style.backfaceVisibility = "visable";
  }
  for (var i = 0; i < flipper.length; i++) {
    flipper[i].classList.add('noHover')
  }
  for (var i = 0; i < spaceone.length; i++) {
    spaceone[i].classList.add('spone');
  }
  for (var i = 0; i < spacetwo.length; i++) {
    spacetwo[i].classList.add('sptwo');
  }
}
