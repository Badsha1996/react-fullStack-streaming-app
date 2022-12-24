const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute =  require("./routes/auth")
const usersRoute = require("./routes/users")

dotenv.config();
const app = express();


main().catch(err => console.log(err))


async function main(){
    mongoose.set("strictQuery", false)
    await mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology : true})
    .then(()=> console.log("DataBase is running!"))
    .catch(err => console.log(err))
}

app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)

app.listen(8800, ()=>{
    console.log("The server is running !!")
})




