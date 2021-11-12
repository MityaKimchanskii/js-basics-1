const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Please, enter your password", function(input){
	const str = input.length
    if (str === 10){
        console.log("Hi, how are you?")
    } else {
        console.log("Wrong password!")
    }
  reader.close()

});
 