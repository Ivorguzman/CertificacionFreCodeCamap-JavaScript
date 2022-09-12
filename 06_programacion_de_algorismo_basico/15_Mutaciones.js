{

    //!Ejercicio

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

    // Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

    // Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

    // Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.

    function mutation(arr) {
        return arr;
    }

    mutation(["hello", "hey"]);

}
{

    //!solucion 

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

    // Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

    // Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

    // Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.

    function mutation(arr) {
        return arr;
    }

    mutation(["hello", "hey"]);

}



{

    //!solucion 1

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.



    function mutation(arr) {
        let index_01 = arr[1].toLowerCase();
        let index_02 = arr[0].toLowerCase();

        let i = 0;
        let l = index_01.length;// longitud de la cadena

        for (; i < l; i++) {
            if (index_02.indexOf(index_01[i]) === -1) return false;// si no encuentra la letra en el indice i
        }
        return true;
    }

    console.log(mutation(["hello", "hey"]));

}


{



    //!solucion  2 con every() con   ES6

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.


    function mutation(arr) {
        return arr[1]// seleccionamos el segundo elemento del arreglo
            .toLowerCase()// convierte todo a minuscula
            .split("")//convertimos el segundo elemento del arreglo en un arreglo
            .every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1);//every() devuelve true si todas las letras del segundo elemento del arreglo estan presentes en el primer elemento del arreglo
    }

    console.log(mutation(["hello", "hey"]));

    // Nota:
    // El método every ejecuta la función callback dada una vez por cada elemento presente en el arreglo hasta encontrar uno que haga retornar un valor falso a callback ,every no modifica el arreglo sobre el cual es llamado.

}





{




    //!solucion  3 con incluide ()

    /// Mutaciones

    // Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.


    function mutation([target, test], i = 0) {// i = 0 es para que no se repita el ciclo
        target = target.toLowerCase();//convertimos todo a minusculas
        test = test.toLowerCase();//convertimos todo a minusculas
        return i >= test.length// si i es mayor o igual a la longitud de test
            ? true
            : !target.includes(test[i])// si no incluye la letra
                ? false// devuelve false
                : mutation([target, test], i + 1);// si no devuelve false, y se repite el ciclo
    }



    console.log(mutation(["hello", "hey"]));


}



{




    //! Solucion 4 map()

    function mutation(arr) {
        word = arr[0].toLowerCase();
        letters = arr[1].toLowerCase().split("");
        wrong = false;


        letters.map(function (letter) {
            if (word.indexOf(letter) == -1) {
                wrong = true;
            }

        });

        if (wrong) {
            return false;
        }

        return true;
    }

    console.log(mutation(["hello", "hey"]));

}




{
    //! Solucion  5 Expre3ciones regulares

    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.



    function mutation(arr) {
        var re = new RegExp('[^' + arr[0] + ']', "i");// crea una expresion regular que no contenga la primera palabra
        return !re.test(arr[1]);// si no encuentra la palabra devuelve true
    }
}









{
    function mutation(arr) {
        console.log(arr[0].toLowerCase());
        console.log(arr[1].toLowerCase());
        for (let i; i < arr[1]; i++){
            
        }
        return arr;



    }

    console.log(mutation(["Hello", "hey"]));
}














































