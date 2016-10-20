/*
Project Name: Practice Problems - Practice 20
File Name: index.html
Author: Lance Takiguchi
Date: 10/19/2016 Time: 14:34 
Objective: Create a function, randomize_list(), that takes an array and ranzomizes the order, without resorting to the use of any pre-existing array methods.
Prompt: https://github.com/Learning-Fuze/practice-problems/blob/master/practice20/README.md
*/
/**
 * Main problem's function: Takes an array and returns it with it's elements randomized.
 * @param  Array init_array An array with varying element types.
 * @return Array            The same array as the start, but with it's elements randomly positioned
 */
 function randomize_list(init_array){
 	var length = init_array.length;
	//** To be a randomized number that is anywhere from an index to the length of the array.
	var ran = null; 
	//** Temporarly holds on of the values that is to be swapped
	var temp = null;  
	for(var i = 0; i < length; i++){
		//** Random index from the current index to the length of the array
		ran = Math.floor(Math.random() * (length - i) + i); 
		//* Swap the current index's value with the one from the ran index
		temp = init_array[i];
		init_array[i] = init_array[ran];
		init_array[ran] = temp;
	}
	return init_array;
}
/**
 * Takes an array and a set number of times to run the array through randomize_list and returns the results in an array with the set number of randomized arrays
 * @param  Array test_array Array with varying valued and typed elements
 * @param  Number num_runs   An integer that indicates how many tests to store into the return array
 * @return [Array]            An array that holds multiple arrays with the same elements, but a randomized order of elements.
 */
 function multi_run(test_array, num_runs){
 	var results_array = [];
 	for(var i =  0; i < num_runs; i++){
		//** Take a copy of the randomize the array and store it in the return array.
		results_array.push(randomize_list(test_array).slice()); 
	}
	return results_array;
};
/**
 * Takes an array with arrays with the same elements, but randomized order of elements and tells in the return if the order of elements are different between the nested arrays.
 * @param  [Array] multi_array An array holding arrays with the same elements, but in a potentially randomized order
 * @return bool             Tells if the arrays had elements in a varying order.
 */
 function are_arrays_different(multi_array){
 	for(var i  = 1; i < multi_array.length; i++){
 		for(var j  in multi_array[i]){
			//** If elements in two different arrays at the same index vary, the arrays are different
			if(multi_array[i - 1][j] !== multi_array[i][j]){ 
				return true;
			}
		}
	}
	//** If every element in all the arrays were indexed in the same order, the array were all the same.
	return false;  
};
/**
 * Runs multiple arrays into the randomizer and are_arrays_different function at a set number of randomized arrays and returns if they were indexed in a different order
 * @param  [Array]] many_tests     An array with arrays that differ in element types and lengths to test if the randomizer works
 * @param  Number num_to_compare A integer that tells how many tiems to run each test array through the randomizer. For the multi_run function.
 * @param bool display_failed Tells if the failed test results should show all it's arrays.
 * @return Nome                Prints if each array was truely randomized.
 */
 function init_tests(many_tests, num_to_compare, display_failed){
	//** num_to_compare needs to be a number greater than 2, else there is nothing to compare against
	if(num_to_compare < 2){
		console.warn("init_tests: 'Please enter a num_to_compare integer greater an 1'")
		return;
	}
	//** Will hold an array with arrays with the same elements, hopefully in a randomized order
	var mixed_arrays = null;
	if(display_failed){
		//** Loop to check if each array in the param array really is random
		for(var i in many_tests){
			mixed_arrays = multi_run(many_tests[i], num_to_compare);
			if(are_arrays_different(mixed_arrays)){
				console.log("Test ", i, " - ", many_tests[i], " passed.");
			}else{
				console.warn("Test ", i, " - ", many_tests[i], " failed! The 'randomized' arrays: ", mixed_arrays);
			}
		}
	}else{
		//** Loop to check if each array in the param array really is random
		for(var i in many_tests){
			mixed_arrays = multi_run(many_tests[i], num_to_compare);
			if(are_arrays_different(mixed_arrays)){
				console.log("Test ", i, " - ", many_tests[i], " passed.");
			}else{
				console.warn("Test ", i, " - ", many_tests[i], " failed!");
			}
		}
	}
}
//** An array with arrays where each nested array is filled with random elements and types and of varying array lengths
var many_tests = [
[5,3,2,5,1],
["A", "B"],
[1,2,3],
[1,2,3,4,5,6],
[2,3,51,6,3,6],
["a", "b", "c", "d", "e"],
["e", "g", "Q", "sa", "32"],
["fS", "a", "Q", "23", 31, true, false, 4.2]
];
//** Run the tests
for(i = 0; i < 100; i++){
	init_tests(many_tests, 10, false);
}