/**
 * 4 slice e splice
 */

var arr = [ 1, 2, 3, 4, 5 ];
console.log( 'arr.slice(1):', arr.slice(1) ); //retorna partes do array(não altera), iniciando no indice até o ultimo elemento desejado
console.log( 'arr:', arr );
//console.log( arr.slice() ); //retorna do o array
console.log( '\narr.slice(0):', arr.slice(0) ); // retorna todos os itens a partir do indice 0
console.log( '\narr.slice(0, 2):', arr.slice(0, 2) ); //ultimo indice informado nao retorno, somente o penultimo
console.log( '\narr.slice(1, 4):', arr.slice(1, 4) );
console.log( '\narr.slice(-2)', arr.slice(-2) ); //pega do final do array, "-2" itens
console.log( '\narr.slice(2, -2)', arr.slice(2, -2) );
console.log( '\narr.slice(2, 1)', arr.slice(2, 1) );

console.log( '\narr.splice(3)', arr.splice(3) ); //modifica array principal, elimiando do paramentro(3) em diante
console.log( 'arr:', arr );
console.log( '\narr.push(4, 5, 6, 7)', arr.push(4, 5, 6, 7) );
console.log( 'arr:', arr );
console.log( '\narr.splice(1, 3)', arr.splice(1, 3) ); //a partir do indice 1, remove 3 itens
console.log( 'arr:', arr );

console.log( "\narr.splice(1, 0, 'a')", arr.splice(1, 0, 'a') ); //a partir do indice 1, remover 0 itens e adicionar 'a'
console.log( 'arr:', arr );
console.log( "\narr.splice(2, 0, 'b', 'c', 'd')", arr.splice(2, 0, 'b', 'c', 'd') );
console.log( 'arr:', arr );
console.log( "\narr.splice(1, 4, 2, 3, 4)", arr.splice(1, 4, 2, 3, 4) ); //a partir do indice 1, remover 4 itens e adicionar 2, 3 e 4
console.log( 'arr:', arr );