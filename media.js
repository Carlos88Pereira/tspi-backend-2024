


function mediaCurso() {
    var grades = [];
    var nota1 = { disci: "portugues", nota: 16 };
    var nota2 = { disci: "IntrProgramacao", nota: 14 };
    var nota3 = { disci: "DesignHipermedia", nota: 16 };
    var nota4 = { disci: "Matematica", nota: 16 };
    var nota5 = { disci: "SisOperativosRedes", nota: 17 };
    grades.push(nota1, nota2, nota3, nota4, nota5);
    return grades;
}
var grades = mediaCurso();
for (var i = 0; i < grades.length; i++) { 
    console.log("O Carlos teve " + grades[i].nota + " Na disciplina de " + grades[i].disci); }

function mediaGrades(grades){
    count = grades.length;
    soma = 0;
    for (var i= 0; i < grades.length; i++){
        soma += grades[i].nota;
        }
        var media = soma / count
        return media;
}
console.log("A média de curso é de " + mediaGrades(grades))



