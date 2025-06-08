const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require("cors")
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Success!")
            }
            else {
                res.json("The Password is incorrect!")
            }
        }
        else {
            res.json("No Record Found!")
        }
    })
})

app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running!")
})