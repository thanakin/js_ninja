/**
 * 5 indexOf(), lastIndexOf() e isArray()
 */

var arr = [ 1, 2, 3, 4, 5 ];
console.log( arr.indexOf( 3 ) ); // retorna indice do elemento pesquisado: 2 é o indice do elemento 3
//2
console.log( arr.indexOf( 6 ) ); 
// retorna "-1" caso o elemento não esteja no array

var arr2 = [ 't', 'h', 'a', 'n', 'a', 'k', 'i', 'n' ];
console.log( arr2.indexOf( 'n' ) );  //3
console.log( arr2.indexOf( 'n',  4) );  //7  //pesquisa "n" a partir do indice 4
console.log( arr2.indexOf( 'n' ) === 3 );  //true
console.log( arr2.indexOf( 'n' ) > -1 );  //se for maior que '-1', existe no array

console.log( '\npulando uma linha'  );
console.log( arr2.indexOf( 'n' ) );  //3
console.log( arr2.lastIndexOf( 'n' ) );  //7  //pesquisa da mesma forma que indexOf, porem de tras para frente
console.log( arr2.lastIndexOf( 'n',  6) );  //7  

var arr3 = [ 't', 'h', 'a', 'n', 'a', 'k', 'i', 'n' ];
console.log( Array.isArray(arr3) );
console.log( Array.isArray( [] ) );