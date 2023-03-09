const cookieTime = 86400; //One day in seconds
const newbtn = document.getElementById("new");
const list = document.querySelector("#ft_list ul");

function updatecookievalue() {
	var items = document.getElementsByTagName("li");
	var cookie = "";
	for (var i = 0; i < items.length; i++)
	{
		cookie+=items[i].innerHTML;
		cookie+="+"
	}
	if (cookie === "")
	{
		document.cookie = "list=; max-age=0";
	}
	else
	{
		document.cookie = "list="+cookie.slice(0,-1) +"; max-age=" + cookieTime;
	}
};

newbtn.onclick = function() {
	var todo = prompt("New todo to add :")
	if (todo !== null)
	{
		list.insertAdjacentHTML("afterbegin", "<li>"+todo+"</li>");
		list.querySelector("li").addEventListener("click", function() {
			if (confirm("Do you really want to delete this TODO ("+ this.innerHTML + ") ?"))
			{
				this.remove();
				updatecookievalue();
			}
		});
		updatecookievalue();
	}
}

// Init page from cookie !

var value = ("; "+ document.cookie).split("; list=");
if (value.length === 2)
{
	value = value.pop().split("; ").shift();
	var items = value.split("+");
	for (var i = 0; i < items.length; i++)
	{
		list.insertAdjacentHTML("beforeend", "<li>"+items[i]+"</li>");
	}
	items = document.getElementsByTagName("li");
	for (var i = 0; i < items.length; i++)
	{
		items[i].addEventListener("click", function() {
			if (confirm("Do you really want to delete this TODO ("+ this.innerHTML + ") ?"))
			{
				this.remove();
				updatecookievalue();
			}
		});
	}
	updatecookievalue();
}
