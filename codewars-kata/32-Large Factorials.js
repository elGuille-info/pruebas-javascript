/*
    # Large Factorials (4 kyu)

In mathematics, the factorial of integer n is written as n!. 
    It is equal to the product of n and every integer preceding it. 
    For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. 
    For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). 
    For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language.

ALGORITHMS, BIG INTEGERS
*/
function factorial(n) {
    // Add some code

    // Calcularlo multiplicando el número hasta el 2.
    for (let i = n - 1; i > 1; i--)
    {
        //number *= i;
        n = multiplyStrings(n, i);
    }
    return n;

}

function multiplyStrings(a, b) {
    // Primero, calculamos el tamaño de cada número
    let sizeA = a.length;
    let sizeB = b.length;

    // Inicializamos un arreglo para almacenar el resultado
    let result = new Array(sizeA + sizeB);
    for (let i = 0; i < sizeA + sizeB; i++) {
        result[i] = 0;
    }

    // Realizamos la multiplicación de enteros largos
    for (let i = 0; i < sizeA; i++) {
        for (let j = 0; j < sizeB; j++) {
            result[i + j + 1] += parseInt(a[i], 10) * parseInt(b[j], 10);
        }
    }

    // Llevamos a cabo la reducción de acarreo
    for (let i = result.length - 1; i > 0; i--) {
        result[i - 1] += Math.floor(result[i] / 10);
        result[i] %= 10;
    }

    // Convertimos el resultado a una cadena y eliminamos cualquier cero delante
    result = result.join('').replace(/^0+/, '');
    if (result == "") result = "0";

    return result;
}


/**
 * Indicar aquí la función a usar dentro de
 * @see testArrNum
 *
 * Poner arriba el método usado para las pruebas, aunque no es necesario.
 * Lo importante es asignar el valor a 'lafuncion', aunque eso se hace en el código a comprobar.
 */
let laFuncion = factorial;

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El número a evaluar por la función.
 * @param {*} resOK El resultado que debe dar.
 * @param {*} noMostrarLog Si NO se debe mostrar lo que se comprueba.
 * @see laFuncion Para asignar la función a usar.
 */
function comparaResultado(valor, resOK, noMostrarLog) {
    if (!noMostrarLog)
        console.log(valor + " = " + resOK);

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es '" + res + "' debería ser '" + resOK + "'");
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
comparaResultado(1, '1');
comparaResultado(5, '120');
comparaResultado(9, '362880');
comparaResultado(15, '1307674368000');

/*
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(factorial(1), '1', '1!');
        Test.assertEquals(factorial(5), '120', '5!');
        Test.assertEquals(factorial(9), '362880', '9!');
        Test.assertEquals(factorial(15), '1307674368000', '15!');
    });
});
*/