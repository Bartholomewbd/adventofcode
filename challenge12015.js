//https://adventofcode.com/2015/day/1

const fs = require('fs');

fs.readFile('./floor.txt', (err, data) => {
    console.time('challenge');
    if(err) {
        console.log('error');
    }
    let instructions = data.toString();
    let floor = 0;
    for(let i = 0; i < instructions.length; i++){
        if(instructions[i] === '('){
            floor++;
        }else{
            floor--;
        }
        
    }
    console.log(floor);
    console.timeEnd('challenge')
})

