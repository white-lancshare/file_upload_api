const express = require("express");
const app = express();
require("dotenv").config();
const PORT=process.env.PORT
const productRouter=require('./routes/productRoute')
const sequelize= require('./database/database')

app.use(express.json())
app.use(productRouter)

sequelize.authenticate().then(()=>{
    console.log(" server connected sucessfully")
}).catch((e)=>{
  console.log("there is a error", e.message)
})




app.listen(PORT,()=>{
    console.log(`server  i running on port ${PORT}`)
})