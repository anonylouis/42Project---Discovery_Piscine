const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const operator = document.getElementById("operator");

function equal() {
	var v1 = input1.value;
	var v2 = input2.value;
	var op = operator.value;

	if (isNaN(v1) || isNaN(v2) || Number(v1) < 0 || Number(v2) < 0)
	{
		window.alert("Error :(");
	}
	else if ((op === "/" || op === "%") && Number(v2) === 0)
	{
		window.alert("It’s over 9000!");
	}
	else
	{
		var res = eval(v1+op+v2)
		window.alert(res);
		console.log(res);
	}
};

setInterval(function(){
	window.alert("Please, use me...");
}, 30000);