const http = require('http');
const PORT = 3001

const app = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain' })
  response.end('Hello World')
})

app.listen(PORT)
console.log(`Sever is running on PORT : ${PORT}`)