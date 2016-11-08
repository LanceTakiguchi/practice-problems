 /*
Project Name: Practice 26 - Search Array
File Name: answer.js
Author: Lance Takiguchi
Date: 11/08/2016 Time: 11:23 
Objective: 
Prompt: 
*/

search_array = function(hay, needle){
	var output = [];
	for(var n in needle){
		for(var h in hay){
			if(hay[h] === needle[n]){
				output.push(needle[n])
				break;
			}
		}
	}
	return output;
}

var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn'];
var output = null;

output = search_array(haystack,needle);
console.log(output); //outputs ['dog','lizard'];