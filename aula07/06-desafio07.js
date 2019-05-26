/*
Crie um array com 5 items (tipos variados).
*/
var meuArrai = [ 727, 'Thanakin', 3.14, undefined, { bola: 'bola'} ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
meuArrai.addItem = function (item){
    meuArrai.push(item);
    return meuArrai;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3 itens de tipos diferentes, 
mostrando o resultado no console.
*/
meuArrai.addItem( [ [1, 2], { alguma: 'coisa'}, true ] ); 
/*
[ 727,
  'Thanakin',
  3.14,
  undefined,
  { bola: 'bola' },
  737,
  [ [ 1, 2 ], { alguma: 'coisa' }, true ],
  addItem: [Function] ]
*/

/*
Mostre no console o segundo elemento desse último array, criado acima, com a frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+ meuArrai[5][1]+'.'); //O segundo elemento do segundo array é [object Object].

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
//meuArrai.length; //6
console.log('O primeiro array tem '+ meuArrai.length +' itens.'); //O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+ meuArrai[5].length +' itens.'); //O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números pares entre 10 e 20, inclusive esses 2.
*/
var pares = 10;
console.log( 'Números pares entre 10 e 20:' );
while(pares <= 20){
    pares % 2 === 0 ? console.log(pares) : '';
    pares++;
}
/*
10
12
14
16
18
20
*/

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var impares = 10;
console.log( 'Números ímpares entre 10 e 20:' );
while(impares < 20){
    impares % 2 === 1 ? console.log(impares) : '';
    impares++;
}
/*
11
13
15
17
19
*/

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for". Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(pares = 100; pares <= 120; pares++){
    pares % 2 === 0 ? console.log(pares) : '';
}
/*
100
102
104
106
108
110
112
114
116
118
120
*/

console.log( 'Números ímpares entre 111 e 125:' );
for(impares = 111; impares <= 125; impares++){
    impares % 2 === 1 ? console.log(impares) : '';
}
/*
111
113
115
117
119
121
123
125
*/