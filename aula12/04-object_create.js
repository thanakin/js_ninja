/**
 * oject create
 */

var obj = { x: 1, y: 2 };

var obj2 = Object.create(obj);

console.log( obj2 );
console.log( obj2.prototype );

console.log( obj2.x );
console.log( obj2.y );

console.log( obj.x =2 );
console.log( obj2.x );

obj2.x = 'lala';
console.log( obj2.x );
console.log( obj.x );

obj = Object.create( {} );
console.log( obj );

console.log( obj.toString() );