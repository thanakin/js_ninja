/**
 * IIFE: Immediately-invoked function expression
 * função auto executavel
 */

function sum() {
    return 1 + 2;

}
console.log( sum() ); //3



var sum2 = function(){
    return 2 + 3;
};
console.log( sum2() ); //5




var sum3 = function otherSum(){
    return 3+5;
};
console.log( sum3() ); //8
//console.log( otherSum() ); //undefined


//Função autoexecutavel
(function() {
    console.log('>>', 1 + 2);
})();

(function() {
    console.log('>', 1 + 2, '<');
}());