{
    // ES6 introduce el operador de propagación, que nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

    // El siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo:

    var arr = [6, 89, 3, 45];
    var maximus = Math.max.apply(null, arr);
    console.log(maximus)

  console.log("----------------")

    var maximus = [];
    var arr = [6, 89, 3, 45];
    console.log(...arr);
    maximus = Math.max(arr);
    maximus = Math.max(...arr);

    // maximus tendrá un valor de 89.

    // Tuvimos que usar Math.max.apply(null, arr) porque Math.max(arr) devuelve NaN. Math.max() espera argumentos separados por comas, pero no un arreglo. El operador de propagación hace que esta sintaxis sea más fácil de leer y mantener.


    console.log(arr);
    console.log(...arr);
    console.log(Math.max(...arr));
    console.log(maximus);


    // ...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. El siguiente código no funcionará:

    /*👉const spreaded = ...arr;👈*/
}

{
    // === Desafio ===
    // Copia todo el contenido de arr1 en otro arreglo arr2 usando el operador de propagación. 

    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [];  // Cambia esta línea

    console.log(arr2);


}
{
    // === solucion ===
    // Copia todo el contenido de arr1 en otro arreglo arr2 usando el operador de propagación. 

    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    console.log(...arr1);
    arr2 = [...arr1];  // Cambia esta línea
    console.log(arr2);


}