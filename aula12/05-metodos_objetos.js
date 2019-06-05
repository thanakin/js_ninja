/**
 * Criando Objetos
 * object.keys(obj)
 */

var obj = { x: 1, y: 2 };
var obj2 = Object.create(obj);
obj2.x = 2;
var obj3 = Object.create(obj2);

console.log( obj );
console.log( obj2 );
console.log( obj3 );

console.log( Object.keys(obj) ); // retorna um array com propriedades do objeto
console.log( Object.keys(obj).length ); // retorna quantidade de 


console.log( obj.isPrototypeOf(obj2) ); //verifica se objé prototipo do obj2
//true
console.log( obj.isPrototypeOf(obj3) );
//true
console.log( obj2.isPrototypeOf(obj3) );
//true
console.log( obj2.isPrototypeOf(obj) );
//false

console.log( 'stringify objetos' );
console.log( 'obj: ', obj );
console.log( JSON.stringify(obj) ); //transforma objetos em json


var str = JSON.stringify(obj);
console.log( 'str: ', str );

console.log( 'str: ', JSON.parse(str) ); //transforma json em objetos



console.log( 'Arrays' );

var arr = [];
arr[0] = 10;
arr[1] = 5;
arr[2] = 'oito';
arr[12] = 'doze';
console.log( arr );

arr.push('treze');
console.log( arr );

arr.pop();
console.log( arr );

var arr = [];
arr.push( 'arroz' );
arr.push( 'feijao' );
arr.push( 'macarrao' );
console.log( arr );

var last = arr.pop();
console.log( arr );
console.log( last );
console.log( arr.length );