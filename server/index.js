'use strict'

const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
const express = require('express');
const app = require('./app');
const port = process.env.PORT || 6677;


// CONEXIÓN CON LA BASE DE DATOS MONGODB
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/api-rest-metalchat', { useUnifiedTopology: true })
.then(() => {
    console.log('La conexión a la base de datos de Mongo se ha realizado correctamente!!');

    // SE EJECUTA EL SERVIDOR CON SOCKETS Y ACCESO DE CORS
    const server = require('http').Server(app);
    const io = require('socket.io')(server);

    // SE UTILIZA EL LADO DEL CLIENTE
    app.use(express.static('client'));


    // PROCESOS DE SOCKET.IO
    const messages = [{
        id: 1,
        text: 'Bienvenido al chat privado de apsan.dev',
        nickname: 'Bot - alejandropsan'
    }];

    io.on('connection', function(socket){
        console.log('El cliente con IP: ' + socket.handshake.address + ' se ha conectado...');

        socket.emit('messages', messages);

        socket.on('add-message', (data) => {
            messages.push(data);

            io.sockets.emit('messages', messages);
        });

    });

    server.listen(port, function(){
        console.log('El servidor http://localhost:6677 está funcionando en el puerto' + port);
    });

}).catch(error => console.log(error)); 






