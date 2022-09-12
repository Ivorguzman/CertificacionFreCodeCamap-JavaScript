
{
    // === Explicacio ===

    // Un patrón común en JavaScript es la ejecución de una función apenas declarada
    (function (item) {
        console.log("Chirp, chirp!");
        console.log(item);
      
      })('Serie de television Chirp, chirp patrulla embicicletada');

    // Esta es una expresión de función anónima que se ejecuta de inmediato y produce Chirp, chirp! inmediatamente.on o sin parametro

    // Ten en cuenta que la función no tiene nombre y que no se almacena en un valor. Los dos paréntesis () "al final que puede tene o no parametro".  de la expresión de la función hacen que se ejecute o invoque de forma inmediata. Este patrón se conoce como una expresión de función inmediatamente invocada o IIFE (por sus siglas en inglés).

}


{
    // === Desafio ===

    // Reescribe la función makeNest y elimina su llamada, por lo que es una expresión de función anónima inmediatamente invocada (IIFE).
    function makeNest() {
        console.log("A cozy nest is ready");
    }

    makeNest();
}
{
    // === Solucion ===

    // Reescribe la función makeNest y elimina su llamada, por lo que es una expresión de función anónima inmediatamente invocada (IIFE).


    
    (function () {
        console.log("A cozy nest is ready")
    })();
    
}