//5. Implemente uma função que calcule a nota final da disciplina dada a sua nota prática e teórica e imprima
//se o aluno está aprovado ou reprovado.
    //implementação
function calculateGrade(gradeB, gradeT){
        var mean = gradeT * 0.4 + gradeB * 0.6;
        console.log("Your Average os: " + mean)
    if(mean < 9.5) 
        console.log("You failed!")
    else
        console.log("You Passed!") 
}
//INvOCAÇÃO DA FUNCÇÃO 
calculateGrade(11,16);
calculateGrade(12,16);
calculateGrade(15,14);
calculateGrade(12,16);
calculateGrade(12,16);

// print = console.log("Hello World")

//6. Implemente uma função que receba como argumento o número do mês e imprima o nome por extenso.
function getMonth(monthName){
    switch (monthName){
        case 1
            console.log("Janeiro");
            break;
        case 2
            console.log("Fev");
            break;
        case 3
            console.log("Março");
            break;
        case 4
            console.log("abril");
            break;
        case 5
            console.log("Janeiro");
            break;
        case 6
            console.log("Janeiro");
            break;
        case 7
            console.log("Janeiro");
            break;
            case 1
            console.log("Janeiro");
            break;
            
        default:
            console.log("Valor Inválido!");
            break;


    }



}
    






//7. Implemente uma função que receba dois números e um operador ( + , - , * , / ou ^) e imprima o resultado
//da operação sobre os números.
//8. Implemente uma função que imprima todos os múltiplos de 5 menores que 20.
//9. Implemente uma função que imprima a soma dos primeiros 100 números inteiros.
//10. Implemente uma função que calcule e devolva o fatorial de um número.
//11. Implemente várias funções para calcular o máximo, o mínimo e a média de uma sequência de números
//positivos.