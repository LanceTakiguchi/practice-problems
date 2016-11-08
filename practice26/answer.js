 /*
Project Name: Practice 26 - Search Array
File Name: answer.js
Author: Lance Takiguchi
Date: 11/08/2016 Time: 11:23 
Objective: Look for any keys in a target Array
Prompt: https://github.com/LanceTakiguchi/practice-problems/blob/master/practice26/README.md
*/

/**
 * Given an Array of keys to look for in a hay Array
 * @param  [Strings] hay    An Array of Strings that is the target of the search
 * @param  [Strings] needle An Array of Strings that is the keys to be looking for in the target
 * @return [Strings]        An Array of Strings where the a needle was found in the hay
 */
search_array = function(hay, needle){
	var output = [];
	for(var n in needle){
		for(var h in hay){
			if(hay[h] === needle[n]){
				output.push(needle[n])
				// Match has been noted, no need to further search for this particular key
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