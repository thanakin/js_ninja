/**
 * Herança
 * Object Create
 */

var obj = { x: 1, y: 2 };

var obj2 = Object.create(obj);

console.log( obj2 );

console.log( obj2.prototype );

console.log( obj2.x );

console.log( obj2.y );

obj.x = 51;

console.log( obj2.x );



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

console.log( Object.prototype );

console.log( obj.toString() );


obj.x =1;
//1
obj.y = 2;
//2
console.log( obj2 );

obj2 = {};
console.log( obj2 );

console.log( obj2.x );
console.log( obj2.y );

obj2 = Object.create(obj);

console.log( obj2 );
console.log( obj2.x );
console.log( obj2.y );

console.log( '\n obj3' );

var obj3 = Object.create(obj2);
console.log( obj3 );
console.log( obj3.x );
console.log( obj3.y );

console.log( obj );
obj2.x = 2;

console.log( obj3.x );
console.log( obj );


console.log( '\n todos objetos:' );
console.log( obj );
console.log( obj2 );
console.log( obj3 );

console.log( '\n percorrendo objetos:' );
for( var prop in obj ){
    console.log( prop );
}
for( var prop in obj2 ){
    console.log( prop );
}

console.log( obj.hasOwnProperty('x') );
console.log( obj2.hasOwnProperty('y') );

console.log( '\n ainda percorrendo objetos:' );

for( var prop in obj2 ){
    if( obj2.hasOwnProperty(prop) ){
        console.log( prop );
    }
}
