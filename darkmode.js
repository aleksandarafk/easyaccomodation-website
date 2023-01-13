var icon = document.getElementById('icon'); //declaring the icon variable that is used below by getting the id of icon in the html file

// dark mode using local storage to save it for future visit
if(localStorage.getItem("theme") == null)
{
localStorage.setItem("theme", "light");
}

let localData  = localStorage.getItem("theme"); //getting the item theme and setting it as a localData variable

if(localData == "light") //if statement to check wether we are using light or dark mode
{
	document.body.classList.remove("dark-mode");
	console.log('removed dark theme');
}
if(localData == "dark") {
	document.body.classList.add("dark-mode");
	console.log('added dark theme');
}

icon.onclick = function () //triggers the function to add or remove the dark mode
{
	document.body.classList.toggle("dark-mode");
	if(document.body.classList.contains("dark-mode"))
	{
		localStorage.setItem("theme", "dark");
	}
	else
	{
		localStorage.setItem("theme","light");
	}
}
