const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Please, enter your password", function(input){
	let str = input.length
    var upperCaseLetters = /[A-Z]/g;

    if (str === 10 && input.match(upperCaseLetters)){
        console.log('Hi, \n' + 'how are you?')
    } else {
        console.log('Wrong \n' + 'password!')
    }
    
  reader.close()

});
 