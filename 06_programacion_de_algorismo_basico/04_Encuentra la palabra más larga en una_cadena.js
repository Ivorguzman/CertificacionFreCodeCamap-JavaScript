{
    //! Desafio
    ///    Devuelve la longitud de la palabra más larga en la oración proporcionada.

    //* Tu respuesta debe ser un número.
    function findLongestWordLength(str) {
        return str.length;
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");

}


{
    /// Solucion 1
    function findLongestWordLength(str) {
        str.split(" ");
        let longitudes = [];
        for (let i = 0; i < str.split(" ").length; i++) longitudes.push(str.split(" ")[i].length);
        return Math.max(...longitudes);
    }
    // console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
    // console.log(findLongestWordLength("What if we try a super-long word-such as otorhinolaryngology"));
}


{
    /// Solucion 2 Usando.reduce()
    function findLongestWordLength(str) {
       
        return str.split(" ")
            .reduce((acum, itemStr) => {
                return  Math.max(acum, itemStr.length);
            }, 0);
    }
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
    // console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
    // console.log(findLongestWordLength("Google do a barrel roll"));
}


{
    /// Solucion 3 Usando.map()

    function findLongestWordLength(str) {
        // let esUnArray = (str.split(" "));

        // console.log("---Pruebas---");

        // console.log(esUnArray);
        // console.log(Array.isArray(esUnArray));//true

        // console.log(...esUnArray);
        // console.log(Array.isArray(...esUnArray));//false

        // console.log(...str.split(" "));
        // console.log(Array.isArray(...str.split(" ")));//false

        // console.log(str.split(" "));
        // console.log(Array.isArray(str.split(" ")));//true

        // console.log(...str);
        // console.log(Array.isArray(...str));//false
        // console.log(str.length);

        // console.log("---./Pruebas---");
        return Math.max(...str.split(" ").map((itemActual, index) => {
            return itemActual.length;
        }));
    }
    // console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
    // console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
    // console.log(findLongestWordLength("Google do a barrel roll"));
}


{
    /// Solucion 4 Usando for 

    function findLongestWordLength(str) {
        let array = str.split(' ');
        let longitudActual = 0;
        let nombreDePalabra = "";

        for (let i = 0; i < array.length; i++) {
            if (array[i].length > longitudActual) {
                longitudActual = array[i].length;
                nombreDePalabra = array[i];

            }
        }
        console.log(nombreDePalabra);

        return longitudActual;
    }

    // console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
    // console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
    // console.log(findLongestWordLength("Google do a barrel roll"));

}
