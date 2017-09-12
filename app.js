function start() {
	//$('chat')[0] is equivalent to document.getElementById('chat')
	//the "[0]" is needed as jQuery returns the DOM element in an array
	$('#info')[0].style.animationPlayState = "running";

	setTimeout(() => { $('#welcomeScreen')[0].style.animationPlayState = "running";}, 550);

  setTimeout(() => { 
		$('#welcomeScreen')[0].style.display = "none";
		$('#chat')[0].style.display = "inline-block";
		$('#daizzy')[0].style.animationPlayState = "running";
	}, 1730); //makes welcome screen invisible (display: none doe snot work within keyframes)

  setTimeout(() => {$('#chatTitle')[0].style.animationPlayState = "running";}, 2200);
}

$(document).keypress(function(e) { //checks when user presses enter key
  if (e.which == 13) {
    addText();
  }
});

function addText(){//adds text from the textbox to the chatbox
	console.log("clicked")
	var userText = document.createElement("div");
    userText.className = "user";
    var text = document.createElement("p");
    text.innerHTML = "<b>You: </b>"+document.getElementById("input").value
    userText.appendChild(text);
    document.getElementById("chatLog").appendChild(userText);
}