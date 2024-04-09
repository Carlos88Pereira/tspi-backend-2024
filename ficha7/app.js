const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());

var server = app.listen(3000, function ()  {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server is running!!')
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});
//i. Listar todas as pessoas existentes na tabela Persons e devolver a resposta no body//

//connection.query("select * from ficha7.people", (err, results, fields) => {
    //console.log(results);
//});

//ii. Adicionar uma nova pessoa à tabela Persons, o ID deve ser gerado automaticamente pelo
//MySQL tendo em conta o número de pessoas existentes. O ID da pessoa adicionada deve
//ser devolvido na resposta

app.get('/people', (req, res) => {
  connection.query("SELECT * FROM people",function(error, results, fields){
    if(error) throw error;
    res.send(results);
  });
});

app.post('/people', (req, res) => {
    var details = req.body;

 
});

//iii. Apagar uma pessoa da tabela Persons pelo seu ID recebido no body. O número de linhas
//afetadas deve ser devolvido na resposta. Caso a pessoa a apagar não exista o erro deverá
//ser tratado de forma adequada.
app.delete('/people', (req, res) => {
    var Id = req.body.Id;
    var sql = 'delete from ficha7.people where Id = ?';
    connection.query( sql, [Id], (err, results, fields) => {
         if (error) throw error;
        res.send(results);
    });
});


app.delete('/people/:Id', (req, res) => {
    var Id = req.params.Id;

});
app.get('/people/:Id', (req, res) => {
  var Id = req.params.Id;
  var sql = 'SELECT * FROM ficha7.people WHERE Id = ?';
  connection.query(sql, [Id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the person' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'No person found with the given ID' });
    } else {
      res.json(results[0]);
    }
  });
});

app.put('/people/:Id ', (req, res) => {
    var Id = req.params.Id;
    var details = req.body;
});

app.get("/people",(req, res)=>{

})
app.get('/people/:age/:profession', (req, res) => {
  var age = req.params.age;
  var profession = req.params.profession;
  var sql = 'SELECT * FROM ficha7.people WHERE age = ? AND profession = ?';
  connection.query(sql, [age, profession], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the people' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'No people found with the given age and profession' });
    } else {
      res.json(results);
    }
  });
});

app.put('/people/:Id', (req, res) => {
  var Id = req.params.Id;
  var details = req.body;
  var sql = 'UPDATE ficha7.people SET ? WHERE Id = ?';
  connection.query(sql, [details, Id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the person' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'No person found with the given ID' });
    } else {
      res.json(details);
    }
  });
});