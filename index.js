var front = document.querySelectorAll('.front');
var back = document.querySelectorAll('.back');
var flipper = document.querySelectorAll('.flip-container');
var img = document.querySelectorAll('.exp-img');
var spone = document.querySelectorAll('.spone');
var spone = document.querySelectorAll('.sptwo');


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
  for (var i = 0; i < spone.length; i++) {
    spone[i].style.height = '150px'
    spone[i].style.fontcolor("red");
  }
  for (var i = 0; i < sptwo.length; i++) {
    sptwo[i].style.height = '200px';
    sptwo[i].style.fontcolor("purple");
  }
}
