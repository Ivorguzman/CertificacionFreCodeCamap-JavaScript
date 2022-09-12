{
    //! Ejercicio

    ///  Repite una cadena repite una cadena

    // Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().

    function repeatStringNumTimes(str, num) {
        return str;
    }

    repeatStringNumTimes("abc", 3);



}

{

    //! Solcion 1
    function repeatStringNumTimes(str, num) {
        let contador = str;
        if (num <= 0) {
            contador = "";
        }
        else if (isNaN(num) ) return "Por favor introdusca un numero";
        else {
            for (let i = 1; i < num; i++) {
                contador += str;
            }
        }
        return contador;
    }

    // console.log(repeatStringNumTimes("abc", 3)); //debe devolver la cadena abcabcabc
    console.log(repeatStringNumTimes("*", '3'));
    // repeatStringNumTimes("abc", 4);//debe devolver la cadena abcabcabcabc.

    // console.log(repeatStringNumTimes("abc", 2));// debe devolver "".
}


{

    //! Solcion 2
    function repeatStringNumTimes(str, num) {
        let acumulado = "";
        for (let i = 0; i < num; i++) {
            acumulado += str;
        }
        str = acumulado;
        return str;
    }

    console.log(repeatStringNumTimes("abc", 1));
    console.log(repeatStringNumTimes("abc", -2));

    console.log(repeatStringNumTimes("*", 3));
    console.log(repeatStringNumTimes("abc", 3));

}


{
    //! Solcion 3

    ///  Repite una cadena repite una cadena

    // Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().

    function repeatStringNumTimes(str, num) {
        let acumulado = "";
        if (isNaN(num)) return "Por favor introdusca un numero";
        for (let i = 1; i < num; i++) {
            acumulado = acumulado + str;
        }
        return acumulado;
    }
    // console.log(repeatStringNumTimes("abc", -2));
    console.log(repeatStringNumTimes("abc", 3));
    console.log(repeatStringNumTimes("*", 'o'));

}

