{

    /*👉=== Explicacion ===👈*/

    // Agregue elementos al final de una matriz usando concat en lugar de empujar
    // La programación funcional tiene que ver con la creación y el uso de funciones que no mutan.

    // El último desafío introdujo el concatmétodo como una forma de combinar arreglos en uno nuevo sin mutar los arreglos originales. Comparar concatcon el pushmétodo. pushagrega un elemento al final de la misma matriz en la que se llama, lo que muta esa matriz. Aquí hay un ejemplo:

    const arr = [1, 2, 3];
    arr.push([4, 5, 6]);

    // arrtendría un valor modificado de [1, 2, 3, [4, 5, 6]], que no es la forma de programación funcional.

    // concatofrece una forma de agregar nuevos elementos al final de una matriz sin ningún efecto secundario mutante.

}

{
    /*👉=== Desafio ===👈*/
    // Cambie la   función nonMutatingPush para que se use concat para agregar newItemal final de original en lugar de push. La función debe devolver una matriz.
    const original = [1, 2, 3];
    const newItem = [4, 5, 6];

    function nonMutatingPush(original, newItem) {
        // Only change code below this line
        /*👉return original.push(newItem);👈*/


        // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    nonMutatingPush(first, second);
}

{
    /*👉=== Solucion ===👈*/
    // Cambie la   función nonMutatingPush para que se use concat para agregar newItem al final de original en lugar de push. La función debe devolver una matriz.
    const original = [1, 2, 3];
    const newItem = [4, 5, 6];

    function nonMutatingPush(original, newItem) {
        // Only change code below this line
        /*👉return original.push(newItem);👈*/
        return original.concat(newItem)

        // Only change code above this line
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    nonMutatingPush(first, second);
}
