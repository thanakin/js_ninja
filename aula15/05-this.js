/**
 *  THIS "este"
 */

 //this em metodos de objetos
(function(){
    var myObject = {
        myPropert: 1,
        init: function init() {
            return this.myPropert;
        }
    };
    console.log( myObject.init() );


    //this em funções, podendo ter 2 valores:
    // 1- como referencia ao objeto global
    // window é o bjeto global, no browser
    function myFunction(){
        return this;
        }
    console.log( myFunction() ); 
    /* Object [global] { ...
        qunado uma função não estiver dentro de um objeto ou que não seja metodo de uma objeto,
        this vai apontar para o objeto global/window, se for no browser
    */

    console.log( '\npulando uma linha' );

    // 2- como referencia ao objeto instanciado
    var newObject = new Object();
    console.log( 'newObject', newObject, Object() );


    function MyConstructor() {
        this.prop1 = 'prop1',
        this.prop2 = 'prop2'
    }
    console.log( 'MyConstructor:', new MyConstructor() );

    var constructor = new MyConstructor();
    console.log( 'constructor:', constructor );

})();