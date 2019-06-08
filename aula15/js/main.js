//04
//console.log( 'JS no Browser: main.js externo');
//var name = 'thanakin';

//05 this: referencia ao objeto principal
(function(){
    var myObject ={
        myPropert: 1,
        init: function init(){
            return this; //return this.myPropert; //1
        }
    };
    console.log( myObject.init() );
})();

//16:00