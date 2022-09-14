const {readFileSync, writeFileSync, read} = require('fs')
const {readFile, writeFile}  = require('fs')

// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','ascii')

// const wrt = writeFileSync('./content/result.txt',`${first}   ${second}`,{flag : 'a'})

// ###############################


console.log("starting Async")
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const r1 = result
    console.log("First call sesh")
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const r2 = result
        console.log("Second call sesh")
        writeFile('./content/result.txt',`${r1}   ${r2}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("Done Read+Write")
        })
    })
})

console.log("Waiting for the nextJob")

