//VARIABLES

//Special Spanish characters
var Aacute = "\xC1";
var aacute = "\xE1";
var Eacute = "\xC9";
var eacute = "\xE9";
var Iacute = "\xCD";
var iacute = "\xED";
var Oacute = "\xD3";
var oacute = "\xF3";
var Uacute = "\xDA";
var uacute = "\xFA";
var Ntilde = "\xD1";
var ntilde = "\xF1";
var Udieresis = "\xDC"
var udieresis = "\xFC"
var invertedExclamation = "\uA1";
var invertedInterrogation = "\xBF";

//FUNCTIONS

//Choose a random number between two numbers.  Inspired by Python's randint.
function chance(x, y) {
	return Math.round(Math.random()*(y-x) + x)
}

//A function to randomly choose a percentage probability
function prob() {
	chance(1, 100);
}

//Find the value of n to a certain number of significant figures.
function sigFig(n, place) {
	return Math.floor(n*place)/place;
}

//a function for AJAX.
function probe(file, func) {
	var probe = new XMLHttpRequest();
	probe.open("POST", file, true);
	probe.send();
	probe.onreadystatechange = function() {
		if (probe.readyState == 4 && probe.status == 200) {
			if (func) {
				func(probe.responseText);
			}
		}
	}	
}

//a function for regular expressions
function sift(choice, text) {
	if (choice.toLowerCase().match(text)!==null) {
		return true;
	} else {
		return false;
	}
}