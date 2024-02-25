/*ficha 2*/

/*2. Escreva uma função que dada uma frase imprima a mesma frase por ordem inversa.  
a. Por exemplo: Entrada: Hoje e Domingo Saída: ejoH e ognimoD */

/*function reversewords(str){
    var words = str.split(" "); /*separea pelos espaços, se fosse "," separava por virgula
}
reversewords("Hoje e Domingo"); 
*/

/*function countVowels(str) {
    var count = 0;
    var vowels = ["a", "A", "e", "E", "i", "I", "O", "o", "u", "U"];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                count++;
                break; 
            }
        }
    }

    return count;
}
var sentence = "Hello";
var vowelCount = countVowels(sentence);
console.log("A frase '" + sentence + "' tem " + vowelCount + " vogais");*/

/*Escreva uma função que dada frase e uma letra do abecedário devolva o número vezes que essa letra
ocorra. Não faça distinção entre maiúsculas e minúsculas (toLowerCase()).*/
/*
function numeroVezes(letra,frase){
    var count = 0
    for (let i=0; i < frase.length; i++)
        if (frase[i] == letra)
            count++;
        return count
        }


var letra = "A";
var frase = "Antonio";
console.log("A nome '" + frase + "' tem " + count + " vogais");
*/

function drawRectangle(height, width) {
  var line = "";
  for (let i = 0; i < width; i++) line += "*";
  for (let j = 0; j < height; j++) console.log("*");
  console.log(line);
}
//drawRectangle(10,10)

function triangle(tamanho) {
  for (let i = 0; i < tamanho; i++) {
    var line = "";
    line += "*";
    console.log(line);
  }
}
var tamanho = 10;
//triangle(tamanho);

function caixa(height, width) {
  for (let i = 0; i < height; i++) {
    var line = "";
    for (let j = 0; j < width; j++) {
      if (i == 0 || i == height - 1 || j == 0 || j == height - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
//caixa(11, 11);


function processStudent() {
    var alunos = [];
    var aluno1 = {name: "carlos", number: 299, grade: 17};
    var aluno2 = {name: "joao", number: 11, grade: 20};
    var aluno3 = {name: "andre", number: 23, grade: 10};
    var aluno4 = {name: "fras", number: 41, grade: 8};
    var aluno5 = {name: "dsaasd", number: 2, grade: 13};
    alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5);
    return alunos;
}
var alunos = processStudent();
    console.log("O aluno " + alunos[i].name + " com o numero " + alunos[i].number + " tem a média de: " + alunos[i].grade);

function processStudent() {

    }



