{
    // En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el resto de elementos en un arreglo separado.

    // El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

    const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
    console.log(a, b);
    console.log(arr);

    // La consola muestra los valores 1, 2y [3, 4, 5, 7].

    // Las variables ay btoman el primer y segundo valor del arreglo. Después de eso, debido a la presencia del parámetro rest, arrobtiene el resto de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. Por ejemplo, no puedes usar el parámetro rest para capturar un sub-arreglo que deje fuera el último elemento del arreglo original.
}
{
    // === Desafio ===
    /*👉Utilice la sintaxis de desestructuración con el parámetro rest para realizar un Array.prototype.slice() eficaz, de tal manera que arr sea ​​un sub-arreglo del arreglo original source con los dos primeros elementos omitidos.👈*/

    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



    function removeFirstTwo(list) {
        // Cambia solo el código debajo de esta línea
        const arr = list

        console.log(arr)

        // Cambia solo el código encima de esta línea
        return arr;
    }


    const arr = removeFirstTwo(source);
    console.log(arr)
}
{
    // === solucion ===
    /*👉Utilice la sintaxis de desestructuración con el parámetro rest para realizar un Array.prototype.slice() eficaz, de tal manera que arr sea ​​un sub-arreglo del arreglo original source con los dos primeros elementos omitidos.👈*/

    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



    function removeFirstTwo(list) {
        // Cambia solo el código debajo de esta línea
        const [a, b, c, ...arr] = list

        console.log(a)
        console.log(b)
        console.log(c)
        console.log(arr)
        console.log(list)

        // Cambia solo el código encima de esta línea
        return arr;
    }


    const arr = removeFirstTwo(source);
    console.log(arr)
}