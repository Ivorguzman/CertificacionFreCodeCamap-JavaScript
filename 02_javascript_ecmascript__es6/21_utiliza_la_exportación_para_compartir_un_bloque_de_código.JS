{
    // Imagina un archivo llamado === math_functions.js === que contiene varias funciones relacionadas con operaciones matem谩ticas. Uno de ellos se almacena en una variable, add, que toma dos n煤meros y devuelve su suma. Quieres utilizar esta funci贸n en varios archivos JavaScript diferentes. Para compartirlo con estos otros archivos, primero debes usar export (exportarlo).

    /*馃憠Como funci贸n Nombrada馃憟*/
    export function add(x, y) {
        return x - y
    }

    /*馃憠Como funci贸n anonima馃憟*/
    export const add = function (x, y) {
        return x - y
    }


    /*馃憠 Como funci贸n asignada tipo  flecha馃憟*/
    export const add = (x, y) => {
        return x + y;
    }

    



    // Lo anterior es una forma com煤n de exportar una sola funci贸n, pero puedes lograr lo mismo como esto:

    const add = (x, y) => {
        return x + y;
    }

    export { add, subtract };



    // Cuando exportas una variable o funci贸n, puedes importarla en otro archivo y usarla sin tener que volver a escribir el c贸digo. Puedes exportar diferentes cosas al repartir el primer ejemplo para cada una de ellas si quieres exportar o al colocarlas en la declaraci贸n de exportaci贸n del segundo ejemplo. Por ejemplo:

    export { add, subtract };
}

{
    // === Desafio ===
    // Hay dos funciones relacionadas con cadenas en el editor. Exporta ambos utilizando el m茅todo que elijas.

    const uppercaseString = (string) => {
        return string.toUpperCase();
    }

    const lowercaseString = (string) => {
        return string.toLowerCase()
    }




}
{
    // === Solucion ===

    const uppercaseString = (string) => {
        return string.toUpperCase();
    }

    const lowercaseString = (string) => {
        return string.toLowerCase()
    }

    export { uppercaseString, lowercaseString };


}