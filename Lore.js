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

//key and mouse events
var leftClick = 1;
var midClick = 2;
var rightClick = 3;
var leftArrow = 37;
var rightArrow = 39;
var upArrow = 38;
var downArrow = 40;
var enterKey = 13;
var aKey = 65;
var bKey = 66;
var cKey = 67;
var dKey = 68;
var eKey = 69;
var fKey = 70;
var gKey = 71;
var hKey = 72;
var iKey = 73;
var jKey = 74;
var kKey = 75;
var lKey = 76;
var mKey = 77;
var nKey = 78;
var oKey = 79;
var pKey = 80;
var qKey = 81;
var rKey = 82;
var sKey = 83;
var tKey = 84;
var uKey = 85;
var vKey = 86;
var wKey = 87;
var xKey = 88;
var yKey = 89;
var zKey = 90;
var zeroKey = 48;
var oneKey = 49;
var twoKey = 50;
var threeKey = 51;
var fourKey = 52;
var fiveKey = 53;
var sixKey = 54;
var sevenKey = 55;
var eightKey = 56;
var nineKey = 57;

var path = window.location.pathname;

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

//functions for AJAX.
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

function herald(site, obj, func) {
	$.ajax({
		url: site,
		data: obj,
		success: func
	});
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

//a function to return the time of day in the format I prefer
function tellTime() {
	var meridian = " ";
	var timepiece = new Date();
	var hours = timepiece.getHours();
	if (hours > 12) {
		hours = hours - 12;
		meridian+="PM";
	} else if (hours === 0) {
		hours = 12;
		meridian+="AM";
	} else {
		meridian+="AM";
	}
	var minutes = timepiece.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	return hours + ":" + minutes + meridian;
}

//a function to pick one from many at random
function pick(arr) {
	return arr[chance(0, arr.length - 1)];
}

//a function to pick at random and discard
function pull(arr) {
	var raffle = pick(arr);
	arr.drop(raffle);
	return raffle;
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

//function for global replace
String.prototype.amend = function(before, after) {
	var template = new RegExp(before, "g");
	return this.replace(template, after);
}

//function to remove a substring from a string
String.prototype.scrap = function(substr) {
	return this.amend(substr, "");
}

//function to determine if a number is within a certain bounds
Number.prototype.btwn = function(lowest, highest) {
	if (this >= lowest && this <= highest) {
		return true;
	} else {
		return false;
	}
}

//function to disguise the URL.
function glamour(url) {
	window.history.replaceState(window.location.pathname, "Title", url);
}

//to change or set the favicon
function adorn(url) {
	$("link[rel='icon']").attr("href", url); //change if already set
	$("head").append("<link rel='icon' href='" + url + "' />"); //set if absent
}

//to create an accordion within a specific element
function fold(elem, arr) {
	$.each(arr, function(k, v) {
		$(elem).append("<h3>" + k + "</h3><div>" + v + "</div>");
	});
	$(elem).accordion();
}

//to open multiple sites at once
function launch(arr) {
	if (arr.length === 1) {
		window.location = arr[0];
	} else if (arr.length > 1) {
		for (i = 0; i < arr.length - 1; i++) {
			window.open(arr[i]);
		}
		window.location = arr[arr.length - 1];
	} else {
		window.close();
	}
}

//to find the last element in an array
function pluck(arr) {
	return arr[arr.length - 1];
}

//a function to center on the vertical
function verticalCenter(elem) {
	$(elem).css("position", "absolute").css("top", (window.innerHeight - $(elem).height())/2);
}

//function to fill the body's background with a repeated image
function wallpaper(pic) {
	$("body").css("background-image", "url(" + pic + ")").css("background-size", "cover");
}

//a function to close a page after a certain number of seconds
function detonate(s) {
	setTimeout(function() {
		window.close();
	}, s*1000);
}

//a function to toggle between two classes 
jQuery.fn.switcheroo = function(firstClass, secondClass) {
	$(this).toggleClass(firstClass);
	$(this).toggleClass(secondClass);
}

//a function to add pixels to a number
function px(n) {
	return n + "px";
}

//a function to render an element invisible
jQuery.fn.vanish = function() {
	$(this).css("visibility", "hidden");
}

//a function to uncover an invisible element
jQuery.fn.behold = function() {
	$(this).css("visibility", "visible");
}

//a function to toggle an element's visibility
jQuery.fn.wink = function() {
	if ($(this).css("visibility") === "visible") {
		$(this).vanish();
	} else {
		$(this).behold();
	}
}

//browser sniffing
function waft(browser) {
	if (navigator.userAgent.toLowerCase().indexOf(browser.toLowerCase()) > -1) {
		return true;
	} else {
		return false;
	}
}	

//a function to prevent default behavior with cross-browser compatibility
function halt(ev) {
	ev.preventDefault();
	ev.stopPropagation();
}

//a function to download data
function summon(name, data) {
	var a = document.createElement("a");
	a.href = data;
	a.download = name;
	a.click();
}

//a function to set a number as a price
function price(num) {
	var price = Math.round(num * 100) / 100;
	return "$" + price.toFixed(2).toString();
}

//a function to scroll to top
function snap() {
	window.scrollTo(0, 0);
}

//a function to replace deprecated alert
function voice(msg, ok) {
	var okay = "OK";
	if (ok) {
		okay = ok;
	}
	$("body").append("<dialog style='position:fixed; top:25px; z-index:10; max-width:500px' open><p>" + msg + "</p><button onclick='$(this).parent().hide()' style='display:block; margin:auto'>" + okay + "</button></dialog>");
}

//function to remove all highlights
function removeHighlight() {
	window.getSelection().removeAllRanges();
}

//function to strip all cases of a class
function strip(clas) {
	$("." + clas).removeClass(clas);
}

//function to fake an event
function feign(ev) {
	window.dispatchEvent(new Event(ev));
}

//a function to dim opacity
function dim(elem) {
	$(elem).css("opacity", "0.5");
}

function undim(elem) {
	$(elem).css("opacity", "1");
}

//function to create a new array with another array's values, that will not change when original array changes.
function twin(arr) {
	return JSON.parse(JSON.stringify(arr));
}

//functions to morph the size of elements
jQuery.fn.thin = function(shrinkage) {
	var breadth = $(this).width();
	$(this).css("width", px(breadth - shrinkage));
}

jQuery.fn.fatten = function(growth) {
	var breadth = $(this).width();
	$(this).css("width", px(breadth + growth));
}

jQuery.fn.grow = function(growth) {
	var heighth = $(this).height();
	$(this).css("height", px(heighth + growth));
}

jQuery.fn.shrink = function(shrinkage) {
	var heighth = $(this).height();
	$(this).css("height", px(heighth - shrinkage));
}

//function to determine attributes
jQuery.fn.hasValue = function(v) {
	if ($(this).attr("value") === v) {
		return true;
	} else {
		return false;
	}
}

jQuery.fn.hasName = function(v) {
	if ($(this).attr("name") === v) {
		return true;
	} else {
		return false;
	}
}

jQuery.fn.hasID = function(v) {
	if ($(this).attr("id") === v) {
		return true;
	} else {
		return false;
	}
}

//a function to go down to the bottom of the page
function dive() {
	var bottom = $(document).height();
	window.scrollTo(0, bottom);
}

//a function to add responsiveness
function makeResponsive() {
	$("head").append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
}

//a global replace function for the whole page
function trade(a, b) {
	$("body").html($("body").html().amend(a, b));
}

//function for a quick delay
function tic(func) {
	setTimeout(function() {
		func;
	}, 250);
}

//functions to sort in order high and low
Array.prototype.stack = function() {
	this.sort(function(a, b) {
		return a - b; //low to high
	});
}

Array.prototype.rank = function() {
	this.sort(function(a, b) {
		return b - a; //high to low
	});
}

//a function to make all links open in a new tab
function spring() {
	$("a").attr("target", "_blank");
}

//a function to change a boolean
function flip(boo) {
	return !boo;
}

//a function to scroll an element
jQuery.fn.glide = function(buffer) {
	$(this).css("position", "relative").css("top", "0px");
	$(this).parent().css("overflow", "hidden");
	var elem = $(this);
	window.onwheel = function(e) {
		//if the mouse is over it
		var leftBound = elem.offset().left;
		var rightBound = elem.width() + leftBound;
		var upperBound = elem.offset().top;
		var lowerBound = elem.height() + upperBound;
		if (e.clientX > leftBound && e.clientX < rightBound && e.clientY > upperBound && e.clientY < lowerBound) {
			var pos = parseInt(elem.css("top")) - e.deltaY;
			halt(e);
			//don't let it scroll beyond the first element
			if (pos > 0) {
				pos = 0;
			}
			//only move if the form is taller than the container
			if (elem.height() > elem.parent().height()) {
				//don't let it scroll past the last element
				var edge = -1 * (elem.height() - elem.parent().height() + buffer);
				//don't let it scroll beyond the end
				if (pos < edge) {
					pos = edge;
				}
			} else {
				pos = 0;
			}
			elem.css("top", pos + "px");
		}
	}
}

//function for text to speech
function say(txt) {
	var msg = new SpeechSynthesisUtterance(txt);
	window.speechSynthesis.speak(msg);
}

//in case we ever lose jQuery
function x(el) {
	return document.querySelector(el);
}

//for potential division by zero
function tryDiv(numerator, denominator) {
	if (denominator === 0) {
		return Infinity;
	} else {
		return numerator / denominator;
	}
}

//a function for components
jQuery.fn.conjure = function(filePath, objArr) {
	var elem = $(this);
	$.get(filePath, function(res) {
		objArr.forEach(function(obj) {
			var html = res;
			for (key in obj) {
				html = html.replace("{" + key + "}", obj[key]);
			}
			elem.append(html);
		});
	});
}

//a function for all-around box shadow
jQuery.fn.shade = function(amt, color) {
	$(this).css("box-shadow", "0 0 " + amt + " " + color + ", 0 0 " + amt + " " + color);
}


//a function for Mutation Observer
jQuery.fn.evolve = function(func) {
	var that = $(this)[0].id;
	var mutant = new MutationObserver(function(mutations) {
		func;
	});
	mutant.observe(document.getElementById(that), {attributes: true, childList: true, characterData: true});
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