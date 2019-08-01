import express from 'express'
import http from 'http'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  console.log('user connected')
})

export default server
