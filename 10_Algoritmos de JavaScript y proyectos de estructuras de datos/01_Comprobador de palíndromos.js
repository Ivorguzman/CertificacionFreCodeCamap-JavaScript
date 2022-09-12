{
    ///     Comprobador de palíndromos

    // Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

    // Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

    // Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

    // Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

    // También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.

    function palindrome(str) {
        return true;
    }

    palindrome("eye");

}

{

    //! Solucion  1 con expresiones fegulares


    function palindrome(str) {
        if (typeof (str) !== "string") {
            throw TypeError(" AMIGO El parametro debe ser un string.");
        }

    let exprecion = str.toLowerCase().match(/[a-z\d]/g).reverse(); // toLowerCase() convierte todo en minusculas, match() busca una exprecion regular, reverse() invierte el arreglo
        return exprecion.join('') === exprecion.reverse().join('');
    }

    console.log(palindrome("My age is 0, 0 si ega ym."));
    console.log(palindrome("1 eye for of 1 eye."));
    console.log(palindrome("0_0 (: /-\ :) 0-0"));
    console.log(palindrome("five|\_/|four"));

   
}

