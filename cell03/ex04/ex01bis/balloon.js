const tab = ["red","green","blue"];
var index = 0;

$("#balloon").click(function() {
	index = (index + 1) % 3;
	var size = Number($("#balloon").width()) + 10;
	if (size > 420)
		size = 200;
	$("#balloon").css({"width":size+"px","height":size+"px","background-color":tab[index]});
});

$("#balloon").mouseleave(function() {
	index = (index + 2) % 3;
	var size = Number($("#balloon").width()) - 5;
	if (size < 200)
		size = 200;
	$("#balloon").css({"width":size+"px","height":size+"px","background-color":tab[index]});
});