

{
    //* Suma todos los números en un rango

    // Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

    // Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.


    function sumAll(arr) {
        return 1;
    }

    sumAll([1, 4]);
}

{
    //! solución 1 bucle for tradicional con sprea opereitor ...
    function sumAll(arr) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        let sumatoria = 0;
        let resultado = [];
        let factorizacion;
        for (let i = min; i <= max; i++) {

            factorizacion = sumatoria += i;
            resultado.push(factorizacion)
        }
        console.log(resultado)

        // return resultado


        return factorizacion

    }
     console.log(sumAll([1, 4]));

}

{
    //! solución funcional con   Fórmula de suma de progresión aritmética
    //*frac((startNum + endNum)*n) /2 ===> n = Math.abs(startNum - endNum) + 1

    const sumAll = arr => {
        const startNum = arr[0];
        const endNum = arr[1];
        const n = Math.abs(startNum - endNum) + 1;
        const sum = ((startNum + endNum) * n) / 2;
        return sum;
    };
    console.log(sumAll([1, 4]));
}


{
    {
        //! solución Funcional  3 creando metodo de array  de progresión aritmética

        //* Creación y preuba # 1  del metodo progresion  ===> Array.prototype.progresion() <===

        Array.prototype.progresion = (arrX) => {
            const numMin = Math.min(...arrX);
            const numMax = Math.max(...arrX);
            const contadorNumero = Math.abs(numMin - numMax) + 1;
            const sumatoria = ((numMin + numMax) * contadorNumero) / 2;
            return sumatoria;
        }

        let arr = [];
        console.log(arr.push(arr.progresion([4, 1])));
        console.log(arr)


    }




}




{
    // !Solucion   Recursiva 

    function sumAll(arr) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);

        return min === max ? min : max + sumAll([min, max - 1]);
    }
    console.log(sumAll([4, 1]));
    console.log(sumAll([1, 4]));
}