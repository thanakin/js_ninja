/**
 * 
 * RETORNO DE FUNÇÕES
 * ARRAY []
 * OBJETOS {}
*/


function myfunction(){

    return 1;
}

myfunction();



function myfunction2(){

    return [1, 2, 3];
}

myfunction2();
[1, 2, 3]

myfunction2()[0];
1

myfunction2()[2];
3

myfunction2()[5];
undefined




function myfunction2(){
    return {
        prop1: 1,
        prop2: 'fernando',
        prop3: function(){
            return 'prop3';
        }
    };
}

myfunction2();
{ prop1: 1,
  prop2: 'fernando',
  prop3: [Function] }


    myfunction2().prop1
    1

var values = myfunction2();

values
{ prop1: 1,
    prop2: 'fernando',
    prop3: [Function] }

values.prop2;
'fernando'

values.prop3;
[Function]

values.prop3();
'prop3'

