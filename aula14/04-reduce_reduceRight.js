/**
 * 4 reduce() e reduceRight()
 */

var arr = [ 1, 2, 3, 4, 5 ];
var reduce = arr.reduce(function(acumulado, atual, index, array){
    return acumulado + atual; // reduce sempre passa por todos os itens do array, verificando a expressão
}, 0);
console.log( reduce );

var arr = [ 't', 'h', 'a', 'n', 'a', 'k', 'i', 'n' ];
var reduce = arr.reduce(function(acumulado, atual, index, array){
    return acumulado + atual;
});
console.log( reduce );


var arr = [ 't', 'h', 'a', 'n', 'a', 'k', 'i', 'n' ];
var reduce = arr.reduceRight(function(acumulado, atual, index, array){
    return acumulado + atual; // mesmo efeito do recude, porem da direita para esquerda
});
console.log( reduce );