/**
 * Wrapper Objects
 * valores primitivos NAO são objetos
 * 
 * objetos tem propriedades e metodos, SEMPRE!
 */

var name = 'Thanakin'; //tipo primitivo
name.length; //8
name; //'Thanakin'


/**
 * CONSTRUTORES: Criam novos objetos
 */

// criando novos objetos, com "new"
 var name = new String('Thanakin');
 var age = new Number(12);
 var ninja = new Boolean(false);

 var name = new String('Thanakin'); // objeto
 name; //[String: 'Thanakin']

name.valueOf(); //'Thanakin' retorna o valor real da variavel

// convertendo tipos, sem o "new"
var name = String('Thanakin');
var age = Number(12);
var ninja = Boolean(false);

var myVar = string(10);
myVar; // '10' //converte 10 para '10'

var myVar = number('152');
myVar; // 152 //converte '152' para 152

