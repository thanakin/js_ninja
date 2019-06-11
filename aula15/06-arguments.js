/**
 * ARGUMENTS: retorna todos os argumentos passados a função
 */

(function(){

    function myFunction(arg1, arg2){
        return arguments;
    }
    console.log( myFunction(1, 2) );

})();