/**
 * 4. Regex - Parte 1
 * "basicamente, para manipular strings/textos"
 * são tipos primitivos
 * objeto RegExp()
 * 
 *      Flags
 *      g: global
 *      i: ignore case
 * 
 *      Termos
 *      \w: caracecteres alfanumericos e _
 *      \d: numeros (digits)
 * 
 *      Classes da Caracteres/Listas
 *      
 */

(function(){
    
    'use strict';
    var regex = /m/;
    var texto = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de 'O Centauro de Luvas',[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.";
    console.log( texto.match( /18\d\d/g ) ); // retorna null quando nao encontrar texto 
    console.log( texto.match( /de|da/g ) ); // "|" ou logico para busca: pesquisara de ou da
    console.log( texto.match( /[abc]/g ) ); // [abc] limitam os caracteres buscados/listas: pesquisara a ou b ou c
    console.log( '\n', texto.match( /(1875)|(1817)/g ) ); // () agrupamento de caracteres: pesquisara 1875 ou 1817
    console.log( '\nTodos os caracteres de 0 a 9:', texto.match( /[0-9]/g ) ); // buscara de 0 a 9
    // texto.match( /[a-zA-Z0-9]/g ) tudo de a a z, A a z e 0 a 9
    
})();