/**
 * Escopo de Funções
 */

function myFunction(){
    function sum(){
        return 1 + 2;
    }

    return sum();
}

console.log( myFunction() ); //3


function myFunction2(){
    function sum(){
        return number1 + number2;
    }

    var number1 = 1;
    var number2 =2;
    return sum();
}

console.log( myFunction2() ); //3



// HOISTING
function myFunction3(){
    var number1 = 1;
    var number2 =2;
    return sum();

    function sum(){
        return number1 + number2;
    }
}

console.log( myFunction3() ); //3