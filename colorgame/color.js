var numOfSquares = 6;
var colors = genColors(numOfSquares);
var squares = document.querySelectorAll(".square");
// correct color
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var message = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = genColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = genColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
  })


resetButton.addEventListener("click", function() {
  colors = genColors(numOfSquares);
  pickedColor = pickColor();
  message.textContent = "";
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
})

for (var i = 0; i < squares.length; i++) {
  // add color to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    // get color of click and compare to picked
    if (clickedColor === pickedColor) {
      message.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again"
    }
  });
}

// changes the color of the squares
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

// gets random color for a single square
function genRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// gets a random color for all squares
function genColors(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(genRandomColor());
  }
  return arr;
}
