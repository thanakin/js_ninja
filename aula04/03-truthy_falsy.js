1 === 'b'
false

var teste;
if( 1 ) { teste = true; } else { teste = false; }
> teste
true

if( 0 ) { teste = true; } else { teste = false; }
> teste
false

// FALSY
//valores que retornam falsy
undefined
null
NaN
0
-0
'' ou ""
false

/* string vazia é false */
if( '' ) { teste = true; } else { teste = false; }
false
> teste
false
/* string com valor é true */
if( '0' ) { teste = true; } else { teste = false; }
true
> teste
true

if( undefined ) { teste = true; } else { teste = false; }
false
> teste
false

if( null ) { teste = true; } else { teste = false; }
false
> teste
false

if( {} ) { teste = true; } else { teste = false; }
true
> teste
true

if( [] ) { teste = true; } else { teste = false; }
true
> teste
true

if( NaN ) { teste = true; } else { teste = false; }
false
> teste
false

if( -0 ) { teste = true; } else { teste = false; }
false
> teste
false

if( false ) { teste = true; } else { teste = false; }
false
> teste
false

if( true ) { teste = true; } else { teste = false; }
true
> teste
true

// Descobrir a representação booleana: !!
!true
> false

!1
> false

!false
> true

!!NaN
> false

!!false
> false

!!true
> true


/** Pode-se verificar com if ou !! **/