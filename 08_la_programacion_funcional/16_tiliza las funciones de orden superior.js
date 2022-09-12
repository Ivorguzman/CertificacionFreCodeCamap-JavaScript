{

    //! Explicacion



    //! Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo

    // Ahora que has superado algunos desafíos usando funciones de orden superior como map(), filter(), y reduce(), ahora puedes aplicarlos para resolver un desafío más complejo.
}



{
    //! === Desafio ===

    // Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].

    //! Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach().

    const squareList = arr => {
        // Cambia solo el código debajo de esta línea
        return arr;
        // Cambia solo el código encima de esta línea
    };

    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    //* console.log(squaredIntegers);



}
{
    //! === Solucion ===

    //* Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].

    //! Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach().

    const squareList = (arr) =>
        // Cambia solo el código debajo de esta línea
        arr
            .filter((itemFilter) => {
                if (typeof itemFilter == "number" && Number.isInteger(itemFilter) && itemFilter >= 0) {
                    return itemFilter;
                }
            })
            .map((itemMap) => Math.pow(itemMap, 2))
    const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
    // console.log(squaredIntegers);// es la invocacion de la funcion almacenada en la constante
}
{
    //! solucion codeCamp 1

    const squareList = function (arr) {
        // Only change code below this line
        return arr
            .filter(function (num) {
                return num > 0 && num % parseInt(num) === 0;
            })
            .map((num) => Math.pow(num, 2));
        // Only change code above this line
    };

    const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
    // console.log(squaredIntegers);

}

{
    //! solucion codeCamp 2

    const squareList = arr => {
        return arr.reduce((sqrIntegers, num) => {
            return Number.isInteger(num) && num > 0
                ? sqrIntegers.concat( Math.pow(num, 2))
                : sqrIntegers;
        }, []);
    };

    const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
    console.log(squaredIntegers);
}
{
     //! solucion codeCamp 3
     const squareList = arr => {
        // Cambia solo el código debajo de esta línea
        return arr
        .filter((arritem) => arritem % 1 === 0 && arritem >0 ) 
        .map((item) => item * item)
        // Cambia solo el código encima de esta línea
      };
      
      const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
      console.log(squaredIntegers);
      
      
        

}
{

   //* === Practica del resto %
    function is_decimal(val){
        if (val%1 == 0){
            console.log(val%1 === 0);
            console.log(val+" es un número entero");
        }else{
            console.log(val%1 === 0);
            console.log(val+" es un número decimal");
        }
    }
    
    is_decimal(-4);
}
