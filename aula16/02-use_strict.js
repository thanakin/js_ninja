/**
 * 2 use strict - Criação de variáveis sem o var
 */

(function(){
    'use strict'; // não permite a declaração de variaveis sem o "var"
    var myName = 'Thanakin';
    console.log(myName);
})();
console.log(myName); //erro de referencia, pois a variavel(myName) foi criada em escopo local