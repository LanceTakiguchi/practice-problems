/*
Project Name: Sort by Field
File Name: answer.js
Author: Lance Takiguchi
Date: 11/05/2016 Time: 15:21 
Objective: Sort an Array of Objects by the keys given a key
Prompt:  https://github.com/Learning-Fuze/practice-problems/blob/master/practice22/README.md
*/
/**
 * Takes an Array of objects and a search key and sorts the array by the a key in the objects. Uses bubble sort
 * @param  [Objects] input_array An Array of Objects
 * @param  String search_key  A String that is a key in the Objects
 * @return [Objects]             An Array of Objects sorted by the param key
 */
function sort_object_list_by_field(input_array, search_key){
	// Flag to see if there was any switches
	var was_switch = true;
	var temp = null;
	// Loop for so long as there was a switch in the last loop
	while(was_switch){
		was_switch = false;
		for(var i = 1; i < input_array.length; i++){
			if(input_array[i][search_key] < input_array[i - 1][search_key]){
				temp = input_array[i - 1];
				input_array[i - 1] = input_array[i];
				input_array[i] = temp;
				was_switch = true;
				console.log("switch ", input_array);
			}
		}
	}
	return input_array;
}
var input_array = 
[
    {name: 'John', age:42, gender:'M'},
    {name: 'Jack', age:34, gender:'M'},
    {name: 'Michael',age:40, gender: 'M'},
    {name: 'Kendra',age:48, gender:'F'}
]
console.log(sort_object_list_by_field(input_array, "age"));