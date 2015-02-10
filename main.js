

//1

var palindrome = function(string){
	var reversed = string.split('').reverse().join('');  //Turns the string into an array with the split method
														//then reverses the array with the reverse method
														// and using .join brings the array back to a string
														//and stores the value in a variable
	var orignalString = string;
	if (orignalString === reversed){
		console.log('True');
	}
	else{
		console.log('False')
	}
	// console.log(reversed);
	// console.log(orignalString);

};


palindrome('taco');
palindrome('racecar');
palindrome('playstation');
palindrome('civic');
palindrome('hannah');



//2

var dashInsert = function(){
	

	
};