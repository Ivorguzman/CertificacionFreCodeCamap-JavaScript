{
    // Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest (...) para los parámetros de función. Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

    {
        console.log("=== Explicacion 1 ===");
        // Echa un vistazo a este código:

        function howMany(...args) {
            console.log(args);
            console.log(args.length);
        }
        howMany(0, 1, 2);
        howMany(0, 1, 2, ['a', 'b', 'c'], { 'uno': 1, 'dos': 2 });
        howMany("string", null, [1, 2, 3], {}, false, true, 2);

        // El parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), filter() y reduce() en el arreglo de parámetros.}

    }


    {

        {

            console.log("=== Explicacion 2 ===");
            function myFun(...moreMoreArgs) {
                console.log(moreMoreArgs);
                console.log(...moreMoreArgs);
                return moreMoreArgs;
            }
            let valor = myFun(1, 2, 3, 4, 5, 6, 7);
            console.log(valor);
        }


        {
            console.log("=== Explicacion 3 ===");
            function myFun(a, b, ...manyMoreArgs) {
                console.log("a", a);
                console.log("b", b);
                console.log("ZAPATO", "MEDIAS", manyMoreArgs);
                console.log(a, b, manyMoreArgs);
                console.log(a, manyMoreArgs);
                console.log(manyMoreArgs);
                console.log("manyMoreArgs", manyMoreArgs);
            }

            let valor = myFun("one", "two", "three", "four", "five", "six");
            console.log(valor);
        }


    }

}
// === Desafio ===

{
    // Modifica la función sum usando el parámetro rest de tal manera que la función sum sea capaz de recibir cualquier número de argumentos y devolver su suma.

    const sum = (x, y, z) => {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };

}

{
    // === Solucion ===

    const sum = (...args) => {
        console.log(args)
        return args.reduce((a, b) => a + b, 0);
      }
      console.log( sum() )
      console.log(sum(0,1,2))
      console.log(sum(1,2,3,4))
      console.log(sum(5))
}

