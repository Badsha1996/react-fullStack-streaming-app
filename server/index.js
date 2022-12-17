const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute =  require("./routes/auth")

dotenv.config();
const app = express();


main().catch(err => console.log(err))


async function main(){
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("DataBase is running!"))
    .catch(err => console.log(err))
}

app.use(express.json());
app.use("/api/auth", authRoute)

app.listen(8800, ()=>{
    console.log("The server is running !!")
})




