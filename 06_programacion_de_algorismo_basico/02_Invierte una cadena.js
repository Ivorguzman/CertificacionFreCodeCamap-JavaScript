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
            return invertido.join(" ");
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
            return invertido.join(" ");
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
                return invertido.join(" ");
            }

            console.log(invertirCadena("hola"));
        }
        {
            //? Solucion 2.5

            function invertirCadena(str) {
                const original = [...str]; // remplazando el uso del metodo split() 
                const invertido = [];

                for (i = 0; i <= original.length - 1; i++) {
                    invertido.unshift(original[i]);
                }
                return invertido.join(" ");
            }

            console.log(invertirCadena("ivor"));
        }

    }



}
{

    //! Solucion 3  con Loop forEach() 

    {
        //? Solucion 3.1
        function reverseString(str) {
            let newString = [];
            let array = str.split("");
            array.forEach((element) => {
                newString.unshift(element);
            });
            return newString.join("");
        }
        reverseString("hello");
    }

    {
        //? Solucion 1
        function invertirCadena(str) {
            let original = [...str];
            let invertido = [];
            original.forEach((_, i) => {
                invertido[i] = original[(original.length - 1) - i];
            });
            return invertido.join(" ");
        }
        console.log(invertirCadena("hola"));
        console.log(invertirCadena("ivor"));
    }

    {
        //? Solucion 2
        function invertirCadena(str) {
            let original = [...str];
            let invertido = [];
            original.forEach((elemento, i) => {
                console.log(elemento, i);
                invertido.unshift(elemento);
                console.log(invertido, i);
            });
            return invertido.join(" ");
        }

        // invertirCadena("hola");
        // console.log(invertirCadena("hola"));
        console.log(invertirCadena("ivor"));

    }

    {
        //? Solucion 3
        function invertirCadena(str) {
            let original = [...str];
            console.log(original);
            let invertido = [];
            original.forEach((_, i) => {
                invertido.push(original[(original.length - 1) - i]);
            });
            return invertido.join(" ");
        }

        // invertirCadena("hola");
        // console.log(invertirCadena("hola"));
        console.log(invertirCadena("ivor"));

    }





}


{
    //! Solucion 4 agregandolo como  metodo a el Objeto String || for sin aplicar metodos de array||. (con acumulador)


    {
        //? Solucion  0

        //? https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects

        // ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

        String.prototype.invertirCadena = function () {
            //             console.log(this);
            //             console.log([this]);
            //             console.log([...this]);
            //             console.log(this.split(""));
            //             console.log(this.split("") == [...this]);
            //             console.log('ivor'.length);
            // 
            // 
            //             console.log("-------------");
            // 
            //             console.log(...'guzman');
            //             console.log([...'guzman']);
            //             console.log({ ...'guzman' });

            let invertido = "";


        };
        'ivor'.invertirCadena();
        'pedro'.invertirCadena();
    }
    {
        //? Solucion 1
        String.prototype.invertirCadena = function () {
            console.log(this);
            let invertido = "";
            for (let i = this.length - 1; i >= 0; i--) {
                invertido += this[i];
                console.log(invertido);
            }
            return invertido;
        };
        'Zambrano'.invertirCadena();
    }

    {
        //?  Solucón 2

        console.log(this);

        String.prototype.invertirCadena = function () {
            console.log([...this].reverse().join(""));
        };
        'ivor'.invertirCadena();
        console.log("ivor".length);;
        // 'pedro'.invertirCadena2();
    }


    {
        // ? Solución 3

        String.prototype.invertirCadena = function () {
            // console.log(this);
            let invertido = [];
            let contador = 0;
            for (let i = this.length - 1; i >= 0; i--) {
                console.log(this[i]);
                invertido[contador += 1] = this[i];
                console.log(invertido);
            }
            return invertido.join("");
        };
        console.log('Zambrano'.length);
        console.log('Zambrano'.invertirCadena());
    }

    {
        // ? Solución 4

        String.prototype.invertirCadena = function () {
            console.log(this);
            let invertido = "";
            for (let i = this.length - 1; i >= 0; i--) {
                console.log(invertido);
                invertido += this[i];
            }
            return invertido;
        };
        console.log('Zambrano'.length);
        console.log('Zambrano'.invertirCadena());
    }



}


{

    //! Invirtiendo  una cadena de caracters con  map()

    {
        //? Solucion 1

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

    {
        //? Solucion 2

        let reverseString = (str) => {
            let arrayString = [...str];
            console.log(arrayString);
            let resultado = arrayString.map((valor) => {
                let cadena = valor.reverse().join("");
                console.log(cadena);
                return cadena;
            });
            return resultado.join("");
        };

        console.log(reverseString("hello"));
    }


    {
        //? Solucion 3

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

        //? Solucion 4

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
}


