const readline = require('readline');                                 
const chalk = require('chalk')                                                                      
const rl = readline.createInterface({                                 
  input: process.stdin,                                               
  output: process.stdout                                              
});                                                                   
                                                                      
rl.question('Insert what you want to search\n', (name) => {                        
  const input = name

  const str = 'hello there you are cute homie, howy\'all doing now'

	let pos = 0
		while(true){
			let found = str.indexOf(input, pos)
			if(found == -1) {break}
			console.log('Found at ' + pos)
		console.log(str.split('').map((char, index) => index === found ? chalk.red(char) : char).join(''));
		pos = found + 1;
	}	
	rl.close()

});

