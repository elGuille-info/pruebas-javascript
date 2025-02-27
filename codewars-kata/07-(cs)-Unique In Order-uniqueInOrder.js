﻿/*
  # Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items
without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

/*
  // Otras soluciones

  //1- ooflorent, AlexanderDerGrosse, pachareal, xsm2016, FoxJS, michaeltvincent, Jonathanv3232, Aquavis, SergiyGV, a.swarnkar@gmail.com (+ 170)
  function uniqueInOrder(it) {
    var result = []
    var last

    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }

    return result
  }

  //2- sensone, Pamonyango, trizah, Melioo, amber-tamara, AsliUral, ThisIsMeka, umizrah, Bikcodeh, Johjoh-6 (+ 20)
  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
  }

  //3- Freywar, setkyar, jokerdoom777, marcusg999, Ch@mp4789, dakshshah, polluxCast0r, denis_maxim0v, the7, sillyseeli (+ 61)
  var uniqueInOrder = function (iterable)
  {
	  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
  }
*/

//var uniqueInOrder=function(iterable){
function uniqueInOrder(iterable){
    //your code here - remember iterable can be a string or an array

    //return A.find(item => A.filter(el => el == item).length % 2)
    //return iterable.find(item => iterable.filter(it2 => it2 == item));

    //return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));

    // Array con los números y/o letras hallados
    let unicos = [];
    let digitoAnt = "";

    for (let i = 0; i < iterable.length; i++) {
      // El carácter que estamos analizando
      let digito = iterable[i];
      // Si no es igual al hallado anteriormente, añadirlo a la colección
      if (digito != digitoAnt) {
        unicos.push(digito);
        digitoAnt = digito;
        continue;
      }
    }

    return unicos;
}


function deepEqual(iterable, resOK ) {
    console.log(iterable + " = " + resOK);

    let res = uniqueInOrder(iterable);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
}

// Para probar
deepEqual('AAAABBBCCDAABBB', ['A','B','C','D','A','B']);
deepEqual('ABBCcAD', ['A', 'B', 'C', 'c', 'A', 'D']);
deepEqual([1,2,2,3,3], [1,2,3]);
deepEqual([1], [1]);

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});
*/

/*
En C# https://www.codewars.com/kata/reviews/59b1fff4837809ac630001f2/groups/638e77731d08c00001192b75
*/