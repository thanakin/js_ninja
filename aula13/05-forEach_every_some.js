/**
 * 
 * 5 forEach, every, some
 */
//forEach
var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
var sum = 0;
console.log( 'arr:', arr );
arr.forEach(function( item, index, array ){ //passar SOMENTE paramentros que for utilizar
    console.log( item, index, array );
    sum += item;
});
console.log( 'total de sum: ', sum );
//forEach
console.log( "\n \n");
//every
var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
var every = arr.every(function( item ){ //verifica se todos os itens sao true
    console.log( item );
    return item < 5;
});
console.log( "\narr.every(): ", every );
//every
console.log( "\n \n");
//some
var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
var some = arr.some(function( item ){ //verifica se ao menos um item é true
    return item % 2 === 0;
});
console.log( "\narr.some(): ", some );
//some