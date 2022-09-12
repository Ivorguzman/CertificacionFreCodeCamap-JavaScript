{

    //  === Explicacion ===

    // Devuelve el factorial del entero proporcionado.

    // Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

    // Los factoriales suelen representarse con la abreviatura n!

    // Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

    // Sólo se proporcionarán a la función los enteros mayores o iguales a cero.




}




{
    // Pista 1
    // Sabes que tu solución debería regresar 1cuando el número pasado a la función sea 0 o 1. Además, el valor final devuelto será el producto de todos los números entre 1 y el número (inclusive). Si inicializa el valor del producto a 1, entonces piense cómo podría comenzar en el número dado y continuar disminuyendo este número hasta un valor específico mientras multiplica el producto por el número en cada paso.

    // Solución recursiva

    // Este comienza fácilmente desde 0! = 1, por lo que puede continuar y simplemente return 1allí.

    // Podemos usar eso ifpara romper el ciclo que vamos a crear usando una función recursiva . Verificará si el número que le diste a la función es 0 (que sería el final de tu cadena factorial). Las funciones "terminan" cuando devuelven algo. De hecho, todas las funciones sin una declaración explícita returndevolverán undefined.

    // Esta es también la razón por la que en lugar de haber "terminado" , siempre se dice que una función "ha regresado" . Y ahora esto…

    // Entendiendo la recursividad

    // La recursividad se refiere a una función que se repite (llama) a sí misma. En este caso, básicamente devolvemos el número dado (es decir, 5), multiplicado por la función misma, pero esta vez el valor pasado al parámetro numnum-1 es (que inicialmente se traduce en 4). La misma función se va a ejecutar dentro de sí misma interesante, ¿eh?

    // Entendiendo el flujo

    // El primer valor devuelto se puede visualizar mejor si piensas en esas operaciones de paréntesis que hiciste en la escuela secundaria donde haces los cálculos dentro de cada paréntesis de adentro hacia afuera, corchete y corchete hasta obtener un resultado final (un total). Esta vez es lo mismo, mira el flujo del programa:

    // Durante la primera ejecución de la función:

    // [ número = 5]

    // ¿5 es igual a 1 o a 0? No —> Oki doki, continuemos…

    // Devoluciones:

    // ( 5 _( segunda ejecución : 4 _( tercera ejecución : 3 _( cuarta ejecución : 2 _ quinta ejecución : 1 ))))

    // Lo que devuelve se puede ver como (5*(4*(3*(2*1))))o simplemente 5 * 4 * 3 * 2 * 1, y la función devolverá el resultado de esa operación: 120. Ahora, veamos qué hacen el resto de las ejecuciones:

    // Durante el resto de las ejecuciones :

    // Segunda ejecución : num = 5-1 = 4 → ¿es num 0 o 1? No

    // → devuelve la multiplicación entre 4 y el siguiente resultado cuando num ahora es 4-1.

    // Tercera Ejecución : num = 4 - 1 = 3 → es num 0 o 1? No

    // → devuelve la multiplicación entre 3 y el siguiente resultado cuando num ahora es 3-1.

    // Cuarta Ejecución : num = 3-1 = 2 → ¿es num 0 o 1? No

    // → devuelve la multiplicación entre 2 y el siguiente resultado cuando num ahora es 2-1.

    // Quinta Ejecución : num = 2-1 = 1 → es num 0 o 1? sí

    // → volver 1 . Y aquí es donde se detiene la recursividad porque no hay más ejecuciones.

}

{


    {
        // === desafio ===
        /*👉
                function factorialize(num) {
                    return num;
                }👈*/
    }


    {    // === Solucion1 ===

        function factorialize(num, factorial = 1) {
            let acumulador = 1;
            if (num >= 1) {
                for (let i = 1; i <= num; i++) {
                    acumulador = acumulador * i;
                    console.log(acumulador);
                }
                return acumulador;
            }
            else {

                // console.log(" Introdusca numeros mayores a Cero (0)");
                // console.log(factorial);
                return factorial;
            };


        }
        factorialize(0);

    }

}


