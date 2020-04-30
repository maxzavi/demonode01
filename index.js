const http = require('http')

const app = http.createServer(function(req, res){
    res.end('hello world1!!')
}).listen(3000)

