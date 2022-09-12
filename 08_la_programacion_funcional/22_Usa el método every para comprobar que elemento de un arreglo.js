{

    //! === Explicacion ===

    //* Algoritmos de JavaScript y Estructuras de Datos

    // Programación funcional
    // Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio
    // El método every funciona con arreglos para comprobar si every element pasa una prueba en particular. Devuelve un valor booleano - true si todos los valores cumplen los criterios, false si no.

    // Por ejemplo, el siguiente código comprobaría si cada elemento en el arreglo numbers es menor a 10:

    //! Array.prototype.every()
    // Determina si todos los elementos en el array satisfacen una condición.

    // Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!

    // El método every ejecuta la función callback dada una vez por cada elemento presente en el arreglo hasta encontrar uno que haga retornar un valor falso a callback

    const numbers = [1, 5, 8, 0, 10, 11];

    numbers.every(function (currentValue) {

        return currentValue < 10;

    });
    console.log(numbers);
    // El método every devolvería false aquí.

}
{
    //! === Desafio ===

    // Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo. La función debe devolver un valor booleano.

    function checkPositive(arr) {
        // Cambia solo el código debajo ,de esta línea


        // Cambia solo el código encima de esta línea
    }

    checkPositive([1, 2, 3, -4, 5]);

}
{
    //! === Solucion ===

    // Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo. La función debe devolver un valor booleano.

    function checkPositive(arr) {
        // Cambia solo el código debajo de esta línea
        console.log(arr);
        let chekearNumero = num => num >= 0;
        let resultado = arr.every(chekearNumero)
        return resultado
        // Cambia solo el código encima de esta línea
    }

    checkPositive([1, 2, 3, 4, 5]);

}