
const {readFile,writeFile}  = require('fs')


console.log("starting Async")

async function readWriteOp(){
    console.log("Going to intiate await")
    let r1 = ''
    await new Promise(()=>{
        setTimeout(() => {console.log("TimeOut1..............1")}, 3000);
    }).then(()=>{
        readFile('./content/first.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        r1 = result
        console.log(r1)
        console.log("In first call............",Date.now())
    })
    })
    console.log("First call sesh",Date.now())
    console.log(r1)

    let r2 = ''
    await new Promise(()=>{
        setTimeout(() => {console.log("TimeOut......")}, 3000);
    })

    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        r2 = result
        console.log(r2)
        console.log("In second call",Date.now())
    })
    console.log("Second call sesh",Date.now())
    await writeFile('./content/result.txt',`${r1}   ${r2}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log()
        console.log("In third call",Date.now())
    }
    )
    console.log("Third call sesh",Date.now())
}
readWriteOp()
console.log("Handling the nextJob")

