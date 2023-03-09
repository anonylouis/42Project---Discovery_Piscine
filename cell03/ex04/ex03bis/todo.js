function updatecookievalue() {
	var cookie = "";
	$("li").each(function() {
		cookie+=$(this).text()+"+"
	});
	if (cookie === "")
			Cookies.remove("list");
	else
		Cookies.set("list", cookie.slice(0,-1), {expires: 1});
};

$("button").click(function() {
	var todo = prompt("New todo to add :")
	if (todo !== null && todo !== "")
	{
		$("ul:first").prepend("<li>"+todo+"</li>");
		$("ul li:first").on("click",function() {
			if (confirm("Do you really want to delete this TODO ("+ $(this).text() + ") ?"))
			{
				$(this).remove();
				updatecookievalue();
			}
		});
		updatecookievalue();
	}
});

// Init page from cookie !

value = Cookies.get("list");
if (value !== undefined)
{
	var items = value.split("+");
	for (var i = 0; i < items.length; i++)
		$("ul:first").append("<li>"+items[i]+"</li>");
	$("li").on("click", function() {
		if (confirm("Do you really want to delete this TODO ("+ $(this).text() + ") ?"))
		{
			$(this).remove();
			updatecookievalue();
		}
	});
	updatecookievalue();
}
