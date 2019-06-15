/**
 * 4 use strict - o operador delete, objetos e funções
 */

(function(){
    "use strict";
    var myVar = 2;
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log( delete obj.prop3, obj ); // delete apaga propriedades de objetos, retornando true
    //console.log( delete myVar, myVar ); // delete nao apaga variaveis e retorna false
    // no modo 'use strict' retorna erro informando que delete nao é qualificado para remoção
})();
