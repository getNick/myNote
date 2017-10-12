"use strict";

$(document).ready(function () {
	"use strict";

	paper.install(window);
	var convas = document.getElementById("mainCanvas");
	paper.setup(convas);
	var c = Shape.Circle(200, 200, 80);
	c.fillColor = "green";
	var text = new PointText(200, 200);
	text.justification = "center";
	text.fillColor = "white";
	text.fontSize = 20;
	text.content = "hello world";

	var tool = new Tool();
	tool.onMouseDown = function (event) {
		var c = Shape.Circle(event.point, 40);
		c.fillColor = "red";
	};
	paper.view.draw();
	var button = document.getElementById("btn");
	button.innerHTML = "Показать зайку";
	button.onclick = function (event) {
		var name = prompt("Введите имя");
		var myImage = document.getElementById('image');
		var mySrc = myImage.getAttribute('src');
		if (mySrc === "") {
			myImage.setAttribute("src", "content/photo_2017-09-25_17-50-44.jpg");
			button.innerHTML = "\u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C " + name;
		} else {
			myImage.setAttribute("src", "");
			button.innerHTML = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C " + name;
		}
	};
});