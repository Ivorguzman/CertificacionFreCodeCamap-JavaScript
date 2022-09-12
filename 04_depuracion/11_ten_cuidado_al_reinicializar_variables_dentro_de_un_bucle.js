
{
    // === Explicacion ===

    // A veces es necesario guardar información, incrementar contadores o reajustar variables dentro de un bucle.Un problema potencial es cuando las variables deberían ser reiniciadas y no lo son, o viceversa.Esto es particularmente peligroso si accidentalmente se restablece la variable que se utiliza para la condición terminal, causando un bucle infinito.

    // La impresión de los valores de las variables con cada ciclo de su bucle mediante el uso de console.log() puede descubrir un comportamiento erróneo relacionado con el restablecimiento, o la falta de restablecimiento de una variable.


}
{
    // === Explicacion ===

    // La siguiente función debe crear un arreglo bidimensional (matriz) con m filas (rows) y n columnas (columns) de ceros. Desafortunadamente, no está produciendo la salida esperada porque la variable row no está siendo reiniciada (devuelta a un arreglo vacío) en el bucle exterior. Corrige el código para que devuelva una matriz 3x2 de ceros correcta, que se parezca a [[0, 0], [0, 0], [0, 0]].



    // Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros

}

{
    // === Solucion 1  ===

    // Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros
    function zeroArray(m, n) {
        let array = [];
        for (let i = 0; i < m; i++) {
            let subArray = [];
            for (let j = 0; j < n; j++) {
                subArray.push(0);
            }
            array.push(subArray);
        }
        return array;
    }
    let matrix = zeroArray(3, 2);
    console.log(matrix);
}


{
    // === Estudio del caso === 
    function TablaArray(m, n) {
        let array= [];
        console.log(array)
        let contador = 1;
        let contador2 = 1;

        for (let i = 0; i < m; i += 1) {
            console.log("===> Vuelta [" + contador + "] del primer for(){} ")
            let subArray = [];
            console.log(subArray)


            for (let j = 0; j < n; j += 1) {
                subArray.push(0)
                console.log("===> Vuelta [" + contador2 + "] del Segundo for(){} ")
                console.log(subArray)
                contador2 = contador2 + 1;
            }



            array.push(subArray);
            contador = contador + 1;
        }

        return array
    }
    let crearMatrix = TablaArray(3, 2);
    console.log(crearMatrix);
}