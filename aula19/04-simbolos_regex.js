/**
 * parte final Regex
 * 
 * Simbolos
 */
//console.log( '<h1>Título da página</h1>'.replace( /<(\w+)>([^<]+)<\/\w+>/g,'<$1>O texto dentro da tag "$1" é "$2"</$1>\n' ) );
/**
    ^ representa inicio de string
 
    ^\/\/
    ^\/\*
    ^<!--

    $ representa fim de string
    -->$

    ^<!--.+-->$  identifica todo comentario de "html" <!-- --> 
    (^<!--)|(-->$)  "pega varias linhas"

    ^\/\*.+\*\/$ identifica todo comentario de "php" "/* * /"
    (^\/\*).+(\*\/$)
    (^\/\*)|(\*\/$)  "pega varias linhas"
    ^\/\/.+ identifica todo comentario de "php" //
    

    "g" pesquisa toda as repetições
    "i" ignora caixa alta/baixa
    "m" multline
    "?" repetição não gulosa
    "?:" somente agrupamento, sem capturar ju(?:n|l)ho
    "\1, \2" 
    exemplo: <h1>titulo da pagina</h1><p>este é um paragrafo</p><footer>rodape</footer>
    <(\w+)>.+<\/(\1)> captura conteudo de tags identicas: (\w+) = (\1)
 */