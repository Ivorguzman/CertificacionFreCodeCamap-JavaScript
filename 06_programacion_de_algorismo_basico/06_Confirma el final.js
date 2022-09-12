{
    // !  Ejercicio 1

    // Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

    // Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, nos gustaría que usaras uno 

    function confirmEnding(str, target) {
        return str;
    }

    // confirmEnding("Bastian", "n");

}
{
    // !  Solucion 1

    // Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target). 
    function confirmEnding(str, target) {
        // console.log(str.length);
        // console.log(target.length);
        console.log(str.slice(str.length - target.length));// 28 - 4 = 24
        // console.log(str.slice(24));

        return str.slice(str.length - target.length) === target;
    }

    // console.log(confirmEnding("He has to give me a new name", "name"));
    // console.log(confirmEnding("Congratulation", "on"));
    // console.log(confirmEnding("Open sesame", "sage")); 

}
{
    // !  Solucion 2

    // Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target). 


    /// Explicación del código

    /// Si se proporciona un número negativo como primer parámetro para , el desplazamiento se toma hacia atrás desde el final de la cadena.slice()

    function confirmEnding(str, target) {
        // "No te Rinddas, confia en DIOS, y saldras victoriozo"
        // console.log(str.length);
        // console.log(target.length);
        console.log(str.slice(str.length - target.length));// 28 - 4 = 24
        // console.log(str.slice(24));

        return str.slice(-target.length) === target;
    }

    console.log(confirmEnding("He has to give me a new name", "name"));
    console.log(confirmEnding("Congratulation", "on"));
    console.log(confirmEnding("Open sesame", "sage"));
}


