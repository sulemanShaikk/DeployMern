const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const bcrypt = require("bcrypt");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

const app = express();
app.use(express.json());
app.use(cors());
//mongoose.connect("mongodb://127.0.0.1:27017/server-yt");
mongoose.connect("mongodb+srv://shaiksulemansagar:1234@cluster0.o0qhf9t.mongodb.net/?retryWrites=true&w=majority");

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.use("/", (req, res) => {
  res.json("Welcome to the server!");
});


app.post("/login", (req, res) => {
  const { name, email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ status:"success" , name: user.name});
        } else {
          res.json("Incorrect credentials");
        }
      } else {
        res.json("No record exists");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).json("Internal server error");
    });
});


app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});


app.listen(3006, () => {
  console.log("Server is running on http://localhost:3006");
});


