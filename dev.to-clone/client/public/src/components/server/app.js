const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(()=> console.log("MongoDB connected Succesfully!"))
.catch((err)=> console.log(err));

const userSchema = new mongoose.Schema({
  name:String,
  email:String
});

const User = mongoose.model("User", userSchema);

app.post("/adduser", async(req,res)=>{
  const user = new User(req.body);
  await user.save();
  res.send("User Added");
});

app.get("/users", async(req,res)=>{
  const data = await User.find();
  res.json(data);
});

app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
