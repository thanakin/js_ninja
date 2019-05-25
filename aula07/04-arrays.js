/**
 * ARRAYS
 * Lenght
 */

var arr = [ 'Thanakin', 727, null, true, {} ];
arr.length

arr[0] // 'Thanakin'

var qtd = arr.length;
qtd // 5

while(qtd > 0){
    console.log(arr[ qtd-- ]);
}

while(qtd > 0){
    console.log(arr[ --qtd ]);
}