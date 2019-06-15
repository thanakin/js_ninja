/**
 * 6 Objeto String
 *  
 * .substring(start [end])
 * 
 * .toLowerCase()
 */

(function(){

    'use strict';
    var nome = 'Thanakin';
    console.log( '\n' );
    console.log( nome.substring( 1, 4 )); // "corta" parte da string, conforme parametros
    console.log( '\n' );
    console.log( nome.substring( 8, 3 )); // 
    console.log( '\n' );
    console.log( nome.toLowerCase()); // todas as letras como minusculas
    console.log( '\n' );
    console.log( nome.toUpperCase()); // todas as letras como maiusculas
    console.log( '\n' );
    console.log( nome.charAt(0).toUpperCase()); 
    console.log( '\n' );
    var newNome = nome.charAt(0).toUpperCase() + nome.slice(1);
    console.log( 'Nome com a primeira letra maiuscula: '+ newNome ); 
})();