
{

    // === Explicacion === 

    // Ya que los arreglos pueden modificarse, o mutarse, en cualquier momento, no se puede garantizar dónde estará un dato concreto en un arreglo determinado, o si ese elemento sigue existiendo. Afortunadamente, JavaScript nos proporciona otro método incorporado, indexOf(), que nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo. indexOf() toma un elemento como parámetro, y cuando lo llama, devuelve la posición, o índice, de ese elemento, o -1 si el elemento no existe en el arreglo.

    let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

    console.log(fruits.indexOf('dates'));
    console.log(fruits.indexOf('oranges'));
    console.log(fruits.indexOf('pears'));



}


{
    // === desafio ===


    // indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.
    function quickCheck(arr, elem) {
        // Cambia solo el código debajo de esta línea

        // Cambia solo el código encima de esta línea
    }

    console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
}

{
    // === solucion ===


    // indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.

    function quickCheck(arr, elem) {
        // Cambia solo el código debajo de esta línea
        return (arr.indexOf(elem) == -1) ? false : true;
        // Cambia solo el código encima de esta línea
    }

    console.log(quickCheck(['squash', 'onions', 'shallots'], "mushrooms"));
}