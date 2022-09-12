

{
    //! Ejercicio 

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.
    function truncateString(str, num) {
        return str;
    }

    truncateString("A-tisket a-tasket A green and yellow basket", 8);
}






{
    //!solucion 1  slice()

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.


    function truncateString(str, num) {
        console.log();
        console.log(str.length, '>', num, '=', str.length > num);
        if (str.length > num) {
            console.log(str.slice(0, num) + '...');
            return str.slice(0, num) + '...';
        }
        else {
            console.log(str);
        }
        return str;
    }
    truncateString("A-tisket a-tasket A green and yellow basket", 8);
    truncateString("Peter Piper picked a peck of pickled peppers", 11);
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
    truncateString("A-", 1);
    truncateString("Absolutely Longer", 2);
}

{

    //!solucion 2  con slice  y ternario

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.


    function truncateString(str, num) {
        return str.length > num ? str.slice(0, num) + "..." : str;
    }
    // console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
}




{

    //!solucion 3  con split, splice, join() y ternario

    ///  Recorta una cadena

    // Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.


    function truncateString(str, num) {
        return str.length > num ? `${str.split("").splice(0, num).join("")}...` : str;

    }
    truncateString("A-tisket a-tasket A green and yellow basket", 8);
    truncateString("Peter Piper picked a peck of pickled peppers", 11);
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
    truncateString("A-", 1);
    truncateString("Absolutely Longer", 2);
}




