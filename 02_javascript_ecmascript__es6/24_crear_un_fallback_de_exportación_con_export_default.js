{
    // En la lección export, aprendiste sobre la sintaxis conocida como named export. Esto te permitió hacer disponibles múltiples funciones y variables para usar en otros archivos.

    // Aquí hay otra sintaxis export que necesitas saber, conocida como export default. Usualmente utilizarás esta sintaxis, si es sólo un valor el que está siendo exportado desde un archivo. También es utilizado para crear valores fallback para un archivo o módulo.

    // A continuación hay ejemplos usando export default:

    /*👉 función nombrada👈*/
    export default function add(x, y) {
        return x + y;
    }


    /*👉una función anónima (Expresada).👈*/
    export default add = function (x, y) {
        return x + y;
    }


    /*👉 La primera es una función nombrada asignada a una variable 👈*/
    export default add = function sumar(x, y) {
        return x + y;
    }
    // La primera es una función nombrada, y la segunda es una función anónima.

    /*👉Ya que export default es usado para declarar un valor fallback para un módulo o archivo👈*/ // , sólo puedes tener un valor que sea exportación por defecto en cada módulo o archivo. Además, no puedes usar export default con var, let, o const
}


{

    // === Desafio ===
    // La siguiente función debe ser el valor fallback para el módulo. Por favor, añade el código necesario para hacerlo.

    function subtract(x, y) {
        return x - y;
    }

}

{

    // === Solucion ===
    // La siguiente función debe ser el valor fallback para el módulo. Por favor, añade el código necesario para hacerlo.

    export default function subtract(x, y) {
        return x - y;
    }



}