
{
    // *===explicacion===

    // Mientras que slice()nos permite ser selectivos sobre qué elementos de un arreglo copiar, entre otras tareas útiles, el nuevo operador de propagación de ES6 nos permite copiar fácilmente todos los elementos de una arreglo, en orden, con una sintaxis simple y altamente legible. La sintaxis de propagación simplemente se ve así: [...]

    // En la práctica, podemos utilizar el operador de propagación para copiar un arreglo de esta manera:
    let thisArray = [true, true, undefined, false, null];
    console.log(thisArray)
    let thatArray = [...thisArray];
    console.log(thatArray)

    // thatArrayes igual a [true, true, undefined, false, null]. thisArray permanece sin cambios y thatArray contiene los mismos elementos que thisArray.
}


{
    // === Desafio ===

    // Hemos definido una función, copyMachine que toma arr(un arreglo) y num(un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por numcopias de arr. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona del todo bien. Modifica la función usando sintaxis de propagación para que funcione correctamente (sugerencia: ¡otro método que ya hemos cubierto podría ser útil aquí!).

    function copyMachine(arr, num) {
        let newArr = [];
        while (num >= 1) {
            // Cambia solo el código debajo de esta línea

            // Cambia solo el código encima de esta línea
            num--;
        }
        return newArr;
    }

    console.log(copyMachine([true, false, true], 2));

}

{
    //* === Solucion ===

    // Hemos definido una función, copyMachine que toma arr(un arreglo) y num(un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por numcopias de arr. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona del todo bien. Modifica la función usando sintaxis de propagación para que funcione correctamente (sugerencia: ¡otro método que ya hemos cubierto podría ser útil aquí!).

    {
        // === Metodo  Push() === 

        function copyMachine(arr, num) {
            let newArr = [];
            while (num >= 1) {
                // Cambia solo el código debajo de esta línea
                newArr.push([...arr])
                // Cambia solo el código encima de esta línea
                num--;
            }
            return newArr;
        }
        console.log(copyMachine([true, false, true], 2));
    }

    {
        // === Metodo splice() ===

        function copyMachine(arr, num) {
            let newArr = [];
            while (num >= 1) {
                // Cambia solo el código debajo de esta línea
                newArr.splice(0, 0, [...arr])
                // Cambia solo el código encima de esta línea
                num--;
            }
            return newArr;
        }
        console.log(copyMachine([true, false, true], 6));
    }

}