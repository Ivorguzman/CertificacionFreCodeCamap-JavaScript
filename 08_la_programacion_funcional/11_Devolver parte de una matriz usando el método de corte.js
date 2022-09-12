{
    // Devolver parte de una matriz usando el método de corte
    // El  método slice devuelve una copia de ciertos elementos de una matriz. Puede tomar dos argumentos, el primero proporciona el índice de dónde comenzar el segmento, el segundo es el índice de dónde finalizar el segmento (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio de la matriz hasta el final, que es una manera fácil de hacer una copia de toda la matriz. El slicemétodo no muta la matriz original, sino que devuelve una nueva.

    // Aquí hay un ejemplo:

    const arr = ["Cat", "Dog", "Tiger", "Zebra"];
    const newArray = arr.slice(1, 3);

    // newArraytendría el valor ["Dog", "Tiger"].
}

{
    /*👉===Desafio===👈*/

   // Use el método slice en la función  sliceArray para devolver parte de la matriz anim dados los beginSlice índices endSlice proporcionados. La función debe devolver una matriz.
    function sliceArray(anim, beginSlice, endSlice) {
        // Only change code below this line


        // Only change code above this line
    }

    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);


}

{
    /*👉===Solucion===👈*/

    // Use el método slice en la función  sliceArray para devolver parte de la matriz anim dados los beginSlice índices endSlice proporcionados. La función debe devolver una matriz.
    function sliceArray(anim, beginSlice, endSlice) {
        // Only change code below this line
        return anim.slice(beginSlice, endSlice)
        // Only change code above this line
    }

    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);


}


{
    // Problema Explicación
    // Utilice el método slice en la función sliceArray para devolver parte de la matriz anim dados los índices beginSlice y endSlice proporcionados. La función debe devolver una matriz.

    var arr = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    arr.slice([index - to - begin - slice], [index - to - end - slice]);

    // Soluciones
    // Solución 

    function sliceArray(anim, beginSlice, endSlice) {
        // Add your code below this line
        return anim.slice(beginSlice, endSlice);
        // Add your code above this line
    }
    var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);


    // Código Explicación
    // La función se puede escribir simplemente escribiendo una línea de código: una declaración de retorno. Al igual que en el ejemplo dado, corte la matriz que la función toma como parámetro usando los parámetros beginSlicey endSlicecomo parámetros para el slice()método.

    // Recuerde la estructura del slice()método:
}