const express = require('express')


const app = express()

const personasRoutes = require('./routes/personas')


//middleware parsea a json
app.use(express.json())

app.use('/persona',personasRoutes)




   


module.exports = app