{
    /*👉(usando recursividad)👈*/

    function factorialize(num) {
        if (num === 0) {
            return 1;
        }
        return/*👉 num * 👈*/factorialize(num - 1); // ==> 5*4*3*2*1== 120
    }

    factorialize(5);

    // Lo que devuelve se puede ver como👈 ==*  5  * (4 * (3 * (2 * 1)))
    //    /*👉 o simplemente👈*/(5 * 4 * 3 * 2 * 1)



    /*👉    function factorialize(num) {
            if (num === 0) {
                console.log("def If  ");
                console.log(" ");
                return 1;
            }
            // console.log(num);
            let resultadofactorialize = factorialize(num - 1);
            console.log(resultadofactorialize);
            let resultado = num * factorialize(num - 1);
            // console.log(resultado);
            return resultado;
        }
    
        console.log(factorialize(5));👈*/


    // Código Explicación
    // Observe que en la primera línea tenemos la condición terminal, es decir, una condición para comprobar el final de la recursividad. Si num == 0, devolvemos 1, es decir, terminamos efectivamente la recursividad e informamos a la pila para que propague este valor a los niveles superiores. Si no tenemos esta condición, la recursividad continuará hasta que se consuma el espacio de la pila, lo que resultará en un desbordamiento de la pila . 1.4k.
}

{

    // Solución 3(usando recursividad y parametro por defecto)

    /*👉    function factorialize(num, factorial = 1) {
            if (num === 0) {
                return factorial;
            } else {
                return factorialize(num - 1, factorial * num);
            }
        }
    
        factorialize(5);👈*/


    // Código Explicación
    // En esta solución, usamos Tail Recursion 541 para optimizar el uso de la memoria.

    // En la recursividad principal tradicional, el modelo típico es que primero realiza sus llamadas recursivas y luego toma el valor de retorno de la llamada recursiva y calcula el resultado. De esta manera, no obtiene el resultado de su cálculo hasta que haya regresado de cada llamada recursiva.

    // En la recursión de cola, primero realiza sus cálculos y luego ejecuta la llamada recursiva, pasando los resultados de su paso actual al siguiente paso recursivo. Esto da como resultado que la última declaración tenga la forma de (return (parámetros de función recursiva)).

    // En esta solución, con cada evaluación de la llamada recursiva, se actualiza el factorial. Esto es diferente de la solución recursiva principal donde todos los cálculos de evaluación se almacenan en la pila hasta que se alcanza el caso base.

}






{
    // Solución 4 (haga clic para mostrar/ocultar)


    function factorial(num) {
        let factorizacion = new Array(num);
        return (num <= 0) ? 1
            : factorizacion
                .fill(undefined)
                .reduce((acumulador, _, indice) => {
                    console.log(acumulador, indice + 1);
                    return acumulador * (indice + 1);
                }, 1);
    };
    console.log(factorial(0));

    // function factorial(num) {
    //     return (num <= 0) ? console.log("No se puede factorizar numero igual o menor a 0  ") :
    //         new Array(num)
    //             .fill(undefined)
    //             .reduce((acumulador, _, indice) => acumulador = acumulador * (indice + 1), 1);
    //         };


    console.log("---------------------------------------");


    // Código Explicación
    // En esta solución, usamos el metodo reduce()" para encontrar el valor factorial del número.

    // Hemos creado una matriz que tiene longitud num. Y llenamos todos los elementos de la matriz como undefined. En este caso, tenemos que hacer esto porque las matrices vacíasn no se  les puede aplicar el metodo reduce(). Por cierto, puede llenar la matriz como desee. Esto depende completamente de su vista de ingeniería.

    // En el reduce el acumulador  es le parametro  product, este es también nuestro valor final. Estamos multiplicando nuestro valor dl parametro  índice con el producto para encontrar el  valor factorial

    // Estamos configurando el valor inicial del producto en 1 porque si fuera cero, los productos siempre obtienen cero. 

    // Además, el valor factorial no se puede calcular para números negativos, en primer lugar, estamos probando esto.
}