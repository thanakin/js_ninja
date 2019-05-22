/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [ null, 2, 3, 4, 5, 'meia', 7, 8, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function minhaFuncao(algo){
    return algo;
}

minhaFuncao(qualquer); //[ null, 2, 3, 4, 5, 'meia', 7, 8, undefined ]

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
minhaFuncao(qualquer[1]); //2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function novaFuncao(arrai, indice){
    return arrai[indice];
}
meuarray = [727, 737, 777, 787];

novaFuncao(meuarray, 0); //727
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var minhavar = [ 727, 3.14, 'Thanakin', true, undefined ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado.
*/
novaFuncao(minhavar, 0); //727
novaFuncao(minhavar, 1); //3.14
novaFuncao(minhavar, 2); //'Thanakin'
novaFuncao(minhavar, 3); //true
novaFuncao(minhavar, 4); //undefined

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do livro. 
Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3 propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos os livros.
*/
function book(nomeLivro){
    var objeto = {
        livro1: {
            quantidadePaginas: 100,
            autor: 'Qui Gon Jin',
            editora: 'Skywalker'
            },
        livro2: {
                quantidadePaginas: 200,
                autor: 'Obi Wan Kenobi',
                editora: 'Skywalker'
            },
        livro3: {
                quantidadePaginas: 300,
                autor: 'Anakin Skywalker',
                editora: 'Skywalker'
            }
    }
    if(nomeLivro === ''){
        return objeto.nomeLivro;
    } else {
        return objeto;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); /*book()
{ livro1:
   { quantidadePaginas: 100,
     autor: 'Qui Gon Jin',
     editora: 'Skywalker' },
  livro2:
   { quantidadePaginas: 200,
     autor: 'Obi Wan Kenobi',
     editora: 'Skywalker' },
  livro3:
   { quantidadePaginas: 300,
     autor: 'Anakin Skywalker',
     editora: 'Skywalker' } }*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book.paginas = function(livro){
    return 'O livro '+ book.livro +' tem '+book.objeto.paginas+' páginas!'; //return 'O livro '+ book.livro +' tem '+ book.livro.quantidadePaginas +' páginas!';
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book.autor = function(livro){
    return 'O autor do livro '+ book.livro +' é '+book.objeto.autor+'.'
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

book.editora = function(editora){
    return 'O livro '+ book.livro +' foi publicado pela editora '+ book.objeto.editora +'.';
}
