function calcularIMC(peso, altura) {
    // Calcula o índice de massa corporal (IMC) de uma pessoa
    var imc = peso / (altura * altura);
    return imc;
}
function imprimirCondicaoFisica(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        console.log("Peso normal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obeso");
    }
}
// Exemplo de uso:
var peso = 62; // em kg
var altura = 1.80; // em metros

var imc = calcularIMC(peso, altura);
console.log("O IMC é: " + imc.toFixed(2)); // arredonda o IMC para 2 casas decimais
imprimirCondicaoFisica(imc);

function fraseAoContrario(frase) {
    // Divide a frase em palavras usando o espaço como delimitador
    var palavras = frase.split(" ");
    var fraseInversa = "";

    // Itera sobre as palavras ao contrário e as adiciona à frase inversa
    for (var i = palavras.length - 1; i >= 0; i--) {
        fraseInversa += palavras[i];

        // Adiciona um espaço entre as palavras, exceto para a última palavra
        if (i !== 0) {
            fraseInversa += " ";
        }
    }
    console.log(fraseInversa);
}
// Exemplo de uso:
var frase = "Hoje e Domingo";
//fraseAoContrario(frase);

function contarVogais(frase) {
    // Define um conjunto de vogais para facilitar a verificação
    var vogais = "aeiouAEIOU";
    var contador = 0;

    // Itera sobre cada caractere da frase
    for (var i = 0; i < frase.length; i++) {
        // Verifica se o caractere é uma vogal
        if (vogais.includes(frase[i])) {
            contador++;
        }
    }

    return contador;
}
// Exemplo de uso:
var frase = "Esta é uma frase de exemplo";
var numeroDeVogais = //contarVogais(frase);
    console.log("Número de vogais na frase:", numeroDeVogais);

function contarLetra(frase, letra) {
    // Convertendo a letra para minúscula para evitar distinção entre maiúsculas e minúsculas
    letra = letra.toLowerCase();

    var contador = 0;

    // Itera sobre cada caractere da frase
    for (var i = 0; i < frase.length; i++) {
        // Convertendo o caractere atual para minúscula para evitar distinção entre maiúsculas e minúsculas
        var caractereAtual = frase[i].toLowerCase();

        // Verifica se o caractere atual é igual à letra fornecida
        if (caractereAtual === letra) {
            contador++;
        }
    }
    return contador;
}
// Exemplo de uso:
var frase = "Esta é uma frase de exemplo";
var letra = "e";
var numeroDeOcorrencias = //contarLetra(frase, letra);
    console.log("Número de vezes que a letra '" + letra + "' ocorre na frase:", numeroDeOcorrencias);

function calcularTempoDeTrabalho(horaEntrada, horaSaida) {
    // Definindo os horários de abertura e fechamento da empresa
    var horaAbertura = new Date();
    horaAbertura.setHours(8, 0, 0); // 08:00:00
    var horaFechamento = new Date();
    horaFechamento.setHours(18, 0, 0); // 18:00:00

    // Convertendo os horários de entrada e saída para objetos de data
    var entrada = new Date();
    var partesEntrada = horaEntrada.split(":");
    entrada.setHours(parseInt(partesEntrada[0]), parseInt(partesEntrada[1]), parseInt(partesEntrada[2]));

    var saida = new Date();
    var partesSaida = horaSaida.split(":");
    saida.setHours(parseInt(partesSaida[0]), parseInt(partesSaida[1]), parseInt(partesSaida[2]));

    // Verificando se os horários de entrada e saída estão dentro do intervalo de trabalho
    if (entrada < horaAbertura || saida > horaFechamento) {
        console.log("Os horários de entrada e saída devem estar dentro do intervalo de trabalho (08:00:00 - 18:00:00).");
        return;
    }

    // Calculando o tempo de trabalho
    var diferencaEmMilissegundos = saida - entrada;
    var segundos = Math.floor(diferencaEmMilissegundos / 1000);
    var horas = Math.floor(segundos / 3600);
    segundos %= 3600;
    var minutos = Math.floor(segundos / 60);
    segundos %= 60;

    console.log("Tempo de trabalho:", horas + " horas, " + minutos + " minutos, " + segundos + " segundos");
}

// Exemplo de uso:
var horaEntrada = "09:30:00";
var horaSaida = "17:45:00";
//calcularTempoDeTrabalho(horaEntrada, horaSaida);

