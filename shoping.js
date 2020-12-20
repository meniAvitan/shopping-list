
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
//var container = document.querySelector(".container"); 
//li.style.listStyle = "none";

function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	
	
	var done_checkbox =document.createElement("input");
    done_checkbox.type = "checkbox";
    done_checkbox.classList.add("done_btn");
	li.appendChild(done_checkbox);
	done_checkbox.onclick=underlineParent;

	input.value = "";

   
    

    var del_icon = document.createElement("i");
    del_icon.classList.add('fas', 'fa-times');
 
	li.appendChild(del_icon);

	del_icon.onclick=removeParent;
//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
	
}



function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

del_icon.addEventListener("click",removeParent);