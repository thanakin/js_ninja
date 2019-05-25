/**
 * Push
 * 
 * FOR
 */

var arr = [ 'Thanakin', 727, null, true, {} ];
var qtd = arr.length;
arr.push( {carro: 'BMW'} );
arr.push( function soma(x, y){ return x + y; } );
arr[6](1,2); //3

for(var num = 0; num < 20; num++){
    console.log(num);
}