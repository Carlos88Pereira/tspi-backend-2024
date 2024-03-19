const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Servidor funcionando na porta", port);
});

fs.openSync("./log.txt", "w"); //cria o arquivo log.txt
//a. Termine o processo de resposta enviando uma mensagem de saudação (string) como argumento
app.get('/',(req,res)=>{
    const body = "Hello World";
    res.writeHead(200, {    "Content-Length": Buffer.byteLength(body),   
     "Content-Type": "text/plain"  
    });
    res.end(body);
});

//Termine o processo de resposta enviando uma string contendo texto HTML contendo uma
//mensagem de saudação
app.get('/HTML',(req,res)=>{
    const body = '<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>jfjhfdjhsf</h1><p>This is a paragraph.</p></body></html>';
    res.writeHead(200, {    "Content-Length": Buffer.byteLength(body),   
     "Content-Type": "text/html"  
    });
    res.end(body);
});

//Termine o processo de resposta enviando um ficheiro HTML contendo uma mensagem de
//saudação

app.get('/HTMLfile', (req, res) => {
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