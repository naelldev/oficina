//  Métodos de modificação do conteúdo de uma array:

exemploArray.push();    // adiciona elementos no final da array.
exemploArray.unshift(); // adiciona elementos no início da array.

exemploArray.pop();     // remove elementos no final da array.
exemploArray.shift();   // remove elementos no início da array.

/*  Método 'splice' de remoção de elementos de qualquer lugar da array de forma consecutiva, através de 2 ou 3
    parâmentros. O primeiro indica a partir de qual índice do array ocorrerá essa remoção e o segundo quantos
    itens serão removidos de forma seguida:
*/

let exemploArray = ['today', 'was', 'not', 'so', 'great'];
exemploArray.splice(2, 2);  // remove "not" e "so".

/*  O terceiro parâmetro substitui o elemento removido por um ou mais elementos, tal como: 
*/

exemploArray.splice(2, 2, "elemento novo um", "elemento novo dois");

//  Visualização do tamanho de uma array (quantos itens existem dentro dela):

console.log(exemploArray.length);

/*  A ação de copiar ou extrair elementos específicos de uma array para outra array pode ser executada através
    do método 'slice'.
*/

let exemploArray2 = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let exemploArray3 = exemploArray2.slice(1, 2);  // nova array contendo "snow" e "sleet".

/*  Com o ES6, foi acrescentado ao JavaScript o método 'spread', que possibilita a cópia de uma array inteira
    por um meio bem mais simplificado usando apenas reticências da seguinte forma:
*/
let exemploArray4 = [...exemploArray2]; // esta array agora receberá todos os itens da 'exemploArray2'.

/*  Checagem da existência de um elemento específico dentro de uma array através do 'indexOf', que retorna
    o índice em que ele está localizado.
*/
exemploArray2.indexOf('hail');  // retornará o número do índice, portanto, 3.

//  Se o elemento for inexistente, retornará -1.


