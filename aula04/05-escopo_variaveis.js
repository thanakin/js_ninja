/**
 *      ESCOPO DE VARIAVEIS
 * 
 *      GLOBAL: variaveis declaradas fora de function
 * 
 *      LOCAL: variaveis declaradas dentro de function
 * 
 *      SEMPRE criar variaveis com var
 * 
 *      garbage colector "limpa" variaveis alocadas e não utilizadas
 */

myvar
1
> function myfunction() {
    return myvar;
    }
undefined
> my
myfunction  myvar

> myfunction();
1




function otherFunction(){
    var otherVar = true;
    return otherVar;
    }
undefined
> otherFunction();
true
> otherVar;
ReferenceError: otherVar is not defined
>


newVar;
ReferenceError: newVar is not defined

function newFunction() {
    newVar = 'variavelGlobal';
    return newVar;
}
> newVar;
'variavelGlobal'
>
 /*
  * 
  * criar variavel sem VAR, torna ela global mesmo dentro da function, após invocação desta 
  * sem VAR, garbage colector não consegue "limpar" variaveis nao utilizadas
  * 
  */

/*
*            Argunmentos de função: tambem são variaveis locais
*/
function outraFuncao(a, b, c){
    return a;
}


> outraFuncao(1);
1
> outraFuncao(1, 2);
1
> a
ReferenceError: a is not defined
> b
ReferenceError: b is not defined