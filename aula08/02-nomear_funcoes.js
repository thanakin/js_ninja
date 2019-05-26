/**
 * importancia de nomear funcções
 *  
 */

//Errado
var func1 = function(){ 
    return 'oi';
};

func1(); // 'oi'
func1.name; // ''


//Correto
var func2 = function func2(){ 
    return 'oi';
};

func2(); // 'oi'
func2.name; // 'func2'
