window.onload = init;

function init() {
	document.querySelector('#color-1').onclick = changeColor;
	document.querySelector('.reset').onclick = colorReset;
}

function changeColor() {
	var elementId = this.id;

	this.style.backgroundColor = "red";

	var indicatorText = document.getElementById("indicator-text");

	if(!indicatorText.innerHTML.includes(elementId)) {
		indicatorText.innerHTML = indicatorText.innerHTML+"<br>"+this.id+ " is active";
	}

}