(function(){
    'use strict';


    /**
     * construtor REGEXP
     *  .test(string)
     *  .exec(string)
     * 
     */
    var regex = new RegExp('celo');
    console.log(regex);

    console.log(/\d/.test(RegExp));

    var variavel = /\d/g;
    var name = 'celo123';
    console.log(variavel + ' ' + name);
    console.log(variavel.exec(name));
    console.log(variavel.exec(name));
    console.log(variavel.exec(name));
})();