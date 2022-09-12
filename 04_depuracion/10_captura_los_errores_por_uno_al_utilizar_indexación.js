
        {
            // Los errores por uno o por un paso (en inglés: Off-by-one error -OBOE) aparecen cuando se intenta apuntar a un índice específico de una cadena o arreglo (para cortar o acceder a un segmento), o cuando se hace un bucle sobre los índices de los mismos. La indexación en JavaScript comienza en cero, no en uno, lo que significa que el último índice es siempre uno menos que la longitud del elemento. Si intentas acceder a un índice igual a la longitud, el programa puede lanzar un error de referencia "index out of range" (índice fuera de rango) o imprimir undefined.

            // Cuando se utilizan métodos de cadenas o arreglos que toman rangos de índices como argumentos, es útil leer la documentación y entender si son inclusivos (el elemento en el índice dado es parte de lo que se devuelve) o no. Estos son algunos ejemplos de errores por un paso:

            let alphabet = "abcdefghijklmnopqrstuvwxyz";
            let len = alphabet.length;
            for (let i = 0; i <= len; i++) { // Ultimo elemento del array es undefined  (?) ==> (i = 0; i <=)
                console.log(alphabet[i]);
            }
            for (let j = 1; j < len; j++) {
                console.log(alphabet[j]); // no presenta el primer del array elemento (a) ==> ( j = 1; j <)
            }
            for (let k = 0; k < len; k++) { // Ejemplo correcto ( i = 0; i < )
                console.log(alphabet[k]);
            }
        }


        {
            // ==Desafio ==

            // Corrige los dos errores de indexación en la siguiente función para que todos los números del 1 al 5 se impriman en la consola.

            {
                function countToFive() {
                    let firstFive = "12345";
                    let len = firstFive.length;
                    // Cambia solo el código debajo de esta línea
                    for (let i = 0; i < len; i++) {
                        // Cambia solo el código encima de esta línea
                        console.log(firstFive[i]);
                    }
                }

                countToFive();
            }


            {
                function countToFive() {
                    let firstFive = "12345";
                    let len = firstFive.length;
                    // Cambia solo el código debajo de esta línea
                    for (let i = 0; i <= len; i++) {
                        // Cambia solo el código encima de esta línea
                        console.log(firstFive[i]);
                    }
                }

                countToFive();
            }

        }