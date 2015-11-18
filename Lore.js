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