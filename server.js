const express = require('express');

 const mongoose = require("mongoose");
 require("dotenv").config()
// import or require the routes
const routes = require('./routes/TaskRoutes')

 const cors = require("cors");

 const app=express();
 
 const PORT = process.env.PORT || 5000;

 app.use(express.json())
 app.use(cors())


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("mongodb connected ..."))
.catch((err) => console.log(err))
 
app.use("/api" , routes)

 app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));