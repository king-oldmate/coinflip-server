const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

const server = http.createServer((req, res) =>{
    const page = url.parse(req.url).pathname
    //const params = Math.random()
    console.log(page)
    switch (page){
        case '/':
            fs.readFile('index.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                res.end
            })
            break
        case '/api':
            let toss = Math.random()
            //res.writeHead(200, {'Content-Type': 'application/json'})
            if (toss >= 0.5){
                res.writeHead(200, {'Content-Type': 'application/json'})
                const result = { toss: "heads" }
                res.end(JSON.stringify(result))
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'})
                const result = { toss: "tails" }
                res.end(JSON.stringify(result))
            }
            
            break
        case '/main.js':
            fs.readFile('main.js', function(err, data){
                res.writeHead(200, {'Content-Type': 'text/javascript'})
                res.write(data)
                res.end()
            })
            break
    }

})

server.listen(8000)