/**
 * 5 Objeto String
 *  .length 
 * 
 * .chartAt(index)
 * 
 * .concat(string1, string2, ...) 
 * 
 * .indexOf(string)
 * 
 * .lastINdexOf(string)
 * 
 * .replace(string, newString)
 * 
 * .slice(start [end])
 * 
 * .split([separador], [limit])
 */

(function(){

    'use strict';
    console.log( 'Thanakin'.length);
    console.log( '\n' );
    console.log( 'Thanakin'.charAt(0)); // retorna o tamanho da string
    console.log( '\n' );
    console.log( 'Thanakin'[0]); //retorna a letra no indice informado
    console.log( '\n' );
    var nome = 'Thanakin';  
    console.log( nome.concat(' Skywalker') ); //concatena strings, mas sem alterar a inicial
    console.log( '\n' );    
    console.log( nome.indexOf( 'k' ) ); // retorna posição da letra dentro da string e -1 se não existir
    console.log( '\n' );    
    console.log( nome.lastIndexOf( 'k' ) ); // igual o anterir, mas iniciando do final da string
    console.log( '\n' );    
    console.log( nome.replace( 'a', '4' ) ); // substitui trecho da string por outro trecho
    console.log( '\n' );    
    console.log( nome.slice( (2) ) ); // corta parte da string, retornando-a em uma string secundaria
    console.log( '\n' );    
    console.log( nome.slice( 2, 5 ) ); // corta parte da string, retornando-a em uma string secundaria
    console.log( '\n' );    
    console.log( nome.split( 'n' ) ); // corta a instring conforme parametro informado
    var nome2 = nome.split( 'n' );
    console.log( '\n' );    
    console.log( nome2.join( 'n' ) ); 
    console.log( '\n' );    
    var nome3 = nome.split('n').join('z');
    console.log( nome3 ); 
})();