{

    //!      Ejercicio


    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {//size es el numero de elementos que va a tener cada grupo
        return arr;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);
}

{
    //! Solucion 1 con bucle for i
    //*     Monito Trocitos

    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

    function chunkArrayInGroups(arr, size) {
        let temp = [], result = [];// crea dos variables temporal y otra para guardar los resultados
        let i = 0;// crea una variable para controlar el numero de iteraciones
        let l = arr.length; // guarda la longitud del arreglo
        for (; i < l; i++) {// crea un ciclo para recorrer el arreglo
            if (i % size !== size - 1) temp.push(arr[i]);// si el indice no es multiplo de size, agrega el elemento al arreglo temporal
            else {// si el indice es multiplo de size, agrega el arreglo temporal al arreglo resultado
                temp.push(arr[i]);
                result.push(temp);
                temp = [];// 
            }
        }

        if (temp.length !== 0) result.push(temp);// si el arreglo temporal no esta vacio, agrega el arreglo temporal al arreglo resultado
        return result;
    }
    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
}
{
    //! Solucion 2  Operador Ternario ==>

    /// NOTA: ==> Ojo ==>  No esta funcionando bien, no se porque, pero funciona con el codigo de arriba
    // Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.
    function chunkArrayInGroups(arr, size) {
        let temp = [], result = [];// crea una variable temporal y otra para guardar los resultados
        let i = 0;// crea una variable para controlar el numero de iteraciones
        let l = arr.length;// guarda la longitud del arreglo
        console.log(1 % size)
        for (; i < l; i++) {// mientras el indice sea menor que la longitud del arreglo
            (i % size !== size - 1) ? temp.push(arr[i]) // si el indice no es multiplo de size, agrega el elemento al arreglo temporal
                :
                temp.push(arr[i]), result.push(temp), temp = [];// si el indice es multiplo de size, agrega el arreglo temporal al arreglo resultado
        }
        return (temp.length !== 0) ? result.push(temp) : result;// si el arreglo temporal no esta vacio, agrega el arreglo temporal al arreglo resultado
    }
    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
}


{
    //! Solucion 3   con splice ()==>

    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        let l = arr.length;
        let i = 0;
        console.log(l)
        for (; i < arr.length;) {
            newArr.push(arr.splice(i, size))
        }
        return newArr
    }

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
}

{
    //! Solucion 3   con splice ()==>

    function chunkArrayInGroups(arr, size) {
        // Break it up.
        let newArr = [];
        let i = 0;

        while (i < arr.length) {
            newArr.push(arr.slice(i, i + size));
            i += size;
        }
        return newArr;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
}

{
 //! Solucion    con splice () y Recursividad ==>

    function chunkArrayInGroups(arr, size) {
        if (arr.length <= size) {
            return [arr];
        } else {
            return [arr.slice(0, size)].concat(
                chunkArrayInGroups(arr.slice(size), size)
            );
        }
    }

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
}