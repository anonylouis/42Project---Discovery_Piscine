$("equal").click(function() {
	var v1 = $("#input1").val();
	var v2 = $("#input2").val();
	var op = $("#operator").val();

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
});

setInterval(function(){
	window.alert("Please, use me...");
}, 30000);