/*Crie uma pasta para a ficha 4
2. Crie um ficheiro app.js
a. Crie um objeto da forma literal com as seguintes propriedades: name, age, gender e converta o
objeto para JSON utilizando a função JSON.stringify
b. Crie uma string manualmente no formato JSON que represente o objeto criado anteriormente e
converta a string para um objeto utilizando a função JSON.parse
3. Crie um ficheiro person.js
a. Crie um objeto/classe Person usando a sintaxe da função construtor
b. Adicione duas propriedades ao objeto
firstName
lastName
c. Utilizando herança prototipada adicione um novo método greet que efetua uma saudação com o
primeiro e o último nome: “Hello John Doe”
d. Crie duas instâncias do objeto Person com nomes diferentes.
e. Utilizando herança prototipada adicione uma nova propriedade age
f. É possível aceder/alterar essa propriedade?
g. Altere o método greet para utilizar a idade
h. Imprima para a consola a propriedade __proto__, qual o seu conteúdo?
i. Compare a propriedade __proto__ das duas instâncias criadas previamente. Qual o resultado?
4. Crie um ficheiro function_arrays.js
a. Crie um array vazio
b. Utilizando a função push adicione 3 funções anónimas ao array que escrevam uma mensagem na
consola: “Hello World 1, 2, 3”
c. Como podemos invocar todas as funções que foram adicionadas ao array utilizando a expressão
for?
d. Replique a alínea anterior utilizando a expressão forEach
5. Crie um ficheiro config.js para armazenar os nomes dos eventos
a. Crie um novo objeto events que irá armazenar os nomes dos eventos como atributos
b. Exporte o objeto como um módulo utilizando a funcionalidade module.Exports
c. No ficheiro app.js importe o módulo utilizando a funcionalidade require
d. Substitua todas as ocorrências das “magic strings” pelas propriedades constantes do ficheiro
config.js*/


/*a. Crie um objeto da forma literal com as seguintes propriedades: name, age, gender e converta o
objeto para JSON utilizando a função JSON.stringify
b. Crie uma string manualmente no formato JSON que represente o objeto criado anteriormente e
converta a string para um objeto utilizando a função JSON.parse*/

var obj = {name:"Carlos", age:20, gender:"masculino"}; // objecto
//var JsonString = '{"name":"Carlos", "age":20, "gender":"masculino"}';
//var age = obj.age;
var x = JSON.stringify(obj); // mete o objecto em formato jsonstring (em string)
    console.log(x + "Este é o print com formato string");
var y = JSON.parse(x);// remove o formato string para objecto 
console.log(y + "Este e o print em formato objecto");



