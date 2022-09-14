const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url ===  '/')
        res.end('<h3>This is the Home Page</h3>')
    else if(req.url ===  '/about')
        res.end('<h3> This is the About Page </h3>')
    else
         res.end(`<h1>Ooops, 404 error !</h1><p>Please try <a href='/'>Here</a>`)
})

server.listen(5000)


