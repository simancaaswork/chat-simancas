const express = require('express');
const http = require('http')
const app = express()

const server = http.createServer(app)

const socketio = require('socket.io');
const io = socketio(server)

const PORT = process.env.PORT || 5050

let usersConnected = []

io.on('connect', socket => {

    socket.on('messages', data => {
        
        socket.broadcast.emit('msgHistory', data)
    })

    socket.on('somebody is writing', data => {
        const { name } = data
        socket.broadcast.emit('is writing', name)
    })

    socket.on('new user connected', user => {
        user.sockedId = socket.id
        usersConnected.push(user)

        socket.emit('add new user', usersConnected)
        socket.broadcast.emit('add new user', usersConnected)
    } )

    socket.emit('update users connected', usersConnected)

    socket.on('delete user', () => {
        let userOff = socket.id;
        usersConnected = usersConnected.filter((user) => user.sockedId !== userOff)
        socket.broadcast.emit('add new user', usersConnected)
    })
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))
