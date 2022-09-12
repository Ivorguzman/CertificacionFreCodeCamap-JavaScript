
{
    // En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

    // Para lograr esto, por lo general se usa la siguiente sintaxis:

    {
        const myFunc = function () {
            const myVar = "My value";
            return myVar;
        }
        console.log(myFunc())
    }
    // ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la sintaxis de función flecha:
    {
        const myFunc = () => {
            const myVar = "My value";
            return myVar;
        }
        console.log(myFunc());
    }
    // Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de "función de flecha", te permite omitir la palabra clave return, así como los corchetes que rodean el código. Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea:

    {
        const myFunc = () => "My value"; //azúcar sintáctico
        console.log(myFunc());
    }
    // Este código todavía devolverá la cadena value por defecto.


    // En informática, el azúcar sintáctico es un término acuñado por Peter J. Landin en 1964 para referirse a los añadidos a la sintaxis de un lenguaje de programación diseñados para hacer algunas construcciones más fáciles de leer o expresar.
}



{
    // === Desafio ===

    // Reescribe la función asignada a la variable magic, la cual devuelve una new Date(), utilizando la sintaxis de función flecha. Además, asegúrate de que nada esté definido usando la palabra clave var.

    var magic = function () {
        return new Date();
    };
    console.log(magic());
}

{
    // ===Solucion===
    const magic = () => new Date;
    console.log(magic());
}

