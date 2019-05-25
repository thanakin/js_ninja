/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato qualquer para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato, e imprima o nome desse campeonato no console.
*/
var championship = 'La Liga 2018/19';
console.log( championship ); //a Liga 2018/19
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem estar na ordem em que eles aparecem na tabela no momento da solução desse desafio.
*/
var teams = [ 'BARCELONA', 'ATL. DE MADRID', 'REAL MADRID', 'VALENCIA', 'GETAFE' ];
console.log( 'Times que estão participando do campeonato:', teams ); //Times que estão participando do campeonato: [ 'BARCELONA', 'ATL. DE MADRID', 'REAL MADRID', 'VALENCIA', 'GETAFE' ]

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem: "Não temos a informação do time que está nessa posição."
*/
teams.showTeamPosition = function (position) {
    if(position < 1 || position > 5){
            return 'O time que está em '+ position +'º lugar é o '+ teams[position - 1 ]+'.';            
    }
    return 'O time que está em '+ position +'º lugar é o '+ teams[position - 1 ]+'.';
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
teams.showTeamPosition(1); //'O time que está em 1º lugar é o BARCELONA.'
teams.showTeamPosition(2); //'O time que está em 2º lugar é o ATL. DE MADRID.'
teams.showTeamPosition(7); //'Não temos a informação do time que está nessa posição.'
teams.showTeamPosition(4); //'O time que está em 4º lugar é o VALENCIA.'
teams.showTeamPosition(5); //'O time que está em 5º lugar é o GETAFE.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de repetição "while".
*/
var numero = 20;
while(numero <= 30){
    console.log(numero++);
}
/*
20
21
22
23
24
25
26
27
28
29
30
30
*/

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é algum hexa escolhido. Se for, retorne a frase: "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre a frase: "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
    switch(cor){
        case 'vermelho':
            return 'O hexadecimal para a cor '+ cor +' é #FF0000.';
        case 'laranja':
            return 'O hexadecimal para a cor '+ cor +' é #FFA500.';
        case 'amarelo':
            return 'O hexadecimal para a cor '+ cor +' é #FFFF00.';
        case 'azul':
            return 'O hexadecimal para a cor '+ cor +' é #0000FF.';
        case 'verde':
            return 'O hexadecimal para a cor '+ cor +' é #008000.';
        default:
            return 'Não temos o equivalente hexadecimal para '+ cor +'.';
    }
};

function convertToHex(cor){
    var hexa;
    switch(cor){
        case 'vermelho':
            hexa =' #FF0000.';
            break;          
        case 'laranja':
            hexa =' #FFA500.';
            break;
        case 'amarelo':
            hexa =' #FFFF00.';
            break;
        case 'azul':
            hexa =' #0000FF.';
            break;
        case 'verde':
            hexa =' #008000.';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para '+ cor +'.';
    }
    return 'Não temos o equivalente hexadecimal para '+ hexa +'.';
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('rosa'); //'Não temos o equivalente hexadecimal para rosa.'
convertToHex('vermelho'); //'O hexadecimal para a cor vermelho é #FF0000.'
convertToHex('preto'); //'Não temos o equivalente hexadecimal para preto.'
convertToHex('laranja'); //'O hexadecimal para a cor laranja é #FFA500.'
convertToHex('cinza'); //'Não temos o equivalente hexadecimal para cinza.'
convertToHex('amarelo'); //'O hexadecimal para a cor amarelo é #FFFF00.'
convertToHex('marron'); //'Não temos o equivalente hexadecimal para marron.'
convertToHex('azul'); //'O hexadecimal para a cor azul é #0000FF.'