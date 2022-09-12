{
    // !  Ejercicio

    /// Haz que la primera letra de una palabra este en mayúscula

    // Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

    // Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

    function titleCase(str) {
        return str;
    }

    titleCase("I'm a little tea pot");

}



{
    // !  Solucion  con  Bucle for()

    function titleCase(str) {
        let newStr = str.toLowerCase().trim().split(' ');
        let longitud = str.split(' ').length;
        let resultado = [];
        for (let i = 0; i < longitud; i++) {
            // resultado.push(newStr[i][0].toUpperCase() + newStr[i].slice(1));
            resultado.push(newStr[i][0].toUpperCase() + newStr[i].substr(1));
        }
        return resultado.join(' ');
    }
    console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot.;
}




{

    // !  Solucion 2 con map()

    /// El método  substr()devuelve los caracteres de una cadena que comienza en una localización especificada y de acuerdo al número de caracteres que se indicarán.   === cadena.substr(inicio[, longitud] )===


    /// El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).  === str.trim() ===


    function titleCase(str) {
       return  str.toLowerCase().trim().split(' ').map((item) => { return item[0].toUpperCase() + item.substr(1); }).join(' ');

    }

    console.log(titleCase("I'm a little tea pot"));

}

{
    // !  Solucion 2  (Expresiones regulares) Implementación compatible con ES6:


    function titleCase(str) {
        return str
            .toLowerCase()
            .replace(/(^|\s)\S/g, L => L.toUpperCase());
    }


    //? Ponga en minúsculas toda la cadena usando str.toLowerCase(). Reemplace el primer carácter de cada palabra a mayúsculas usando .replace. Busque el carácter al comienzo de cada palabra, es decir, coincida con cualquier carácter que siga a un espacio o coincida con el primer carácter de toda la cadena, utilizando el siguiente patrón. Explicación de expresiones regulares: encuentre todos los caracteres que no sean espacios en blanco (\ S) al comienzo de la cadena (^) o después de cualquier carácter de espacio en blanco (\ s) El modificador g busca otro patrón de palabras en toda la cadena y los reemplaza. Esta solución funciona con símbolos nacionales y letras acentuadas, como se ilustra en los siguientes ejemplos de caracteres internacionales: ‘бабушка

}


{
    // !  Solucion 3 con for of
    let newStr = [];
    let newStr2 = [];
    let resultado = [];
    function titleCase(str) {
        newStr = str.toLowerCase().trim().split(' ');
        console.log(newStr);
        // console.log(newStr);
        for (const Mayuscula of newStr) {
            //  resultado.push( newStr = Mayuscula[0].toUpperCase() + Mayuscula.slice(1));
            resultado.push(newStr = Mayuscula[0].toUpperCase() + Mayuscula.substr(1));
          
        }
        console.log(resultado.join(' '));
        return resultado.join(' ');
    }

    console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout.
    // console.log( titleCase("i'm a little tea pot"))
}