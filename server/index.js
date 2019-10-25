require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING,SESSION_SECRET } = process.env
const Ctrl = require('./controller')
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db up my guy')
})


app.post('/auth/register', Ctrl.register)
app.post('/auth/login', Ctrl.login)


const port = SERVER_PORT
app.listen(port,() => console.log(`we up on ${port} baby!`))