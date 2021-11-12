const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Please, enter your password", function(input){
	let str = input.length
    var upperCaseLetters = /[A-Z]/g;

    if (str === 10 && input.match(upperCaseLetters)){
        console.log('\x1b[36m%s\x1b[0m', 'Hi, \n' + 'how are you?')
    } else {
        console.log('Wrong \n' + 'password!')
    }
    
  reader.close()

});
 