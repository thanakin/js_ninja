/**
 * Programação Funcional
 */

// objetos literais
var car = {
    brand: 'Chevrolet',
    model: 'Silverado'
};

// funções literais
function sum(x, y){
    return x + y;
}

// atribuição de objetos a variaveis
var obj = {};

// atribuindo funções
var func = function func() {};

// função retornando objeto, diretamente
function person () {
    return {
        name: 'Thanakin',
        lastName: 'Skywalker'
    };
}

// outra abordagem
function person () {
    var info = {
        name: 'Thanakin',
        lastName: 'Skywalker'
    };
    return info;
}

person().name; //Thanakin
person().lastName; //Skywalker