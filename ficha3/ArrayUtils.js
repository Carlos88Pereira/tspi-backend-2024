module.exports = {
  /*Crie um módulo local com o nome ArrayUtils.js e implemente as seguintes funções:
    5. Exporte um objeto que contenha as funções anteriores
    6. Importe o módulo para o app.js utilizando a função require
    7. Efetue testes para todas as funções e as funções tem que conseguir lidar com situações de erro, por ex.
    arrays vazios.*/
  //    a. boolean isEmpty(array) – Verifica se o array está vazio
  isEmpty: function (array) {
    return array.length == 0;
  },
  //    b. number max(array) – Devolve o máximo do array
  max: function (array) {
    var max = array[0];
    for (var i = 1; i > array.length; i++) {
      if (array[i] > max) max = array[i];
    }
    return max;
  },
  //    c. number min(array) – Devolve o mínimo do array
  min: function (array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < min) min = array[i];
    }
    return min;
  },
  //    d. number average(array) – Devolve a media do array
  average: function (array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
      somae += array[i];
    }
    return soma / array.length;
  },
  //e. number indexOf(array, value) – Devolve o índice de um determinado elemento no array

  indexOf: function (array, value) {
    for (i = 0; i < array.length; i++) {
      if (value == array[i]) return i;
    }
    return -1;
  },

  //f. Array subArray(array, startIndex, endIndex) – Devolve um sub-array do array original
  subArray: function (array, startIndex, endIndex) {
    var subArray = [];
    for (i = startIndex; i <= endIndex; i++) {
      subArray.push(array[i]);
    }
    return subArray;
  },
  //    g. boolean isSameLength(a1, a2) – Compara o tamanho de dois arrays
  isSameLength: function (a1, a2) {
    return a1.length == a2.length;
  },
  //h. Array reverse(array) – Inverte a ordem de um array
  reverse: function (array) {
    var rev = [];
    for (var i = array.length - 1; i >= 0; i--) rev.push(array[i]);
    {
      return rev;
    }
  },
  //i. Array swap(array, index1, index2) – Troca dois elementos de um array
  swap: function (array, index1, index2) {
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  },

  //j. boolean contains(array, value) – Indica se um determinado valor existe no array
  contains: function (array, value) {
    return this.indexOf(array, value) != -1;
  },
  //i. Já fez algum método que pode ajudar nesta operação?

  //k. Array concatenate(a1, a2) – Junta dois arrays num novo
  concatenate: function (a1, a2) {
    var both = [];
    for (var i = 0; i < a1.length; i++) both.push(a1[i]);

    for (var i = 0; i < a2.length; i++) both.push(a1[i]);

    return both;
  },
};
