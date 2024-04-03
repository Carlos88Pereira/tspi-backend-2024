const express = require("express");
const fs = require("fs");
const { get } = require("http");
const app = express();
const port = 3000;

fs.openSync("./log.txt", "a+"); //cria o arquivo log.txt

function log(req, res){
    var str = req.route.path + "," + new Date().toLocaleTimeString + req.method;
    fs.appendFileSync('log.txt', str);
}

app.use(express.json());

app.listen(port, () => {
  console.log("Servidor funcionando na porta", port);
});

fs.openSync("./log.txt", "w"); //cria o arquivo log.txt
//a. Termine o processo de resposta enviando uma mensagem de saudação (string) como argumento
app.get('/',(req,res)=>{
    log(req, res);
    const body = "Hello World";
    res.writeHead(200, {    "Content-Length": Buffer.byteLength(body),   
     "Content-Type": "text/plain"  
    });
    res.end(body);
});

//Termine o processo de resposta enviando uma string contendo texto HTML contendo uma
//mensagem de saudação
app.get('/HTML',(req,res)=>{
    log(req, res);
    const body = '<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>jfjhfdjhsf</h1><p>This is a paragraph.</p></body></html>';
    res.writeHead(200, {    "Content-Length": Buffer.byteLength(body),   
     "Content-Type": "text/html"  
    });
    res.end(body);
});

//Termine o processo de resposta enviando um ficheiro HTML contendo uma mensagem de
//saudação

app.get('/HTMLfile', (req, res) => {
    log(req, res);
    // Lê o conteúdo do arquivo HTML
    const body = fs.readFileSync('html.html');
    // Define os cabeçalhos da resposta
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    // Envia o corpo da resposta
    res.end(body);
});

app.get('/', (req, res) => {
    log(req, res);
    //const body = 'Hello world';
    var body = fs.readFileSync('html.html', 'utf-8');
    var date = new Date();
    body = body.replace("current_date", date.toLocaleDateString());
    res.writeHead(200, {
      'Content-Lengt': Buffer.byteLength(body),
      //'Content-Type': 'text/plain'
      'Content-Type': 'text/html'
    });
    res.end(body);
  });


  app.get('/greet/:name', (req, res) => {
    log(req, res);
    var body = fs.readFileSync('html.html', 'utf-8');
    var name = req.params.name;
    var date = new Date();
    body = body.replace("current_date", date.toLocaleDateString());
    body = body.replace("hello", "Greetings" + " " + name + " Today is ");
    res.writeHead(200, {
      'Content-Lengt': Buffer.byteLength(body),
      'Content-Type': 'text/html'
    });
    res.end(body);
  });

  app.get("/log.txt", (req, res) => { //6. Para cada pedido que for efetuado, escreva no ficheiro log.txt, o caminho, o método HTTP e a data
    log(req, res);
    var escreve = req.route.path + "," + new Date().toUTCString() + req.method + "\n";
    res.send(escreve);
  });

  app.get("/log", (req, res) => { //7. Crie um endpoint que devolva o conteúdo do ficheiro log.txt
    var ficheiro = fs.readFileSync('log.txt', 'utf-8');
    res.send(ficheiro);
  });

  app.get("/log/d", (req, res) => { //8. Crie um endpoint para efetuar o download do ficheiro de logging
    res.download('/Users/macbookair/Documents/GitHub/tspi-backend-2024/ficha6/log.txt');
  });
  ///outra maneira
    app.get("/log/d", (req, res) => {
        res.download('log.txt');
    }); 