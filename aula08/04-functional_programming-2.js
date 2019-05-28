/**
 * Função retornando função
*/

function adder(x){
    return function(y){
        return x + y;
    };
}



function adder(x){
    function addOther(y){
        return x + y;
    };
    return addOther;
}

var add2 = adder(2);

add2(3); //5

adder(2)(3); //5

console.log(adder(5)(8)); //13