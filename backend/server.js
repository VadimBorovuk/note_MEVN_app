require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routers/index')

const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.use('/api', router)

const startApp  =()=> {
    try{
        // mongoose.createConnection(process.env["URI_BD "])
        app.listen(PORT, () => {
            console.log(`server started on ${PORT} port`)
        })
    }catch (e){
        console.log(e)
    }
}
startApp()
