
var numOfSquares = 9;
var colors = generateRandomColor(numOfSquares);
var pickedColor = colors[getRandomInt(numOfSquares)];
var h1 = document.querySelector("h1");
var message = document.getElementById("message");
var colorDisplayed = document.getElementById("colorDisplayed");
var resetButton = document.getElementById("reset");
var squares = document.querySelectorAll(".square");
var model = document.querySelectorAll(".model");

init();

resetButton.addEventListener("click", function() {
	reset();
});

function init() {
	setNumOfSquares();
	setSquares();
	reset();

}

function setSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			if (this.style.backgroundColor === pickedColor) {
				paintColor(squares, pickedColor);
				message.textContent = "Correct!";
				h1.style.background = pickedColor;
				resetButton.textContent = "play again?";
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		});
	}
}

function setNumOfSquares() {
	for (var i = 0; i < model.length; i++) {
		model[i].addEventListener("click", function(){
			//clear all model class selected
			clearSelected(model);
			//add class selected to current model
			this.classList.add("selected");
			this.textContent === "easy" ? numOfSquares = 3 : this.textContent === "mid" ? numOfSquares = 6 : numOfSquares = 9;
			reset();
		});
	}	
}

function reset() {
	colors = generateRandomColor(numOfSquares);
	pickedColor = colors[getRandomInt(numOfSquares)];
	colorDisplayed.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	message.textContent = "";
	resetButton.textContent = "New colors";

}

function clearSelected(model) {
	for (var i = 0; i < model.length; i++) {
		model[i].classList.remove("selected");
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
	var r = getRandomInt(256);
	var g = getRandomInt(256);
	var b = getRandomInt(256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function paintColor(squares, color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = getRandomColor();
	}
	return arr;
}