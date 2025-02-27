﻿/*
    # Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.

The city provides its citizens with a Walk Generating App on their phones --
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).

You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes
(you don't want to be early or late!) and will, of course, return you to your starting point.
Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).

ARRAYS, FUNDAMENTALS
*/

/*
    La soluciones más "votadas"
    //1- ooflorent, user3769065, Raman_Nerad, yangliyi, DbImOK85, anryyett, AndrewSushyi, b.volotovskyy, skyweebb, UserID (+ 187)
    // https://www.codewars.com/kata/reviews/54da539c98b8a2ad7600022a/groups/54db48f003e88a647c0003e9
    function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
    }

    //2- pox, rramesh, Gtufc, d310jvu, ronnyere, ooneill, liukaixin, L whisper, wang shuang, qinl (+ 49)
    // https://www.codewars.com/kata/reviews/54da539c98b8a2ad7600022a/groups/550303b534137e37d4001575
    function isValidWalk(walk) {
        function count(val) {
            return walk.filter(function(a){return a==val;}).length;
        }
        return walk.length==10 && count('n')==count('s') && count('w')==count('e');
    }

    //3- mersocarlin, VladaZh, horchaniwissem, nekzito, alexdodevski, maceA, RomanLeo, stella6319618, koichi-sann, cezaryskura (+ 64)
    // https://www.codewars.com/kata/reviews/54da539c98b8a2ad7600022a/groups/55bf95d52dfe76bcfc000027
    function isValidWalk(walk) {
        const north = walk.filter(item => { return item === "n" }).length;
        const south = walk.filter(item => { return item === "s" }).length;
        const east = walk.filter(item => { return item === "e" }).length;
        const west = walk.filter(item => { return item === "w" }).length;

        return walk.length === 10 && north === south && east === west;
    }

    // Este no está entre los primeros, pero funciona.
    // En respuesta al 3-
    const isValidWalkuser8722283 = walk => {
        if (walk.length !== 10) return false;

        let directions = {
            north: 0,
            west: 0,
        };

        for (let step of walk) {
            switch (step) {
                case 'n':
                    directions.north++;
                    break;
                case 's':
                    directions.north--;
                    break;
                case 'w':
                    directions.west++;
                    break;
                case 'e':
                    directions.west--;
                    break;
            }
        }

        // Aquí todas deben dar cero (hubiera o no originalmente)
        return directions.north === directions.west;
    };

    //5- ZozoFouchtra, SterlingChin, minhdongsss
    // https://www.codewars.com/kata/reviews/54da539c98b8a2ad7600022a/groups/54db955703e88af3ba000b70
    function isValidWalk(walk) {
        return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
    }

    // Harsesis en respuesta al 5-
    function isValidWalk(walk) {
        const WALK_LENGTH = 10;
        return walk.length == WALK_LENGTH && !walk.reduce( (w,step) => w + {"n":-1,"s":1,"e":WALK_LENGTH,"w":-WALK_LENGTH}[step], 0)
    }
*/


/**
 * Indicar aquí la función a usar dentro de strictEqual
 * @see compararArrays
 */
const laFuncion = isValidWalk_Harsesis; //isValidWalk;

function isValidWalk_Harsesis(walk) {
    const WALK_LENGTH = 10;
    return walk.length == WALK_LENGTH && !walk.reduce( (w,step) => w + {"n":-1,"s":1,"e":WALK_LENGTH,"w":-WALK_LENGTH}[step], 0)
}

const isValidWalk_user8722283 = walk => {
    if (walk.length != 10) return false;

    let directions = {
        north: 0,
        west: 0,
    };

    for (let step of walk) {
        switch (step) {
            case 'n':
                directions.north++;
                break;
            case 's':
                directions.north--;
                break;
            case 'w':
                directions.west++;
                break;
            case 'e':
                directions.west--;
                break;
        }
    }

    // Aquí todas deben dar cero (hubiera o no originalmente)
    return directions.north == directions.west;
};

