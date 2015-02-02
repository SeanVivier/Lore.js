# Lore.js
Personal JavaScript library.  Work in progress.
Hosted at seanvivier.com/js/Lore.js

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

//Repeatedly prompt for password until the right one is entered.  Doesn't work if JS is disabled, so consider having everything hidden until gatekeeper returns true.  Easily hacked by anyone who can view source, so consider dropping the password into the script via PHP.
function gatekeeper(password) {
	var magicWord=prompt("Please enter the password: ");
	if (magicWord !== password) {
		gatekeeper();
	} else {
		return true;
	}
}

//Find the value of n to a certain number of significant figures.
function sigFig(n, place) {
	return Math.floor(n*place)/place;
}
