/**
 * TYPEOF
 * testando tipos de valores
 */

typeof undefined; // 'undefined'
typeof function() {}; // 'function'
typeof true; // 'boolean'
typeof 10; // 'number'
typeof 'JS NInja'; // 'string'
typeof NaN; // 'number'


/* qualquer objeto que não seja function, sera  'object' */
typeof {}; // 'object'
typeof []; // 'object'
typeof null; // 'object' // erro na implementação: typeof null; deveria ser null

/******* usar typeof para tipos primitivos *******/

function substract(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 - num2;
    }
    return 'Informe 2 numeros';
}

console.log(substract(10, 2)); //8
console.log(substract('JS', 2)); //NaN
console.log(substract({}, [])); //Nan




function substract(num1, num2){
    if( num1 === null || num2 === null){
        return 'Não informe valores nulos';
    }
    return num1 - num2;
}

console.log( substract( 10,5 )); //5
console.log( substract( null,5 )); //Não informe valores nulos
console.log( substract( 10, null )); //Não informe valores nulos