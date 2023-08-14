const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectionString = process.env.DATABASE;


mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("db connected to ", connectionString)
}).catch((error)=>console.log(error))



module.exports = mongoose;