// Para avisar de que no es válido el paseo
function isValidWalkAvisos(walk) {
    //insert brilliant code here

    // El número de letras en el paseo
    const totalDirecciones = walk.length;
    // Comprobar que no sea un array vacío
    if (totalDirecciones == 0) {
        console.log("\tDebes indicar algunas direcciones para el paseo.");
        return false;
    }

    // Que solo contenga, 'n', 's', 'e' o 'w'
    const direcciones = ['n', 's', 'e', 'w'];
    // Las rutas en las direcciones indicadas
    let rutas = [0, 0, 0, 0];

    // Número de direcciones en el paseo
    let total = 0;
    for (let i = 0; i < direcciones.length; i++) {
        const c = direcciones[i];
        let desde = 0;
        while (total < totalDirecciones) {
            let j = walk.indexOf(c, desde);
            if ( j > -1) {
                total++;
                desde = j + 1;
                rutas[i] += 1;
            }
            else {
                break;
            }
        }
    }
    // Si todas las letras no son direcciones, devolver false
    if (total != totalDirecciones) {
        console.log("\tNo todas las direcciones son válidas.");
        return false;
    }

    // Según entiendo, para volver al mismo sitio, la longitud debe ser 10
    if (total != 10) {
        if (total < 10) {
            console.log("\tEl paseo es corto y no te llevará de vuelta.");
        }
        else {
            console.log("\tEl paseo es largo y no te llevará de vuelta.");
        }
        return false;
    }

    // Si llega aquí es que hay 10 direcciones

    // Y que las direcciones sean equivalentes, es decir, si se usan 3 n debe haber 3 s, etc. ???
    // Las rutas n, s
    const rutaNS = rutas[0] + rutas[1];
    // Si hay direcciones norte, sur y no hay la misma cantidad, devolver false
    if (rutaNS > 0 && rutas[0] != rutas[1]) {
        console.log("\tDebes ir el mismo número de veces al norte que al sur.");
        return false;
    }
    // Las rutas e, w
    const rutaEW = rutas[2] + rutas[3];
    // Si hay direcciones este, oeste y no hay la misma cantidad, devolver false
    if (rutaEW > 0 && rutas[2] != rutas[3]) {
        console.log("\tDebes ir el mismo número de veces al este que al oeste.");
        return false;
    }

    return true;
}


// Mi respuesta
function isValidWalk(walk) {
    //insert brilliant code here

    // El número de letras en el paseo
    const totalDirecciones = walk.length;
    // Comprobar que no sea un array vacío
    if (totalDirecciones == 0) return false;

    // Que solo contenga, 'n', 's', 'e' o 'w'
    const direcciones = ['n', 's', 'e', 'w'];
    // Las rutas en las direcciones indicadas
    let rutas = [0, 0, 0, 0];

    // Número de direcciones en el paseo
    let total = 0;
    for (let i = 0; i < direcciones.length; i++) {
        const c = direcciones[i];
        let desde = 0;
        while (total < totalDirecciones) {
            let j = walk.indexOf(c, desde);
            if ( j > -1) {
                total++;
                desde = j + 1;
                rutas[i] += 1;
            }
            else {
                break;
            }
        }
    }
    // Si todas las letras no son direcciones, devolver false
    if (total != totalDirecciones) return false;

    // Según entiendo, para volver al mismo sitio, la longitud debe ser 10
    if (total != 10) return false;

    // Si llega aquí es que hay 10 direcciones

    // Y que las direcciones sean equivalentes, es decir, si se usan 3 n debe haber 3 s, etc. ???
    // Las rutas n, s
    const rutaNS = rutas[0] + rutas[1];
    // Si hay direcciones norte, sur y no hay la misma cantidad, devolver false
    if (rutaNS > 0 && rutas[0] != rutas[1]) {
        return false;
    }
    // Las rutas e, w
    const rutaEW = rutas[2] + rutas[3];
    // Si hay direcciones este, oeste y no hay la misma cantidad, devolver false
    if (rutaEW > 0 && rutas[2] != rutas[3]) {
        return false;
    }

    return true;
}

/**
 * Para comprobar si el resultado de la función es válido.
 *
 * @param {*} valor El valor a comprobar.
 * @param {*} resOK El resultado que debe dar.
 * @see laFuncion Para asignar la función a usar.
 */
function compararArrays(valor, resOK) {
    console.log(valor + " = " + resOK);

    let res = laFuncion(valor);
    if (res.toString() != resOK.toString()) {
        console.log("\tNo es correcto. El resultado calculado es " + res + " debería ser " + resOK);
    }
    else {
        console.log("\tCorrecto!");
    }
}

// Pruebas
compararArrays(['n','s','n','s','n','s','n','s','n','s'], true);
compararArrays(['w','e','w','e','w','e','w','e','w','e','w','e'], false);
compararArrays(['w'], false);
compararArrays(['n','n','n','s','n','s','n','s','n','s'], false);

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});
*/