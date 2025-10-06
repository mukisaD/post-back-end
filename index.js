 const express = require("express");
const connectDB = require("./db");
 require('dotenv').config();

 const userRoutes =require("./ROUTES/users")
 const app = express();

 app.get ('/',(req, res)=>(
    res.send('welcome to my post api')
 
 ))

 //routes
 app.use('/user',userRoutes)
 const PORT =process.env.PORT

 app.listen(PORT,()=>(
    console.log('server running on port ${PORT}')

 ))

 connectDB();

