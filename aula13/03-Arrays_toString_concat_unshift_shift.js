/**
 * 
 * 3 Arrays - toString, concat, unshift e shift
 * 
 */

var arr = [ 1, 2, 3 ];
console.log( arr[0] );
console.log( arr.length ); //tamanho do array

arr.push(4); // adiciona(modifica) um novo item
console.log( 'arr.push(4):', arr );

console.log( '\narr.toString():', arr.toString() ); //exibe conteudo do array como string, não converte
console.log( "arr.join( '' ):", arr.join( '' ) );

console.log( "\narr.join( '-' ):", arr.join( '-' ) );
console.log( "arr.join( ' - ' ):", arr.join( ' - ' ) );

console.log( "\narr.concat(5):", arr.concat(5) ); // Concatena "provisoriamente"(não altera array principal) item no array
console.log( 'arr:', arr );

console.log( "\narr.concat([5, 6, 7, 8, 9]):", arr.concat( [5, 6, 7, 8, 9] ) ); // não qebra arrays multidimensionais
console.log( "arr.concat([5, 6, 7, 8, 9], [10, 11, 12, 13]):", arr.concat( [5, 6, 7, 8, 9], [10, 11, 12, 13] ) );

console.log( '\narr.unshift( 0 ):', arr.unshift( 0 ) ); // adiciona(modifica) um novo item ao inicio do array
console.log( 'arr:', arr );

console.log( '\narr.unshift( -1 ):', arr.unshift( -1 ) );
console.log( 'arr:', arr );

console.log( '\narr.shift():', arr.shift() ); // remove(modifica) item ao inicio do array
console.log( 'arr:', arr );