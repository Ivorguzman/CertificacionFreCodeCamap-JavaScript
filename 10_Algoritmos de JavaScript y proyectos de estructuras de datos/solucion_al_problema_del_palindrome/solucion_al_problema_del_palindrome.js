// Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

// Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.;
{
    // ! SOLUCION ideoneao

    function palindrome(str) {
        if (typeof (str) !== "string") { // Manejo de exepcion  no es un String
            throw TypeError(" AMIGO El parametro debe ser un string.");
        }
        // regexp:match():realiza la búsqueda de coincidencias de una expresión regular en una cadena, devolviendo las subcoincidencias halladas como resultado.
        let exprecion = str.toLowerCase().match(/[a-z\d]/g).reverse();// verifica la coincidencia de todas las letras en miniuscula (a-z) mas los digitos del (0-9) en toda la expresion
        // console.log(exprecion);
        console.log(str);
        console.log(exprecion);
        console.log(exprecion.join(''));
        console.log(exprecion.reverse().join(''));

        return exprecion.join('') === exprecion.reverse().join('');
    }
    // console.log(palindrome(['qwe']));
    // console.log(palindrome(8));
    // console.log(palindrome("eye"));
    // console.log(palindrome("eye"));
    // console.log(palindrome("_eye"));
    // console.log(palindrome("race car"));
    // console.log(palindrome("not a palindrome"));
    // console.log(palindrome("A man, a plan, a canal. Panama"));
    // console.log(palindrome("never odd or even"));
    // console.log(palindrome("nope"));
    // console.log(palindrome("almostomla"));
    console.log(palindrome("My age is 0, 0 si ega ym."));
    // console.log(palindrome("1 eye for of 1 eye."));
    // console.log(palindrome("0_0 (: /-\ :) 0-0"));
    // console.log(palindrome("five|\_/|four"));
}

console.log("-----------");
{
    //! SOLUCION MUYYY POBRE pero y con fallas  buen ejemplo de for anidado

    function palindrome(str) {
        let strX = str.match(/[a-z\d]/g);
        let strY = str.match(/[a-z\d]/g).reverse();
        let palindrome = [];
        console.log(str);
        console.log(strY);
        console.log(strX);
        console.log("" + strX.join(""));
        console.log("" + strY.join(""));
        for (i = strX.length; i > 0; i--) {
            // console.log(" VALOR DE i ==> " + i);
            for (j = 0; j < strY.length; j++) {
                // console.log("    Valor de J ==>" + j);
                if (strX[j] === strY[j]) {
                    palindrome[j] = strX;
                    // console.log(palindrome + " Es un palindrome");
                    return true;
                } else {
                    let noEsPalindrome = str + " No es un palindrome";
                    // console.log(noEsPalindrome);
                    return false;
                }


            }

        }
    }
}

// console.log(palindrome("eye"));
// console.log(palindrome("eye"));
// console.log( palindrome("_eye"));
// console.log(palindrome("race car"));
// console.log(palindrome("not a palindrome"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("never odd or even"));
// console.log(palindrome("nope"));
// console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
// console.log(palindrome("1 eye for of 1 eye."));
// console.log(palindrome("0_0 (: /-\ :) 0-0"));
// console.log(palindrome("five|\_/|four"));







