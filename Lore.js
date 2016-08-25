//So that all headings can be targeted at once.
$(document).ready(function() {
    $("h1").addClass("h");
    $("h2").addClass("h");
    $("h3").addClass("h");
    $("h4").addClass("h");
    $("h5").addClass("h");
    $("h6").addClass("h");
});

//VARIABLES

//Spanish special characters
var AAcute = "\xC1";
var aAcute = "\xE1";
var EAcute = "\xC9";
var eAcute = "\xE9";
var IAcute = "\xCD";
var iAcute = "\xED";
var OAcute = "\xD3";
var oAcute = "\xF3";
var UAcute = "\xDA";
var uAcute = "\xFA";
var UUml = "\xDC";
var uUml = "\xFC";
var iQuest = "\xBF";
var iExcl = "\xA1";

//FUNCTIONS

//Choose a random number between two numbers.  Inspired by Python's randint.
function chance(x, y) {
	return Math.round(Math.random()*(y-x) + x);
}

//A function to randomly choose a percentage probability
function prob() {
	chance(1, 100);
}

//Find the value of n to a certain number of significant figures.
function sigFig(n, place) {
	return Math.floor((n*place)/place);
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

//a function to get URL parameters
function grab(param) {
	var grabs = {};
	var grab = window.location.search.substring(1);
	grab = grab.split("&");
	for (i=0; i < grab.length; i++) {
		var pair = grab[i].split("=");
		grabs[pair[0]] = pair[1];
	}
	return decodeURIComponent(grabs[param]);
}

//a function to capitalize the first letter of a word or string
function cap(string) {
	var arr = string.split("");
	arr[0] = arr[0].toUpperCase();
	return arr.join("");
}

//a function to capitalize the first letter of every word
function majuscule(string) {
	var arr = string.split(" ");
	for (i=0; i<arr.length; i++) {
		arr[i] = cap(arr[i]);
	}
	return arr.join(" ");
}

//a function for a simple Boolean response to contained text
String.prototype.holds = function(something) {
	if (this.indexOf(something) > -1) {
		return true;
	} else {
		return false;
	}
}
Array.prototype.holds = function(something) {
	if (this.indexOf(something) > -1) {
		return true;
	} else {
		return false;
	}
}

//a function to set an interval that activates immediately
function perseverate(func, time) {
	func();
	setInterval(function() {
		func();
	}, time);
}

//drop an item from an array
Array.prototype.drop = function(thing) {
	for (i=this.length-1; i>=0; i--) {
		if (this[i] === thing) {
			this.splice(i, 1);
		}
	}
}

//a simple word count function
function wordCount(txt) {
        var sacrificialString = txt;
        return sacrificialString.split(/\s+/).length;
}

//two functions to make for loops easier to write
Array.prototype.loop = function (func) {
	for (i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

function looper(arr, func) {
	for (i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}