
{
    // === Explicacion ===

    // ¿Recuerdas que en el último desafío mencionamos que splice() puede tomar hasta tres parámetros? Pues bien, puedes usar el tercer parámetro, compuesto por uno o varios elementos, para agregarlo al arreglo. Esto puede ser increíblemente útil para cambiar rápidamente un elemento, o un conjunto de elementos, por otro.
    const numeros = [10, 11, 12, 12, 15];
    const indiceComenzar = 3;
    const cantidadBorrar = 1;

    console.log(numeros);
    numeros.splice(indiceComenzar, cantidadBorrar, 13, 14);
    console.log(numeros);

    // La segunda ocurrencia de 12es removida, y agregamos 13y 14en el mismo índice. El arreglo numbersahora será [ 10, 11, 12, 13, 14, 15 ].

    // Aquí, comenzamos con un arreglo de números. A continuación, pasamos lo siguiente a splice(): El índice en el que empezar a borrar elementos (3), el número de elementos a borrar (1), y el resto de argumentos (13, 14) se insertarán a partir de ese mismo índice. Ten en cuenta que puede haber cualquier número de elementos (separados por comas) después de amountToDelete, cada uno de los cuales es insertado.

}

{
    // === Desasfio ===

    // Hemos definido una función, htmlColorNames que toma un arreglo de colores HTML como argumento. Modifica la función usando splice() para eliminar los primeros elementos del arreglo y agrega 'DarkSalmon'y 'BlanchedAlmond'en sus lugares seleccionados.
    function htmlColorNames(arr) {
        // Cambia solo el código debajo de esta línea

        // Cambia solo el código encima de esta línea
        return arr;
    }

    console.log(htmlColorNames(['DarkGoldenR.od', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
};
{
    // === SOLUCION ===

    // Hemos definido una función, htmlColorNames que toma un arreglo de colores HTML como argumento. Modifica la función usando splice() para eliminar los primeros elementos del arreglo y agrega 'DarkSalmon'y 'BlanchedAlmond'en sus lugares seleccionados.

    function htmlColorNames(arr) {
        // Cambia solo el código debajo de esta línea
        arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
        // Cambia solo el código encima de esta línea
        return arr;
    }

    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
};