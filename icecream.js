// You will create a single web page for a fake company. 
// Use HTML and CSS to fully style it using modern design trends and page layout. 
// Use JavaScript to create a modal to appear after a given amount of time on the page. 
// You will need to fully style the modal too so think about what this modal will be used for. 
// Is it a pop-up ad? Is it a prompt to get the user to enter their email address to sign up for the company newsletter? 
// Is it a prompt to get the user to share this page on Facebook? 
// You decide but make it look as professional as possible.

// Grading criteria:

// The modal appears after 3 seconds of being on the web page.
// JavaScript is fully functional and throws no errors
// It is clear how the user would exit the modal (e.g. x or close button)
// Clear usage of modal - the user understands what is being asked of them
// Thoughtful styling has been integrated
// Proper HTML formatting
// Proper CSS formatting

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

setTimeout(open, 3000)

function open(){
	modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
