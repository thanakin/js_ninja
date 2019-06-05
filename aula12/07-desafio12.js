(function(){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo de valor para cada propriedade.
    */
    var person = {
        name: 'Thanakin',
        lastname: 'Skywalker',
        age: 12
    }
    console.log( 'Propriedades de "person":', person );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( '\nImprimindo propriedades do objeto, como array:', Object.keys(person) );

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];
    console.log( '\nCriando books:', books );

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books = [
        { name: 'Livro 1', pages: 100 },
        { name: 'Livro 2', pages: 200 }, 
        { name: 'Livro 3', pages: 300 }
        ];
    console.log( '\nLista de livros:', books );
    //var books2 = books;

    /*
    Mostre no console todos os livros.
    */
    for( var prop in books ){
        console.log( Object.keys(books), ':' ); ////////// VERIFICAR
    } 

    /*
    Remova o último livro, e mostre-o no console.
    */
   console.log( '\nLivro que está sendo removido:', books.pop() );

    
    /*
    Mostre no console os livros restantes.
    */
   console.log( '\nAgora sobraram somente os livros:', books );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    //console.log( '\nLivros em formato string:', JSON.stringify( books ) );
    var str = JSON.stringify( books );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log( '\nLivros em formato string:', str );

    /*
    Converta os livros novamente para objeto.
    */
    console.log( '\nAgora os livros são objetos novamente:', JSON.parse( str ) );

    /*
    Mostre no console todas as propriedades e valores de todos os livros, no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    /*for ( var algo in books2 ){
        console.log( books2,':', books2 );
    }*/

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do seu nome. 
    Adicione seu nome completo no array.
    */
    var myName =[ 't', 'h', 'a', 'n', 'a', 'k', 'i', 'n', ];
    console.log( '\nMeu nome é:', myName );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
   console.log( '\nMeu nome é:', myName.join( '' ) );


    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
   console.log( '\nMeu nome invertido é:', myName.reverse() );

    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
   console.log( '\nAgora em ordem alfabética:', myName.sort() );
})();