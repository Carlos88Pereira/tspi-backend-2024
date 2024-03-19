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
  var id = dataObj.data.length + 1; // adicionar um novo ID ao colocado no postman
  person.id = id;
  dataObj.data.push(person);
  response.send("User created with ID: " + id);
});

app.delete("/users/:id", (req, res) => {
  var id = req.params.id;
  var result = dataObj.data.filter((person) => person.id != id);
    if (dataObj.data.length == result.length)
      res.send("Not Found" );
    else{   
      dataObj.data = result;
      res.send("Id: " + id + " Deleted");
    }
  });

app.get("/users/:id", (req, res) => {
  var id = req.params.id;
  var person = null;
  for (var i = 0; i < dataObj.data.length; i++) {
    if (dataObj.data[i].id == id){
      person = dataObj.data[i];
      break;
    }
  }
    if(person == null){
      res.send("user not found");}
    else
      res.send(person);
});

app.get("/users/:age", (req, res) => {
  var age = req.params.age;
  var persons = [];
  for (var i = 0; i < dataObj.data.length; i++) {
    if (dataObj.data[i].age == age){
      persons.push = dataObj.data[i];
      break;
    }
    if(persons == null){
      res.send("Ages not found");}
    else
      res.send(persons);
}});

app.put("/users/:id", (req, res) => {
  var id = req.params.id;
  var details = req.body;
  var contains = false;
    for (var i = 0; i < dataObj.data.length; i++) {
      if (dataObj.data[i].id == id){
        dataObj.data[i].first_name = details.first_name;
        dataObj.data[i].last_name = details.last_name;
        dataObj.data[i].email = details.email;
        dataObj.data[i].age = details.age;
        contains = true;
        break;
      }
    }
    if(contains == false){
      res.send("user not found");}
    else
      res.send("User Updated");
    }
  );


  
app.listen(port, () => {
  console.log("server a funcionar");
});
