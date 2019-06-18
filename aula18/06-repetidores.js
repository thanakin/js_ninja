/**
 * RegEx repetidores
  * 
 *  {n,} 
 *  \d{2,} no minimo 2 e no maximo em aberto
 *  \d{4}
 *   \d\d? repetidor opcional
 *  s+ repete o item anterio 1 ou infinitas vezes
 *  \w*
 */

var texto = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de 'O Centauro de Luvas',[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.";
/https?:\/\/[^.]w+\.\w+\.\w+{3}\.\w{2}
/https?:\/\/w+[.\w]+

/[\w+]+@\w+\.\w+([.\w]+)?