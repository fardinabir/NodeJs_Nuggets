const rdln = require('readline')
const fs = require('fs')

const frt = require('./writeFile.js')

const rl = rdln.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
/*rl.question('What do you think of Node.js? ', (answer) => {
    frt(answer)
    rl.close();
});*/


console.log(require('lodash').flattenDeep([1,[2,[3,4]]]))

