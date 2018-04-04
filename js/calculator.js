/*eslint-env browse*/
window.addEventListener("load", init);

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


var calculate = function() {
var finalResult, calculation, evaluation;
finalResult = document.getElementById("result").value;
calculation = finalResult.toString();
evaluation = window.eval(calculation);
document.getElementById("result").value = evaluation;
};

var enter = function(val) {
this.val = document.getElementById(this.id);
var result = document.getElementById("result");
result.value += this.val.value;
};


function init() {
$("one").addEventListener("click", enter, false);
$("two").addEventListener("click", enter, false);
$("three").addEventListener("click", enter, false);
$("four").addEventListener("click", enter, false);
$("five").addEventListener("click", enter, false);
$("six").addEventListener("click", enter, false);
$("seven").addEventListener("click", enter, false);
$("eight").addEventListener("click", enter, false);
$("nine").addEventListener("click", enter, false);
$("zero").addEventListener("click", enter, false);
$("divide").addEventListener("click", enter, false);
$("multiply").addEventListener("click", enter, false);
$("subtract").addEventListener("click", enter, false);
$("period").addEventListener("click", enter, false);
$("add").addEventListener("click", enter, false);
$("equal").addEventListener("click", calculate, false);
}

window.addEventListener("load", init, false);