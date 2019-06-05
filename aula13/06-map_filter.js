/**
 * 6 map e filter
 * 
 */

var arr = [ 1, 2, 3, 4, 5 ];
console.log( 'arr:', arr );

var map = arr.map(function( item, index, array ){
    return item + 2; // "cria" novo array com base no resultado da função
});
console.log( '\narr.map:', map );
console.log( '\narr.map:', arr, map );
var newArr = [];
arr.forEach(function(item, index, array){
    newArr.push({ index: index, item: item });
});
console.log( '\nnewArr:', newArr);

//filter
var arr = [ 1, 2, 3, 4, 5 ];
var filter = arr.filter(function( item, index, array ){
    return item > 2; // "cria" novo array com base no resultado da função
});
console.log( '\nfilter:', filter);

//map + filter
var filter = map.filter(function( item ){
    return item > 2; // "cria" novo array com base no resultado da função
});
console.log( '\nfilter:', filter);

console.log( '\nmap + filter: outra opção' );
var arr2 = [ 1, 2, 3, 4, 5 ];
var map2 = arr2.map(function( item ){
    return item * 10; 
}).filter(function( item ){
    return item > 20;
});
console.log( 'filter2:', map2);