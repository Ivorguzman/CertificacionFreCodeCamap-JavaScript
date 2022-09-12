{
    //! Explicacion
    //* Aplicar programación funcional para convertir cadenas a slugs de URL

    //Los últimos desafíos abarcaban una serie de métodos útiles para arreglos y cadenas, que siguen los principios de la programación funcional. También hemos aprendido acerca de reduce, que es un poderoso método utilizado para reducir los problemas a formas más simples. Desde el cálculo de promedios a la ordenación, cualquier operación con arreglos puede lograrse si lo aplicamos. Recuerda que map y filter son casos especiales de reduce.

    // Combinemos lo que hemos aprendido para resolver un problema práctico.

    // Muchos sitios de gestión de contenidos (CMS) tienen los títulos de una publicación añadidos como parte de la URL con el simple propósito de ser marcadores. Por ejemplo, si escribes una publicación titulada Stop Using Reduce, es probable que la url tenga parte de este titulo en ella (.../stop-using-reduce). Puede que ya hayas notado esto en el sitio de freeCodeCamp.

}

{
    //! === Desafio === 

    // Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. Aquí están los requisitos:

    // La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas

    // El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)

    // El resultado debe contener todas las letras minúsculas

    // El resultado no debe tener espacios

    // Cambia solo el código debajo de esta línea
    function urlSlug(title) {


    }
    // Cambia solo el código encima de esta línea
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
}
{
    //! === Solucion 2 ===

    // Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. Aquí están los requisitos:

    // La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas

    // El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)

    // El resultado debe contener todas las letras minúsculas

    // El resultado no debe tener espacios

    // Cambia solo el código debajo de esta línea

    // Add your code below this line

    // the global variable
    var globalTitle = "A Mind Needs Books Like A Sword Needs A Whetstone";

    function urlSlug(title) {
        return title
            .toLowerCase()
            .trim() //! El método trim( ) elimina los espacios en blanco en ambos extremos del string. L
            .split(/\s+/) //!El método split() divide un objeto de tipo ("String") en un array (vector), y si se le coloca como argumento (" ") debuelve cada elementp de la cadena  separados  en subcadenas.
            .join("-");//! El método join()une todos los elementos de una matriz (o un objeto similar a una matriz ) en una cadena y devuelve esta cadena.
    }
    // Add your code above this line
    var winterComing = urlSlug(globalTitle); // Should be "winter-i
}
{
    //! === Solucion 2 ===

    // Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. Aquí están los requisitos:

    // La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas

    // El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)

    // El resultado debe contener todas las letras minúsculas

    // El resultado no debe tener espacios

    // Cambia solo el código debajo de esta línea
    // Add your code below this line
    // the global variable
    var globalTitle1 = "A Mind Needs Books Like A Sword Needs A Whetstone";
    var globalTitle2 = "    Winter Is  Coming";

    // Add your code below this line
    function urlSlug(title) {
        return title
            .split(" ")//!El método split() divide un objeto de tipo ("String") en un array (vector) y si se le coloca como argumento (" ") debuelve cada elementp de la cadena  separados  en subcadenas.
            .filter((substr) => substr !== "")
            .join("-")//! El método join( )une todos los elementos de una matriz  un objeto similar a una matriz ) en una cadena y devuelve esta cadena.
            .toLowerCase();
    }
    // Add your code above this line
    // let winterComing1 = urlSlug(globalTitle1)
    // console.log(winterComing1); //
    // let winterComing2 = urlSlug(globalTitle2)
    // console.log(winterComing2); //
}

{
    // todo==> === PRUEBA ===

    //! Que pasa si elemino el metodo filter


    var globalTitle1 = "A Mind Needs Books Like A Sword Needs A Whetstone";
    var globalTitle2 = "    Winter Is  Coming";

    function urlSlug(title) {
        console.log(title)
        console.log(title)
        return title
            .split(" ")//!El método split() divide un objeto de tipo ("String") en un array (vector) y si se le coloca como argumento (" ") debuelve cada elementp de la cadena  separados  en subcadenas.
            // .filter((substr) => { //! omitiendo a filter
            //         console.log(substr);
            //         return substr !== "";
            //     })

            .join("-")
            .toLowerCase();
    }
    // Add your code above this line
    // let winterComing1 = urlSlug(globalTitle1)
    // console.log(winterComing1); //
    let winterComing2 = urlSlug(globalTitle2)
    console.log(winterComing2);
    console.log(winterComing2)
}

let a = 2 + 2;
console.log(a);
cls