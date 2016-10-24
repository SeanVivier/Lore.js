/* CLASSES */

//So that all headings can be targeted at once.
$(document).ready(function() {
    $("h1").addClass("h");
    $("h2").addClass("h");
    $("h3").addClass("h");
    $("h4").addClass("h");
    $("h5").addClass("h");
    $("h6").addClass("h");
});

/* VARIABLES */

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

/* FUNCTIONS */

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

//a function to rotate an element
function rot(elem, n) {
	$(elem).css("transform", "rotate(" + n + "deg)").css("-webkit-transform", "rotate(" + n + "deg)").css("-ms-transform", "rotate(" + n + "deg)").css("-moz-transform", "rotate(" + n + "deg)").css("-o-transform", "rotate(" + n + "deg)");
}

//a function to return the current date in the format I prefer
function tellDate() {
	var d = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

//a function to pick one from many at random
function pick(arr) {
	return arr[chance(0, arr.length - 1)];
}

//functions for local storage
function remember(name, datum) {
	if (datum === undefined) {
		return localStorage.getItem(name);
	} else {
		localStorage.setItem(name, datum);
	}
}

function memorize(name, datum) {
	localStorage.setItem(name, datum);
}

function remind(name) {
	return localStorage.getItem(name);
}

function forget(name) {
	localStorage.removeItem(name);
}

//function to add a burger icon to an element
function burgerize(elem) {
	$(elem).append("&equiv;");
}

/* OBJECTS */

//an object to simplify working with the HTML5 canvas element
function Art(ident) {
	var y = document.getElementById(ident);
	var x = y.getContext("2d");
	
	this.line = function(obj) {
		x.beginPath();
		x.moveTo(obj.start[0], obj.start[1]);
		x.lineTo(obj.end[0], obj.end[1]);
		x.strokeStyle = obj.color || "black";
		x.lineWidth = obj.width || 1;
		x.stroke();
	}
	
	this.block = function(obj) {
		x.rect(obj.topLeft[0], obj.topLeft[1], obj.bottomRight[0], obj.bottomRight[1]);
		x.fillStyle = obj.color || "black";
		x.fill()
	}
	
	this.box = function(obj) {
		x.beginPath();
		x.rect(obj.topLeft[0], obj.topLeft[1], obj.bottomRight[0], obj.bottomRight[1]);
		x.strokeStyle = obj.color || "black";
		x.lineWidth = obj.width || 1;
		x.stroke();
	}
	
	this.curve = function(obj) {
		x.beginPath();
		x.arc(obj.center[0], obj.center[1], obj.radius, obj.degree, obj.angle);
		x.strokeStyle = obj.color || "black";
		x.lineWidth = obj.width || 1;
		x.stroke();
	}
	
	this.circle = function(obj) {
		x.beginPath();
		x.arc(obj.center[0], obj.center[1], obj.radius, 0, 2 * Math.PI);
		x.strokeStyle = obj.color || "black";
		x.lineWidth = obj.width || 1;
		x.stroke();
	}
	
	this.wheel = function(obj) {
		x.arc(obj.center[0], obj.center[1], obj.radius, 0, 2 * Math.PI);
		x.fillStyle = obj.color || "black";
		x.fill();
	}
}