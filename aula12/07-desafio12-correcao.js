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
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( '\nImprimindo propriedades do objeto, como array:');
    console.log( Object.keys(person) );

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];
    console.log( '\nCriando books:' );

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push( { name: 'Livro 1', pages: 100 } );
    books.push( { name: 'Livro 2', pages: 200 } );
    books.push( { name: 'Livro 3', pages: 300 } );
    console.log( '\nLista de livros:' );
    //var books2 = books;

    /*
    Mostre no console todos os livros.
    */
    console.log( books );

    /*
    Remova o último livro, e mostre-o no console.
    */
   console.log( '\nLivro que está sendo removido:' );
   var lastBook = books.pop();
   console.log( lastBook ); //console.log( books.pop() );

    
    /*
    Mostre no console os livros restantes.
    */
   console.log( '\nAgora sobraram somente os livros:' );
   console.log( books );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    //console.log( '\nLivros em formato string:', JSON.stringify( books ) );
    var books = JSON.stringify( books );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log( '\nLivros em formato string:' );
    console.log( books );

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse( books );
    console.log( '\nAgora os livros são objetos novamente:' );
    

    /*
    Mostre no console todas as propriedades e valores de todos os livros, no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for ( var i=0; i < books.length; i++ ){  //for ( var i=0; i < Object.keys( books ).length; i++ ){
        for ( var prop in books[i]) { //console.log( books[i].name, ':', books[i].pages );
            console.log( prop + ': ' + books[i][prop] );
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do seu nome. 
    Adicione seu nome completo no array.
    */
    var myName =[ 'T', 'h', 'a', 'n', 'a', 'k', 'i', 'n', ];
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
   console.log( myName.join( '' ) );


    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
   console.log( '\nMeu nome invertido é:');
   console.log(  myName.reverse() );

    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
   console.log( '\nAgora em ordem alfabética:');
   console.log( myName.sort() );
})();