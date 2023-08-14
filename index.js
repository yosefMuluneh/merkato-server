const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
const mongoose = require("./mongodb.js")
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:3000", credentials:true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//All the routes here
app.get('/', (req, res) => {
    
  });




const PORT = process.env.PORT || 5000;


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
});
// const connectionString = process.env.DATABASE;

// mongoose.connect(connectionString,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=>{
// }).catch((error) => console.log(`${error} ${connectionString} did not connect`))

app.listen(PORT, ()=> console.log(`Server runnning on port: ${PORT}`))




