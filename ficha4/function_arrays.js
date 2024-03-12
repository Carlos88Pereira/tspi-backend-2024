/*var array = [];

array.push("Hello World");
array.push("1,2,3");
console.log(array);*/
var array = [];

array.push(function(){
    console.log("Hello 1")
});

array.push(function(){
    console.log("Hello 2")
});
array.push(function(){
    console.log("Hello 3")
});
for (var i = 0; i < array.length; i++)
    console.log(array)


