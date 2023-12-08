const express=require('express');
const dotenv=require('dotenv').config()
const connectDB = require('./connectDB');
app=express()
connectDB()
const port=process.env.PORT|| 5000

app.use('/api/membres', require('./route'))

app.listen(port, ()=>console.log(`Server connect to port ${port}`))