{
    // Para ayudarnos a crear funciones más flexibles, ES6 introduce parametros por defecto para funciones.

    // Echa un vistazo, al siguente código:

    const greeting = (name = "Anonymous", apellido = "Guzman") => "Hello " + " " + name +" "+  apellido;
    console.log(greeting("John"));
    console.log(greeting());

    // La consola mostrará las cadenas Hello John y Hello Anonymous.

    // El parámetro por defecto entra en juego cuando el argumento no es especificado (es indefinido). Como puedes ver en el

    // ejemplo anterior, el parámetro name recibirá su valor por defecto Anonymous cuando no proveas un valor para el

    // parámetro. Puede agregar valores por defecto para tantos parámetros como desees.
}

{
    // === Desafio ===

    // Modifica la función increment agregando parámetros por defecto para que sume 1 a number si value no se especifica.

    // Cambia solo el código debajo de esta línea
    {
        const increment = (number, value) => number + value;
    }
    // Cambia solo el código encima de esta línea
}

{
    // === Solucion ===
    // Cambia solo el código debajo de esta línea
    {
        const increment = (number, value = 1) => number + value;
        console.log(increment(5))
        console.log(increment(5, 5))

    }
    // Cambia solo el código encima de esta línea
}