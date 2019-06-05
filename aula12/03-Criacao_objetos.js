/**
 * Criação de objetos
 * 
 * mutaveis
 * manipulados por referencia
 */

var obj = {
    prop1: 'prop1',
    prop2: 'prop2'
}
console.log( obj );

var obj2 = {
    prop1: 'prop1',
    prop2: 'prop2'
}
console.log( obj2 );

obj.prop1 = 'propriedade 1';
console.log( obj );

delete obj.prop1;
console.log( obj );

console.log( obj === obj2 );

objCopy = obj;
console.log( objCopy === obj );

/**
 * Criando Objetos
 *  -literais;
 *  -construtor (new)
 *  -object.create()
 */




//literais;
obj4 = {};

//construtor (new)
var newObj = new Object();

//object.create()
    //var obj = Object.create();

// Object.prototype
// {}

