{

    //! Explicacion

    //* Algoritmos de JavaScript y Estructuras de DatosProgramación funcionalIntroducción a la currificación y a la aplicación de funciones parciales
    // La aridad de una función es el número de argumentos que requiere.Currificar una función significa convertir una función de N aridades(argumentos) a N funciones de 1 aridad(argumento).
    // En otras palabras, reestructura una función, por lo que toma un argumento, luego devolverá otra función que toma el siguiente argumento, y así sucesivamente.
    // A continuación un ejemplo:
    {
        function unCurried(x, y) {
            return x + y;
        }

        function curried(x) {
            return function (y) {
                return x + y;
            }
        }

    }
    {
        //! Aplicando la currifacción

        {
            const curried = function (x) { //! Escrita en forma anonima
                return function (y) {
                    return x + y;
                };
            }
        }

        const curried = x => y => x + y //! Escrita como funcion flecha

        console.log(curried(1));

        console.log(curried(1)(2)); // devolverá 3.

    }

    // Esto es útil en tu programa si no puedes proporcionar todos los argumentos a una función al mismo tiempo. Puedes guardar la llamada a cada función dentro de una variable, la cual mantendrá la referencia de la función devuelta que toma el siguiente argumento cuando este disponible. Aquí hay un ejemplo utilizando la función currificada del ejemplo anterior:

    /*👉  const funcForY = curried(1);👈*/
    /*👉console.log(funcForY(2))👈*/; // 3

    // Similarmente, la aplicación de una función parcial puede describirse como aplicar algunos argumentos a la función al mismo tiempo y devolviendo una función que se aplica a más argumentos. A continuación un ejemplo:
    {
        function impartial(x, y, z) {
            return x + y + z;// ==>   230
        }

        //! NOTA: El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada. 

        //* El valor de this es ignorado cuando la función es llamada con el operador new.

        const partialFn = impartial.bind(this, 10, 20,);
        partialFn(200); // 230

    }
}
{
    //! === Desafio===

    // Completa el cuerpo de la función add para que use currificación para añadir parámetros x, y, y z.
    function add(x) {
        // Cambia solo el código debajo de esta línea


        // Cambia solo el código encima de esta línea
    }

    /*👉 add(10)(20)(30);👈*/


}



{
    // Completa el cuerpo de la función add para que use currificación para añadir parámetros x, y, y z.

    //! === Solucion 1 ===

    function add(x, y, z) {
        return function (y) {
            return function (z) {
                return x + y + z
            }
        }
    }
    add(10)(20)(30);
}
{
    //! === Solucion  2 ===
     // Completa el cuerpo de la función add para que use currificación para añadir parámetros x, y, y z.

    function add(x, y, z) {
        return x + y + z;
    }

    const resultado = add.bind(this, 30)
    resultado(10,20)
}




