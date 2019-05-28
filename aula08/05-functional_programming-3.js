/**
* Funções
* passando objeto por parametro
* passando função por parametro
*/

var car = {
    color: 'yellow'
};

function getCarColor(mycar){
    return mycar.color;
}

getCarColor(car); //yellow




function showOtherFunction(func){
    return func();
}

showOtherFunction(function(){
    return 'Functional JS Ninja!';
}); //Functional JS Ninja!

