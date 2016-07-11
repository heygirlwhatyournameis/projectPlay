console.log("hi");

var title=document.querySelector('h1');

function setName(){
	var name=prompt("Enter yr name");
	localStorage.setItem("name",name);
}

if(!localStorage.getItem("name")){
	setName();
} else {
	title.innerHTML='Hello, '+localStorage.getItem("name");
}