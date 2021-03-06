/*
Project Name: Practice 08 - Char Convert
File Name: script.js
Author: Lance Takiguchi
Date: 11/11/2016 Time: 15:01 
Objective: Convert characters in a string into ASCII numbers
Prompt: https://github.com/LanceTakiguchi/practice-problems/blob/master/practice08/README.md
Level: 3 - 1
JS Bin: 
*/

/**
 * Takes a string and returns the string of it's ASCII equivalent on a character to character basis
 * @param  String words A String to be converted into ASCII Numbers
 * @return String       A String of Numbers representing the @param words characters in ASCII
 */
function character_convert(words){
	var numbers = "";
	// Holds all previously seen chars for quick convertion
	var known = {};
	var cur = null;
	for(var char in words){
		cur = words[char].charCodeAt(0);
		if(char in known){
			numbers += known[char];
		}else{
			// Save the new char translation in return & Object
			known[char] = cur;
			numbers += cur;
		}
	}
	return numbers;
}

console.log(character_convert("the cat in the hat"));