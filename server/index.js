const express=require('express')
const cors=require('cors')
require("dotenv").config();
const port=process.env.port || 5000


const app=express()
app.use(express.json())
app.use(cors())

app.use('/movies', require('./routes/movies.routes'))
app.listen(port, ()=>console.log(`Go on ${port}, Enjoy.`))