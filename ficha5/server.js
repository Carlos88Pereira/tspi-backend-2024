const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

var data = fs.readFileSync("./data.json");
var dataObj = JSON.parse(data);


app.get("/users", (req, res) => {
  res.send(dataObj);
});

app.post("/users", (request, response) => {
  var person = request.body;
  var id = dataObj.data.length +1; // adicionar um novo ID ao colocado no postman
  person.id = id;
  dataObj.data.push(person);
  response.send("User created with ID: " + id);
});

app.delete("/users/:id", (req, res) => {
  res.send("DELETE");
});

app.get("/users/:id", (req, res) => {
  var id = 2;
  for (var i = 0; i < dataObj.data.length; i++){
    var person = dataObj.data[i];
  }
  res.send("GET BY ID");
});

app.put("/users/:id", (req, res) => {
  res.send("put");
});

app.listen(port,()=>{
  console.log("server a funcionar")
});