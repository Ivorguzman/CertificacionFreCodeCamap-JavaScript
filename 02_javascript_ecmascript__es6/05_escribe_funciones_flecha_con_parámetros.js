{
  // Al igual que una función regular, puedes pasar argumentos a una función flecha.
  {
    const doubler = (item) => item * 2;
    console.log(doubler(4));
    console.log(doubler(4));
  }
  // Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.

  {
    const doubler = item => item * 2;
    console.log(doubler(4))
  }
  // Es posible pasar más de un argumento a una función flecha.

  {
    const multiplier = (item, multi) => item * multi;
    console.log(multiplier(4, 2));
    console.log(multiplier(4, 2));
  }
}

{
  // === Desafio ===
  // Reescribe la función myConcat que añade el contenido de arr2 a arr1 para que la función use la sintaxis de función flecha.

  /*👉 El método concat() se usa para unir dos o más arreglos. Este método no cambia los arreglos existentes, sino que devuelve un nuevo arreglo.👈*/

  var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
  };

  console.log(myConcat([1, 2], [3, 4, 5]));

}

{
  //  === Solucion ===

  const myConcat = (arr1, arr2) => arr1.concat(arr2);

  console.log(myConcat([1, 2], [3, 4, 5]));

}