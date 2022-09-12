
/* Nota:
 El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido.
 */


{

    // === Explicacion ===

    // Como se vio en el desafío anterior, la declaración const por sí sola no protege la información de la mutación. Para asegurar que tu información no cambie, JavaScript provee una función Object.freeze para prevenir la mutación de datos.

    // Cualquier intento de cambiar el objeto será rechazado, lanzando un error si el script se ejecuta en modo estricto (strict mode).
    'use strict';
    let obj = {
        name: "FreeCodeCamp",
        review: "Awesome"
    };

    obj.review = "Alex";
    obj.newProp = "Test";
    obj.name = 'Alex';
    // console.log(obj);

    // Las asignaciones obj.review y obj.newProp provocarán errores, porque nuestro editor se ejecuta en modo estricto por defecto, y la consola mostrará el valor { name: "FreeCodeCamp", review: "Awesome" }.
}

{
    // === Desafio ===
    // En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o borrar propiedades.


    function freezeObj() {
        const MATH_CONSTANTS = {
            PI: 3.14
        };
        // Cambia solo el código debajo de esta línea


        // Cambia solo el código encima de esta línea
        try {
            MATH_CONSTANTS.PI = 99;
        } catch (ex) {
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();

}

{
    // === Solucion ===
    // En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o borrar propiedades.


    function freezeObj() {
        const MATH_CONSTANTS = { PI: 3.14 };
        // Cambia solo el código debajo de esta línea
        
        Object.freeze(MATH_CONSTANTS)

        // Cambia solo el código encima de esta línea
        try {

            MATH_CONSTANTS.PI = 2.14; // No se permite este cambio
        }
        catch (ex) {
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
    PI

}