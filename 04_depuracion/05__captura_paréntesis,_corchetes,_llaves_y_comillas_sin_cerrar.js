
        {
            // Otro error de sintaxis a tener en cuenta es que todos los paréntesis de apertura, corchetes, llaves y comillas tienen un par de cierre. Olvidar una pieza suele suceder cuando se edita el código existente y se insertan elementos con uno de los tipos de pares. También hay que tener cuidado al anidar bloques de código dentro de otros, como agregar una función de callback como argumento de un método.

            // Una forma de evitar este error es, tan pronto como se escriba el caracter de apertura, incluir inmediatamente su caracter de cierre, luego mover el cursor hacia atrás entre ellos y continuar escribiendo. Afortunadamente, la mayoría de los editores de código modernos generalmente la segunda mitad del par automáticamente.

            {
                // Explicación del problema

                // El método reduce () reduce una matriz a un solo valor. Si no está familiarizado con él, el siguiente código muestra un ejemplo del uso del método:

                // const array1 = [1, 2, 3, 4];
                // console.log(array1.reduce((acumulador, valorActual) => acumulador + valorActual));  // resultado output: 10

                // También puede definir el argumento del método reduce como una variable o constante y entregarlo a la función, por ejemplo,

                // const array1 = [1, 2, 3, 4];
                // const reducer = (acumulador, valorActual) => acumulador + valorActual;

                // 1 + 2 + 3 + 4 = (10)
                console.log(array1.reduce(reducer));      // expected output: 10

                // 5 + 1 + 2 + 3 + 4 =  (15)
                console.log(array1.reduce(reducer, 5));   // expected output: 15
            }

            {

                //  === Desafio ===

                // Corrige los dos errores de par en el código.

                {
                    let myArray = [1, 2, 3];
                    let arraySum = myArray.reduce((previous, current => previous + current));
                    console.log(`Sum of array values is: ${arraySum}`);
                }

                {

                    let myArray = [1, 2, 3];
                    let arraySum = myArray.reduce((previous, current) => previous + current);
                    console.log(`Sum of array values is: ${arraySum}`);
                }
            }
        } 
