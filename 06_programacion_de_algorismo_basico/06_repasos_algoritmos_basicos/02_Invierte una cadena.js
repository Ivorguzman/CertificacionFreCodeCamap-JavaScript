
{
    //! solucion 1 bucle for con metodo push()

    function reverseString(str) {
        let newStr = str.slice();
        let arr = [];
        let i = newStr.length - 1;
        for (i; i >= 0; i--) {
            arr.push(newStr[i])
        }
        return arr.join('')
    };
    // console.log(reverseString("hello")); //olleh
    // console.log(reverseString("Howdy")); // ydwoH.
    // console.log(reverseString("Greetings from Earth")  ); //  htraE morf sgniteerG.
}

{
    //! solucion 2  bucle for con metodo unshift()
    function reverseString(str) {
        let newStr = str.slice();
        let arr = [];
        let l = newStr.length
        for (let i = 0; i < l; i++) {
            arr.unshift(newStr[i])
        }
        return arr.join('');
    }
    // console.log(reverseString("hello")); //olleh
    // console.log(reverseString("Howdy")); // ydwoH.
    // console.log(reverseString("Greetings from Earth")); //  htraE morf sgniteerG.
}

{
    //! solucion 2.1 utilizacion de lops metodos  split(), reverse() y join()

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    console.log(reverseString("hello")); //olleh
}




{
    //! solucion 3  bucle forEach() con metodo push()

    function reverseString(str) {
        let arr = str.split("").reverse();
        let newArr = [];
        console.log(Array.isArray(arr));
        arr.forEach(arrElement => newArr.push(arrElement.split("")))
        return newArr.join('')
    };

    console.log(reverseString("hello"));
    console.log(reverseString("Greetings from Earth")); //  htraE morf sgniteerG.
}

{
    //! solucion 4  bucle forEach() con metodo unshift()

    function reverseString(str) {
        let arr = str.split("");
        let newArr = [];
        console.log(Array.isArray(arr));
        arr.forEach(arrElement => newArr.unshift(arrElement.split("").reverse()))
        return newArr.join('')
    };
    console.log(reverseString("hello"));
    console.log(reverseString("Greetings from Earth")); //  htraE morf sgniteerG.

}

{
    //! solucion   bucle for of con metodo unshift()

    function reverseString(str) {
        let arr = str.split('');
        let newArr = [];
        console.log(Array.isArray(newArr));
        for (let elementoArr of str) {
            newArr.unshift(elementoArr)
        }

        return newArr.join('');
    };
    console.log(reverseString("hello"));
    console.log(reverseString("Greetings from Earth"));
}

{
    //! solucion   bucle for of con metodo unshift()

    function reverseString(str) {
        let resultado = [];
        for (let newStr of str) {
            console.log(resultado.unshift(newStr));
        }
        return resultado.join('');
    };
    console.log(reverseString("hello"));
}

{
    //! solucion   bucle for of con metodo push()

    function reverseString(str) {
        let resultado = [];
        for (let newStr of str) {
            console.log(resultado.push(newStr));
        }
        return resultado.reverse().join('');
    };
    console.log(reverseString("hello"));
}


{

    //! Utiliaacion de los metodos .keys() y .value() del objeto Object para iterar un objeto con le bucle for (let... of...)

    {

        //* Metodo 1

        const cliente01 = {
            nombre: 'Juam',
            apellido: 'Perez',
            edad: '45',
            domicilio: 'Paseo del rey 1400',
            localidad: 'Capital Federal'
        }
        for (let elementoDeCliente of Object.keys(cliente01)) {
            console.log(`${elementoDeCliente}: ${cliente01[elementoDeCliente]}`)
        }
    }



    {

        //* Metodo 2
        const cliente01 = {
            nombre: 'Juan',
            apellido: 'Perez',
            edad: '45',
            domicilio: 'Paseo del rey 1400',
            localidad: 'Capital Federal'
        }

        const campo = Object.keys(cliente01);
        let valor = Object.values(cliente01);



        for (let encabezado of campo) {
            console.log(`${encabezado}:${cliente01[encabezado]}`)
        }

    }







}
