const balloon = document.getElementById("balloon");

const tab = ["red","green","blue"];
var index = 0;

balloon.onclick = function() {
	index = (index + 1) % 3;
	var size = Number(balloon.offsetHeight) + 10;
	if (size > 420)
		size = 200;
	balloon.setAttribute("style","width:"+size+"px;height:"+size+"px;background-color:"+tab[index]+";");
}

balloon.addEventListener("mouseout", function() {
	index = (index + 2) % 3;
	var size = Number(balloon.offsetHeight) - 5;
	if (size < 200)
		size = 200;
	balloon.setAttribute("style","width:"+size+"px;height:"+size+"px;background-color:"+tab[index]+";");
});