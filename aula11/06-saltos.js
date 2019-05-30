/**
 * Saltos
 * ex.: return, brek, continue
 */

function myFunction(){
    var number = 10;
    if( number === 10 ) {
        return true; // ao executar este return, encerra a função
    }
    return false;
}
console.log( myFunction() );


var number = 727;
switch( number ) {
    case 707:
        console.log( '707');
        break;
    case 727:
        console.log( '727');
        break;
    default:
        console.log( 'Nenhuma opçao valida');
}

for( var i = 0; i < 10; i++ ){
    if( i === 5) break; //break encerra o laço
    console.log( i );
}

console.log( '\n' );

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for( var i = 0; i < arr.length; i++ ){
    if( i === 5) break;
    console.log( i );
}

console.log( '\n' );

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for( var i = 0; i < arr.length; i++ ){
    if( i === 5) continue; //pula a instrução seguinte e volta pro inicio do laço
    console.log( i );
}

console.log( '\n' );

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for( var i = 0; i < arr.length; i++ ){
    if( i % 2 === 0) continue; //pula a instrução seguinte e volta pro inicio do laço
    console.log( i );
}