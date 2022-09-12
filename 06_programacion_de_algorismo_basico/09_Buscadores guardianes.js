{
    //! Ejercicio

    // /Buscadores guardianes

    // Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.

    function findElement(arr, func) {
        let num = 0;
        return num;
    }

    findElement([1, 2, 3, 4], num => num % 2 === 0);
    findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0); //debe devolver 8.
    findElement([1, 3, 5, 9], (num) => num % 2 === 0); // debe devolver undefined.
}
{
    //! Solucion 1 Imperativa ciclo for in (){}

    // /Buscadores guardianes

    // Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.

    function findElement(arr, func) {
        let num;
        for (let i = 0; i < arr.length; i++) {
            console.log(func(arr[i]));
            if (func(arr[i])) {
                return num = arr[i];
            } undefined;

        }
        return num;
    }
    let resutado = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
    console.log(resutado);

}


{
    //! Solucion 2 map()
    function findElement(arr, func) {
        console.log(func);
        let num = arr[arr.map(func).indexOf(true)];
        return num;
    }
    findElement([1], num => num % 2 === 0);

    // Mire a través de la matriz dada en el primer parámetro "arr" usando el método .map() Use la función en el segundo parámetro como la función de devolución de llamada en arr.map() Adquiera el índice del primer número que cumple la condición en la función . Utilice ese índice para mostrar el primer número disponible que cumpla la condición.
}
{

    //! Solucion 2 metod find()

    function findElement(arr, func) {
        let num = arr;
        return num.find(func);//
    }
    {
        //! Solucion rescursiva *

        function findElement(arr, func) {
            return arr.length && !func(arr[0])
                ? findElement(arr.slice(1), func)
                : arr[0];
        }
    }


    console.log("-Pruebas-");
    {

        //! Pruebas
        function findElement(arr, func) {
            let num0 = arr.map(func).indexOf(true);//indice 1
            let num1 = arr[arr.map(func).indexOf(true)]; // valor 20
            let num2 = arr.find(func); // valor 20
            let num3 = arr.map(func);//[false, true, false, true, false, true]
            let num4 = arr.some(func); // true
            let num5 = arr.includes(func);// false
            let num6 = arr[arr.map(func)];//undefined
            let num7 = arr.map(func).includes(func);//indice 1

            
             console.log(arr);
            // console.log(num1);
            // console.log(num3);
            // console.log(num0);
            // console.log(num2);
            // console.log(num);
            return num5;
        }
        let resutado = findElement([7, 20, 5, 8, 9, 10], num => num % 2 === 0);
        // let resutado = findElement([7, 3, 5, 3, 9, 13], num => num % 2 === 0);
        console.log(resutado);
    }
    console.log("-Pruebas-");
}


