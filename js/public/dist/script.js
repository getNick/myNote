"use strict";

document.ready(function () {
	"use strict";

	paper.install(window);
	paper.setup(document.getElementById("mainCanvas"));
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
});