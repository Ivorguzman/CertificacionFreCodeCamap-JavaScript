{
    // Combine dos arreglos usando el método concat
    // Concatenación significa unir elementos de extremo a extremo. JavaScript ofrece el concatmétodo tanto para cadenas como para matrices que funcionan de la misma manera. Para matrices, el método se llama en uno, luego se proporciona otra matriz como argumento para concat, que se agrega al final de la primera matriz. Devuelve una nueva matriz y no muta ninguna de las matrices originales. Aquí hay un ejemplo:
    {
        const arr = [1, 2, 3];
        const arr2 = [4, 5, 6];
        arr.push(...arr2);

        console.log(' Valor de [arr] con push() MUTA AL ARREGLO  ORIGINA ==> ' + arr);
    }
    console.log('-----------');
    {
        const arr = [1, 2, 3];
        const arr2 = [4, 5, 6];
        console.log(arr.concat(arr2));
        console.log(' Valor de [arr] con concat()  NO AL ARREGLO  ORIGINA  MUTA ==> ' + arr);
    }


    // La matriz devuelta sería [1, 2, 3, 4, 5, 6].


}

{

    /*👉=== Desafio ===👈*/

    const first = [1, 2, 3];
    const second = [4, 5];

    function nonMutatingConcat(original, attach) {
        // Only change code below this line


        // Only change code above this line
    }


    nonMutatingConcat(first, second);
}



{

    /*👉=== Solucion ===👈*/

    // Use el concatmétodo en la nonMutatingConcatfunción para concatenar attachhasta el final de original. La función debe devolver la matriz concatenada.

    // Use el  método concat en la  función nonMutatingConcat para concatenar attachhasta el final de original. La función debe devolver la matriz concatenada.
    function nonMutatingPush(original, newItem) {
        // Cambia solo el código debajo de esta línea
        //return original.push(newItem);
        console.log(original.concat(newItem));
        return original.concat(newItem);

        // Cambia solo el código encima de esta línea
    }

    const first = [1, 2, 3];
    const second = [4, 5];
    nonMutatingPush(first, second);


}