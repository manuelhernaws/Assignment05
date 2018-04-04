/*eslint-env browser*/

//STEP 1
/*function writeMessage() {
    "use strict";
    window.alert("you have clicked this button");
}*/
//STEP 2
/*
var myElement = document.getElementById("myButton");
myElement.onclick = function () {
    "use strict";
    window.alert("You have clicked this button");
};
*/

//STEP 3
/*myButton.addEventListener("click", writeMessage);
function writeMessage() {	
    window.alert("'I have been clicked'");
}*/

//STEP 4
/*Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function.*/

/*myButton.addEventListener("click", function () {
    "use strict";
    window.alert(" i have been clicked");

});*/


//STEP 5
/*Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.*/
/*window.addEventListener("load", init, false);
function init() {
myButton.addEventListener("click", function () {
    "use strict";
    window.alert(" i have been clicked");

}, false);
    
}*/

//STEP 6
/*window.addEventListener("load", init, false);
function init() {
redirect.addEventListener("click", function (e) {
    "use strict";
    e.preventDefault();
    window.alert("We Can't Visit Google now");

}, false);
    
}*/

//STEP 7
/*window.addEventListener("load", init, false);
function init() {
myButton.addEventListener("click", function (e) {
    "use strict";
    e.disabled = true;
    var box = window.document.getElementById("userForm");
    window.alert(box.value);
}, false);
    
}*/
//step 8

//STEP 9
/*window.addEventListener("load", init, false);
function init() {
startButton.addEventListener("click", function myList() {
    "use strict";
    window.console.log("Learning JavaScript is fun!");
    var myVar = setInterval(myList, 2000);
    
stopButton.addEventListener("click", function myList() {
        window.clearInterval(myVar);
    });
}, false);
}*/
//STEP 10

window.addEventListener("load", init, false);
function init() {
    "use strict";
var car = window.document.getElementById("carType");
myBtn.addEventListener("click", function () {
    window.alert(car.value);
}, false);
}












