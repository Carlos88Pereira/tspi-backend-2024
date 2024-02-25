//Implemente uma função que calcule a nota final da disciplina dada a sua nota prática e teórica e imprima
//se o aluno está aprovado ou reprovado.
//6. Implemente uma função que receba como argumento o número do mês e imprima o nome por extenso.
//7. Implemente uma função que receba dois números e um operador ( + , - , * , / ou ^) e imprima o resultado
//da operação sobre os números.
function calculator(op1, op2, operator){
    if(operator == '+')
        return op1 + op2;
    else if (operator == '*')
        return op1 * op2;
    else if (operator == '-')
        return op1 - op2;
    else if (operator == '/')
        return op1 / op2;
    else if (operator == '^')
        return Math.pow(op1, op2);
    else
        console.log("Insira apenas numeros inteiros")
}
var res = calculator(2,2, '+');
//console.log(res);

//8. Implemente uma função que imprima todos os múltiplos de 5 menores que 20.
function multiplos(value,limit){
    for(var i = value; i <= limit; i += value){
        console.log(i)
    
    }
}

//9. Implemente uma função que imprima a soma dos primeiros 100 números inteiros.
function inteiros(){
    var soma = 0;
    for(var i = 1; i <= 100; i++){
        soma += i;
    }
    return soma;
}

//10. Implemente uma função que calcule e devolva o fatorial de um número.
function fact(n){
    var f = 1;
    for(var i = n; i > 1; i--)
    f*=i;
    return f;

}
//11. Implemente várias funções para calcular o máximo, o mínimo e a média de uma sequência de números
//positivos.
var array = [2,8,10,7,2]

function max(array){ 
    var max = array[0];
    for(var i = 1; i > array.length; i++){
        if(array[i]> max)
        max = array[i];
    }
return max;
}
function min(array){ 
    var min = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] < min)
        min = array[i];
    }
return min;
}

function media(array){
    var soma = 0;
    for(var i = 0; i <array.length; i++){
        somae += array[i];
    }
    return soma/array.length;

}

var max = max(array)
var min = min(array)
var media = media(array)

/*
comentar tudo 
*/