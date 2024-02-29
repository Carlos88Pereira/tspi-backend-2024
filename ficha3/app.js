/*function download(started, updated,completed){
    var count = 0;
    for (i = 0; i < 100; i++){
        count ++;
        if (count < 25); 
        console.log("Download"+count+)
        if (count < 75); 
        console.log("Download almost"+count+)
        else:
    }
}
download(0,50,100)*/
/*
function started() {
  console.log("Started Download");
}

function updated(n) {
  console.log(+n + "% of Download.");
}

function completed() {
  console.log("Download completed");
}

function performDownload(started, updated, completed) {
  started();
  for (i = 0; i <= 100; i++) {
    updated(i);
  }
  completed();
}
performDownload(started, updated, completed);

Crie um módulo local com o nome ArrayUtils.js e implemente as seguintes funções*/

var ArrayUtils = require('./ArrayUtils');
var a1 = [];
var a2 = [2,5,8,33,1,0];
var v = 6;

var e1 = ArrayUtils.isEmpty(a1);
console.log("Array" +a1+", is empty" +e1)

var e2 = ArrayUtils.isEmpty(a2);
console.log("Array" +a2+", is empty" +e2)

var index = ArrayUtils.indexOf(v);
console.log(index)

var sub=ArrayUtils.subArray(x,3,5)
console.log(sub)

var revs = ArrayUtils.reverse(array)

