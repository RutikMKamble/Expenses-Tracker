const express = require("express");
const app = express();
const cors = require("cors");


//Data Base connectivity===============================
const conn = require('./db');
conn.connection.on("connected", (err)=>{
    if(err){
        console.log("Database Not Connect...!")
    }
    else(
        console.log("Connection is Successfully connected with MONGODB")
    )
})

//=============================================
app.use(cors());
app.use(express.json());

app.use("/expenses", require("./routes/userRoutes"))

//=============================
app.listen(6001,()=>{
    console.log("Server is Start....!")
})

//npm run server