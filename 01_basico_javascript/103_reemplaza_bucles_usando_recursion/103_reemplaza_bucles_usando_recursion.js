
{
    // / Reemplaza bucles usando recursión

    //* La recursión es el concepto que una función puede expresarse en términos de sí misma. Para ayudar a comprender esto, comienza pensando en la siguiente tarea: multiplica los primeros n elementos de un arreglo para crear el producto de esos elementos. Usando un bucle for, puedes hacer esto:

    {
        function multiply(arr, n) {
            // console.log(arr);
            let product = 1;
            for (let i = 0; i < n; i++) {
                // console.log(product *= arr[i]);
                product = product * arr[i];
            }
            return product;

        }
        multiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
        // console.log(multiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
    }

    //* Sin embargo, nota que multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Esto significa que puedes reescribir multiply en términos de sí misma y que nunca necesites hacer uso de un bucle.


    {

        {
            function multiply(arr, n) {
                if (n <= 0) {
                    return 1;
                } else {
                    return multiply(arr, n - 1) * arr[n - 1];
                }
            }
            console.log(multiply([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 2));
            
            function multiply(arr, n) {

                if (n <= 0) {
                    return 1;
                } else {


                    return multiply(arr, n - 1) * arr[n - 1];
                    /* console.log(`41 ${arr[n - 1]}`);
                    let a = (arr, 2) * arr[n - 1];
                    let b = (2) * arr[n - 1];
                    console.log(a);
                    console.log(b); */
                };

                // console.log(`42 ${multiply(arr, n - 1) * arr[n - 1]}`);
                // console.log(` 31  ${multiply(arr, n - 1)* arr[n - 1]} `);
                // console.log( arr[n - 1]);
                // return multiply(arr, n - 1) * arr[n - 1];
            }
        }
        /*   let n = 3;
          multiply([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3); */
        console.log(multiply([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 2));
    }
    // * La versión recursiva de multiply se desglosa así. En el caso base, donde n <= 0, devuelve 1. Para valores más grandes de n, se llama a sí misma, pero con n - 1. Esa llamada de función se evalúa de la misma manera, llamando a multiply otra vez hasta que n <= 0. En este punto, todas las funciones pueden devolver y la multiply original devuelve la respuesta.

    //* Nota: Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de nuevo (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.

}

{
    // / Desafion

    // Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr.
    function sum(arr, n) {
        // Cambia solo el código debajo de esta línea

        // Cambia solo el código encima de esta línea
    }


}


{
    // /Solucion
    function sum(arr, n) {
        // Cambia solo el código debajo de esta línea

        // Cambia solo el código encima de esta línea
    }

}

{

    //* Practica  Solucion Imperativa  con bucle for

    function multiplicar(arr, n) {
        console.log(`Tabla de multiplicar  Numero : ${n} `);
        for (let i = 0; i <= arr.length - 1; i = i + 1) {
            console.log(`${n} X ${arr[i]} = ${arr[i] * n}`);
        }
    }
    let multiplicador = 10;
    // multiplicar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], multiplicador);
}