function desenharRetangulo(altura, largura) {
    // Verifica se a altura e a largura são números positivos
    if (altura <= 0 || largura <= 0) {
        console.log("A altura e a largura devem ser números positivos.");
        return;
    }

    // Desenha o retângulo com asteriscos
    for (var i = 0; i < altura; i++) {
        var linha = "";
        for (var j = 0; j < largura; j++) {
            linha += "* ";
        }
        console.log(linha);
    }
}

// Exemplo de uso:
var altura = 5;
var largura = 8;
//desenharRetangulo(altura, largura);

function desenharTriangulo(altura) {
    // Verifica se a altura é um número positivo
    if (altura <= 0) {
        console.log("A altura deve ser um número positivo.");
        return;
    }

    // Desenha o triângulo com asteriscos
    for (var i = 1; i <= altura; i++) {
        var linha = "";
        // Adiciona asteriscos à linha de acordo com o número da linha atual
        for (var j = 1; j <= i; j++) {
            linha += "* ";
        }
        console.log(linha);
    }
}

// Exemplo de uso:
var altura = 5;
//desenharTriangulo(altura);

function desenharCaixa(lado) {
    // Verifica se o lado é um número positivo
    if (lado <= 0) {
        console.log("O lado deve ser um número positivo.");
        return;
    }

    // Desenha a parte superior da caixa
    var linhaSuperior = "*".repeat(lado);
    console.log(linhaSuperior);

    // Desenha o corpo da caixa (parte interna)
    for (var i = 2; i < lado; i++) {
        var linhaInterna = "*" + " ".repeat(lado - 2) + "*";
        console.log(linhaInterna);
    }

    // Desenha a parte inferior da caixa
    if (lado > 1) {
        var linhaInferior = linhaSuperior;
        console.log(linhaInferior);
    }
}

// Exemplo de uso:
var lado = 5;
//desenharCaixa(lado);

function processStudent() {
    var alunos = [];
    var aluno1 = { name: "carlos", number: 299, grade: 17 };
    var aluno2 = { name: "joao", number: 11, grade: 20 };
    var aluno3 = { name: "andre", number: 23, grade: 10 };
    var aluno4 = { name: "fras", number: 41, grade: 8 };
    var aluno5 = { name: "dsaasd", number: 2, grade: 5 };
    alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5);
    return alunos;
}
var alunos = processStudent();
// Lista - O programa imprime todas as notas. 
for (var i = 0; i < alunos.length; i++) {
    console.log("O aluno " + alunos[i].name + " com o numero " + alunos[i].number + " tem a média de: " + alunos[i].grade);
}
//c. Melhor nota – O programa imprime o número do melhor aluno e a respetiva nota. 
var notaMaisAlta = alunos[0].grade;
var AlunoMaisAlta = alunos[0].name;
for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].grade > notaMaisAlta) {
        notaMaisAlta = alunos[i].grade;
        AlunoMaisAlta = alunos[i].name;
    }
}
console.log("A nota mais dalta é " + notaMaisAlta + ", e pertence a " + AlunoMaisAlta);
//d. Pior nota – O programa imprime o número do pior aluno e a respetiva nota. 
var notaBaixa = alunos[0].grade
var alunoMaisBaixo = alunos[0].name
for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].grade < notaBaixa) {
        notaBaixa = alunos[i].grade
        alunoMaisBaixo = alunos[i].name
    }
}
console.log("A nota mais baixa é " + notaBaixa + ", e pertence a " + alunoMaisBaixo);
//e. Nota média – O programa imprime o número do aluno que tiver a nota mais próxima da média e a respectiva nota
function notaMedia(alunos) {
    var soma = 0;
    for (var i = 0; i < alunos.length; i++) {
        soma += alunos[i].grade;
    }
    var media = soma / alunos.length;
    return media;
}
var alunos = processStudent();
var total = notaMedia(alunos);
console.log("A nota média " + total);

function negativas(alunos) {
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].grade < 10) {
            var nome = alunos[i].name;
            var nota = alunos[i].grade;
            console.log("O aluno " + nome + " teve negativa de " + nota);
        }
    }
}
negativas(alunos);

function positivas(alunos) {
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].grade > 10) {
            var nome = alunos[i].name;
            var nota = alunos[i].grade;
            console.log("O aluno " + nome + " teve positiva de " + nota);
        }
    }
}


