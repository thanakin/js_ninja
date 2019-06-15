/**
 * 3 . use strict - uso do with e global this === undefined
 */

(function(){
    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    };
    console.log( obj.prop1.prop2.prop3 );
    with( obj.prop1.prop2.prop3 ){
        console.log( prop31, prop32, prop33 );
    }

    console.log( '\n' );

    function Person( name, lastName, age ){
        'use strict';
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    console.log( new Person( 'Thanakin', 'Skywalker', 12 ) );


})();
 