{
    //! Ejercicio

    ///     Rebote falsy
    // Quita todos los valores falsos de un arreglo.

    // Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

    // Sugerencia: Intenta convertir cada valor a booleano.

    function bouncer(arr) {
        return arr;
    }

    bouncer([7, "ate", "", false, 9]);
}




{
    //! Soluciones con filter

    {
        /// === Opción 1
        function bouncer(arr) {
            let resultado = [];
            arr.filter((item, index) => {
                if (item) {
                    console.log(item, index);
                    resultado.push(item);
                    console.log(resultado);
                }
            });
            return resultado;
        }

        console.table(bouncer([7, "ate", "", false, 9])); //debe devolver [7, "ate", 9].
    }


    {


        function bouncer(arr) {
            return arr.map((item) => { Boolean(item); });
        }

        console.table(bouncer([7, "ate", "", false, 9]));

    }


    {
        function bouncer(arr) {
            console.log(arr);
            console.log(arr.filter((item) => { return Boolean(item); }));
        }
        bouncer([7, "ate", "", false, 9]);
    }

    {
        /// Opción 2
        function bouncer(arr) {
            console.log(Boolean);
            return arr.filter(Boolean);
        }

        console.log(bouncer([7, "ate", "", false, 9])); //debe devolver [7, "ate", 9].
    }

    //? NOTA: Esencialmente, escribir: arr.filter(Boolean)  es lo mismo que escribir: arr.filter(function (x) { return Boolean(x); }); ¡ puesto Boolean() que también es una función que devuelve verdadero cuando true y falso cuando false!;

    /// https://forum.freecodecamp.org/t/avascript-booleans-explained-how-to-use-booleans-in-javascript/14311

};

{
    //! EjercSolucion 2 ciclo for i
    ///     Rebote falsy
    // Quita todos los valores falsos de un arreglo.

    // Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

    // Sugerencia: Intenta convertir cada valor a booleano.

    //*  https://forum.freecodecamp.org/t/javascript-truthy-value-explained-with-examples/15975

    function bouncer(arr) {
        let newArr = [];
        let i;
        let l = arr.length;
        for (i = 0; i < l; i++) {

            //?  Un valor veraz es un valor que se traduce como verdadero cuando se evalúa en un contexto booleano .Todos los valores son verdaderos a menos que se definan como falsos. 245(es decir, excepto para, false, 0, ""y null

            if (arr[i]) {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    }


}




