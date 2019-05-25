/**
 * 
 * Operador Virgula
 * e
 * Switch
 */

 /*
var a, b =2, c;
function myfunc(){
    var x = 0;
    return ( x += 1, x);
    // return ++x;
}
*/

function myfunc(){
    var a = 1, b =2, c = 3;
    return [ a, b, c ];
}

// SWITCH

function myfunc(){
    switch(x){
        case 1:
            console.log('x é = a 1');
        break;
        case 2:
            console.log('x é = a 2');
        break;
        default:
            console.log('x não é nem 1 nem 2');
    }
}
