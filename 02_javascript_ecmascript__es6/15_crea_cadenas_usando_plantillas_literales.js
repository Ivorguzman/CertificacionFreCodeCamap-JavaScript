{
    "use strict";
    // Una nueva característica de ES6 es la plantilla literal. Este es un tipo especial de cadena que facilita la creación de cadenas complejas.

    // Las plantillas literales te permiten crear cadenas multilínea y usar características de interpolación, para crearlas.

    // Fíjese en el código debajo:
    {
        const person = {
            name: "Ivor Guzman",
            age: 56
        };
        const { name, age } = person;
        const greeting = `Hello, my name is ${name}! I am ${age} years old.`;

        console.log(greeting);
    }
    // La consola mostrará las cadenas Hello, my name is Zodiac Hasbro! y I am 56 years old..

    // Muchas cosas han ocurrido allí. En primer lugar, el ejemplo utiliza backticks (`), no comillas (' o "), para envolver la cadena. En segundo lugar, observe que la cadena es multi-línea tanto en el código como cuando se imprime en pantalla. Esto guarda la inserción \n dentro de las cadenas. La sintaxis ${variable} utilizada anteriormente es un marcador de posición. Básicamente, ya no tendrás que utilizar concatenación con el operador +. Para añadir variables a las cadenas, basta con colocar la variable en una plantilla de cadena y envolverla con ${ y }. Del mismo modo, puedes incluir otras expresiones en tu literal de cadena, por ejemplo ${a + b}. Esta nueva forma de crear cadenas te da mayor flexibilidad para crear cadenas robustas.q


}
{

    // === Desafio === 

    // Usa la sintaxis de plantilla literal con comillas invertidas para crear un arreglo de cadenas de elemento lista(li).El texto de cada elemento de lista debe ser uno de los elementos del arreglo de la propiedad failure en el objeto result y tener un atributo class con el valor text - warning.La función makeList debe devolver el arreglo de cadenas de elemento lista.

    // Utiliza un método de iteración(cualquier tipo de bucle) para obtener el resultado deseado(mostrado a continuación).
    {
        [
            '<li class="text-warning">no-var</li>',
            '<li class="text-warning">var-on-top</li>',
            '<li class="text-warning">linebreak</li>'
        ]
    }

    {
        const result = {
            success: ["max-length", "no-amd", "prefer-arrow-functions"],
            failure: ["no-var", "var-on-top", "linebreak"],
            skipped: ["no-extra-semi", "no-dup-keys"]
        };
        function makeList(arr) {
            // Cambia solo el código debajo de esta línea
            const failureItems = [];
            // Cambia solo el código encima de esta línea

            return failureItems;
        }

        const failuresList = makeList(result.failure);
    }

}

{



    {
        [
            '<li class="text-warning">no-var</li>',
            '<li class="text-warning">var-on-top</li>',
            '<li class="text-warning">linebreak</li>'
        ]
    }
    const result = {
        success: ["max-length", "no-amd", "prefer-arrow-functions"],
        failure: ["no-var", "var-on-top", "linebreak"],
        skipped: ["no-extra-semi", "no-dup-keys"]
    };




    { // === Solucion ===
        function makeList(arr) {
            // Cambia solo el código debajo de esta línea
            const failureItems = [];
            for (let i = 0; i < arr.length; i++) {

                failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
                // Cambia solo el código encima de esta línea

            }
            return failureItems;

        }
        const failuresList = makeList(result.failure);
        console.log(failuresList)
    }

    {
        // === Solucion 2===  


        function makeList(arr) {
            // Cambia solo el código debajo de esta línea

            const failureItems = [];
            for (let i = 0; i < arr.length; i++) {
                let li = (`<li class="text-warning">${arr[i]}</li>`)
                failureItems[i] = li
            }

            // Cambia solo el código encima de esta línea

            return failureItems;
        }


        const failuresList = makeList(result.failure);
        console.log(failuresList)
    }

    {
        // === Soliucion 3===

        const [no_var, var_on_top, linebreak] = result.failure;
        const resultado = [no_var, var_on_top, linebreak]
        function makeList(arr) {
            // Cambia solo el código debajo de esta línea
            const failureItems = [];
            for (let i = 0; i < resultado.length; i += 1) {
                failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
            }

            // Cambia solo el código encima de esta línea

            return failureItems;
        }

        const failuresList = makeList(resultado);
        console.log(failuresList)
    }


    {
        // === OJO  ==> solucion errada ===
        const failureItems = [];
        maker = (arr) => {
            failureItems = arr.map(x => (`<li class="text-warning">${arr[i]}/li>`)) // === ERROR LOGICO ==> ${arr[i]} para eso map() usa la variable x===
            return failureItems
        }
        const failuresList = makeList(result.failure);
        console.log(failuresList)
    }
    {
        function makeList(arr) {
            // change code below this line
            const failureItems = arr.map(x => `<li class="text-warning">${x}</li>`);
            // change code above this line
            return failureItems;
        }
        const failuresList = makeList(result.failure);
        console.log(failuresList)
    }

    // const result = {
    //     success: ["max-length", "no-amd", "prefer-arrow-functions"],
    //     failure: ["no_var", "var_on_top", "linebreak"],
    //     skipped: ["no-extra-semi", "no-dup-keys"]
    // };
}