/*
Project Name: Add Array
File Name: answer.js
Author: Lance Takiguchi
Date: 11/07/2016 Time: 10:16 
Objective: Takes the sum of the same index in two Arrays and outputting it into an Array
Prompt:  https://github.com/Learning-Fuze/practice-problems/blob/master/practice22/README.md
JSBin: http://jsbin.com/kegumuyete/edit?js,console
*/

function add_arrays(first, second){
	var output = [];
	for(var i in first){
		output.push(first[i] + second[i]);
	}
	return output;
}
var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4]
var output = add_arrays(first_array,second_array);
console.log(output); //outputs [6,13,10,0];