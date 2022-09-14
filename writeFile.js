const fs = require('fs')

const write = (text) => fs.writeFile('demo.txt',text,(err)=>{
  if(err)
    console.log(`Here is an Error : ${err}`)
})

module.exports = write

//write("abir")