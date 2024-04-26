const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// const dburl = "mongodb://localhost:27017/elmsproject14"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to DB Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });

const dbsurl = "mongodb+srv://admin:admin@cluster0.hn4ftyc.mongodb.net/elmsproject14?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbsurl).then(() => {
    console.log("Connected to MongoDB Atlas Successfully")
}).catch((err) => {
    console.log(err.message)
});



const app = express() 
app.use(cors())
app.use(express.json())  // to parse JSON data

const adminrouter = require("./routes/adminroutes")
const employeerouter = require("./routes/employeeroutes")


app.use("",adminrouter) // to include all admin routes
app.use("",employeerouter) //to include all employee routes


const port=2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})