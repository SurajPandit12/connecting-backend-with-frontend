const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose= require("mongoose")


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log("db connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const kittySchema = new mongoose.Schema({
    username: String,
    password:String,
  });

  const User = mongoose.model('User', kittySchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/demo', async(req, res) => {

let user=new User();
user.username=req.body.name;
user.password=req.body.pass;
const doc= await user.save()
    console.log(doc);
    res.json( doc);
});


server.get('/demo', async(req, res)=>{
    const doc=await User.find({})
    res.json(doc);
})

server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
