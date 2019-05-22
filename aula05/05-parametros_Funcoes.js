/**
 * 
 * PARAMETROS DE FUNÇÕES 
 * COMO
 * ARRAYS []
 * OBJETOS {}
*/

var arr = [1, 2, 3];

function myfunction(arg){
    return arg;
}

myfunction(arr);
[ 1, 2, 3 ]

function myfunction2(arg){
    return arg[1];
}

myfunction(arr);
2


myfunction2([1, 5, 7, 8]);
5

myfunction2(['fernando', 1,  true, 34]);
[ 'fernando', 
 1,  
 true, 
 34]


 var obj = {
     propriedade: 'Fernando',
     curso: 'Javascript Ninja',
     ninja: true
 }

 obj
{
    propriedade: 'Fernando',
    curso: 'Javascript Ninja',
    ninja: true }

function myfunction(arg){
    return arg;
    }

myfunction(1);
1

myfunction(obj);
{
    propriedade: 'Fernando',
    curso: 'Javascript Ninja',
    ninja: true }

myfunction(obj).propriedade;
'fernando'

