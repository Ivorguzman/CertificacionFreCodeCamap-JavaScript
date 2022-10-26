{

    //! Invierte la cadena proporcionada.

    // Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

    // Tu resultado debe ser una cadena.

    function reverseString(str) {
        return str;
    }

    reverseString("hello");

}



//! === Solucion ===


//! Invierte la cadena proporcionada.

// Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

// Tu resultado debe ser una cadena.

{
    //! Solucion 1 Con implementacion de metodos

    function reverseString(str) {
        let newStr = str;
        return newStr
            .split("")  //split() transforma el String en un array (vector) 
            .reverse() // reverse() Invierte  la palabra
            .join("");//  El método join() une todos los elementos de una matriz en una cadena y  la devuelve 
    }


    console.log(reverseString("hello"));
};

{
    //! Solucion 2  con bucle for tradicional


    {
        //? Solucion 2.1

        function reverseString(str) {
            //! inzializando contador con lonjitud de el string
            let newString = [];
            console.log(str.split(""));
            console.log(str.length);
            for (let i = str.length - 1; i >= 0; i--) {
                newString.push(str[i]);
            }
            console.log(newString.join(""));
            return newString.join("");
        }
        reverseString("hello");
    }

    {
        //?  Solucion 2.2
        function invertirCadena(str) {

            let original = str.split("");
            // console.log(original);
            let invertido = [];

            for (i = 0; i < original.length; i++) {
                invertido[i] = original[((original.length - 1) - i)];
                console.log(invertido);
            }
            return invertido.join("");
        }

        /// console.log(invertirCadena("hello"));
        // console.log(invertirCadena("avion"));
    }

    {
        //? Solucion  2.3
        function invertirCadena(str) {

            let original = str.split("");
            let invertido = [];
            let contador = 0;
            for (i = original.length - 1; i >= 0; i--) {
                invertido[contador] = original[i];
                contador += 1;
                // console.log(invertido);
            }
            return invertido;
        }
        // console.log(invertirCadena("hello"));
    }
    {
        //? Solucion 2.4

        function invertirCadena(str) {
            let original = str.split("");
            let invertido = [];

            for (i = 0; i <= original.length - 1; i++) {
                invertido.unshift(original[i]);
                // console.log(i, invertido.unshift(original[i]));
            }
            return invertido;
        }

        console.log(invertirCadena("hola"));
    }

}


{
    //! Solucion 3  con Lopp forEach() con metodo unshift()

    function reverseString(str) {
        let newString = [];
        let array = str.split("");
        console.log(array);
        array.forEach((element) => {
            console.log(element);
            console.log(Array.isArray(element));
            console.log(Array.isArray(newString));
            newString.unshift(element);
        });
        console.log(newString.join(""));
        return newString.join("");
    }
    console.log(reverseString("hello"));
}


{
    //! Solucion 4  agregandolo un metodo a String con un  for sin aplicar metodos de array. (con acumulador)
    //? https:es.stackoverflow.com/questions/226746/invertir-un-string-sin-reverse-en-js

    String.prototype.reverseString = function () {
        console.log(this);
        let newString = "";
        for (let i = this.length - 1; i >= 0; i--) {
            newString += this[i];
            console.log(newString);
        }
        return newString;
    };
    let str = "hello";
    str.reverseString();

}



{
    //! Invirtiendo  una cadena de caracters con  map() 1  [str]

    let reverseString = (str) => {
        let arrayString = [str];
        console.log(arrayString);
        let resultado = arrayString.map((valor) => {
            let cadena = valor.split("").reverse().join("");
            console.log(cadena);
            return cadena;
        });
        return resultado.join("");
    };

    console.log(reverseString("hello"));
}

console.log("---------------------------------------");
{
    //! Invirtiendo  una cadena de caracters con  map() 2  str.split(" ")

    let reverseString = (str) => {
        let arrayString = str.split(" ");
        console.log(arrayString);
        let resultado = arrayString.map((valor) => {
            let cadena = valor.split("").reverse().join("");
            console.log(cadena);
            return cadena;
        });

        return resultado.join(" ");
    };

    console.log(reverseString("hello"));
}

{

    //! Solucion 4  agregandolo un metodo a Strin  con  map() 3 Usando elo objeto( This)

    String.prototype.reverseString = function () {
        console.log(this);
        let newString = this.split(" ").map((str) => {
            let resultado = str.split("").reverse().join("");
            return resultado;
        });
        return newString.join(" ");
    };
    let str = "hello";
    console.log(str.reverseString());
    console.log("avion".reverseString());

}



