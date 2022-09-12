{

  // ! Ejercicio
  //     Cortar y rebanar
  // Tienes dos arreglos y un índice.

  // Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

  // Comienza insertando elementos en el índice n del segundo arreglo.

  // Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la funció

  function frankenSplice(arr1, arr2, n) {
    return arr2;
  }

  frankenSplice([1, 2, 3], [4, 5, 6], 1);

}
{

  // ! Solucion

  //*     Cortar y rebanar

  // Tienes dos arreglos y un índice.

  // Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

  // Comienza insertando elementos en el índice n del segundo arreglo.

  // Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la funció


  /// Problema Explicación:

  /// Necesitamos copiar cada elemento de la primera matriz en la segunda matriz comenzando en el índice n. También tenemos que asegurarnos de que las matrices originales no estén mutadas. Es decir, no podemos realizar ningún cambio en las matrices originales.

  /*👉
  let localArr = arr2.slice();
      localArr.splice(n, 0, ...arr1);
      return localArr;👈*/

  // * let newAray = arr1.concat(arr2)
  // * console.log(newAray)
  // * newAray.splice(5, 0, 6)
  // * console.log(newAray)

  function frankenSplice(arr1, arr2, n) {
    /*👉  
     function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }
    👈*/

    let newArr = arr2.slice();
    let newArr2 = [...arr1];
    console.log(newArr2);
    newArr.splice(n, 0, ...arr1);

    return newArr;

    // let newArr = arr2.slice();
    // newArr.splice(n, 0, ...arr1)
    // return newArr;
  }

  console.log(frankenSplice([1, 2, 3], [4, 5], 1));
  //debe devolver [4, 1, 2, 3, 5].


  // frankenSplice([1, 2, 3], [4, 5, 6], 1);

  /*👉    frankenSplice([1, 2, 3], [4, 5], 1)
      //debe devolver [4, 1, 2, 3, 5].
  
      frankenSplice([1, 2], ["a", "b"], 1)
      //  debe devolver["a", 1, 2, "b"].
  
      frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
      // debe devolver["head", "shoulders", "claw", "tentacle", "knees", "toes"].
  
      // Todos los elementos del primer arreglo deben ser añadidos al segundo arreglo en su orden original. 
      frankenSplice([1, 2, 3, 4], [], 0) 
      // debe devolver[1, 2, 3, 4].
  👈*/

  // El primer arreglo debe permanecer igual después de ejecutar la función.

  // El segundo arreglo debe permanecer igual después de ejecutar la función.

}
{
  /*👉 function frankenSplice(arr1, arr2, n) {
     let localArray = arr2.slice();
     for (let i = 0; i < arr1.length; i++) {
       localArray.splice(n, 0, arr1[i]);
       n++;
     }
     return localArray;
   }👈*/
}


