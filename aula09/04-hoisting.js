/**
 * HOISTING = 'içamento'
 */

function myFunction(){
    var number1 = 1;
    var number2 =2;
    return sum();

    var sum = function sum(){
        return number1 + number2;
    }
}

console.log( myFunction() ); //undefined

/* 
funções literais estão disponveis em todo codigo
função atribuida a variavel, só estara disponivel a partir da atribuição
*/

function myFunction2(){
    console.log( 'Antes de criar', number1);
    var number1 = 10;
    console.log( 'Depois de criar', number1);
}

console.log( myFunction2() ); //undefined




function myFunction3(){
    console.log( number1);
    var number1 = 50;
    console.log( number1);
}

console.log( myFunction3() ); //undefined //50
