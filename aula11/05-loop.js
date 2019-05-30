/**
 * Loops / Laços
 * do while
 * 
 * for in
 */

 // do while
var counter = 1;
do {
    console.log( counter++ );
} while( counter < 10 );

var car = {
    brand: 'Volkswagen',
    model: 'Gol',
    year: 2013
}
//console.log( car );

//for in
for( var prop in car ){
    console.log( prop, ':', car[prop] );
}

console.log( 'brand' in car );