//var p0 = {firstName:"Pedro", lastName: "Matos"};
//p0.firstName;//para chegar a chave firstName


function Person(firstName,lastName){//classes sao sempre maiusculas
    this.firstName = firstName;
    this.lastName = lastName;
} 
Person.prototype.fullName = function(){
    console.log(this.firstName + " " + this.lastName + " " + this.age)
}
Person.prototype.age = 0;
var p1 = new Person("Pedro", "Matos");
p1.age = 23;
p1.fullName();
console.log(p1.__proto__)

var p2 = new Person("Joana", "Matos");
p2.age = 22;
p2.fullName();
console.log(p2.__proto__)
//tipos primitivos de valor
//var a = 2 == 2; //true
//var b = 3 < 2; //false
//var c = 2 != 4; // true
//tipos de referencia
//var p2 = new Person("Joana", "Matos");
//var p1 = new Person("Joana", "Matos");
//var z = p1 == p2; FALSE a referencia é diferente (p1 e p2)




