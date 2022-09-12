{
    // Como has visto anteriormente, al aplicar Array.prototype.map(), o simplemente map(), el método map devuelve un arreglo de la misma longitud que el arreglo dentro del que fue llamado. Esto tampoco altera el arreglo original, siempre y cuando su función callback no lo haga.

    // En otras palabras, map es una función pura, y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

    // Puedes aprender mucho sobre el método map si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().


}

{
    // === -----------Ejemplo de map()---------- ===

    console.log(' === Ejemplo de map() === ');

    const array = [23, 65, 98, 5];
    const nuevo_array = array.map(((itemArray) => itemArray * 2));
    console.log(nuevo_array);
}
{
    console.log("----Ejemplo de array.forEach-----");
    // Submitted by: TitenQ <titenq@gmail.com>
    /*
      array.forEach(function (currentValue, index, array) { }, thisValue);
    
      currentValue - required
      index - optional
      array - optional
      thisValue - optional 
    */
    const numbers = [1, 2, 3, 4, 5];
    const newArray = [];
    console.log(newArray);
    // numbers.forEach(itemArray => console.log(newArray.push(itemArray * 2)));
    numbers.forEach(itemArray => newArray.push(itemArray * 2));
    console.log(newArray);
}

console.log("---------------------------------------")
  
{
    // === Desafio ===


    // Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.

    // La variable global
    const s = [23, 65, 98, 5];

    Array.prototype.myMap = function (callback) {
        const newArray = [];
        // Cambia solo el código debajo de esta línea

        // Cambia solo el código encima de esta línea
        return newArray;
    };

    const new_s = s.myMap(function (item) {
        return item * 2;
    });
}


{
    // === Solucion 1 con bucle for() ===


    // Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.


    // La variable global
    const array = [23, 65, 98, 5];


    Array.prototype.myMap = function (myCallBack) {
        console.log(this)//array
        const nuevo_array = [];
        // Cambia solo el código debajo de esta línea //;
        for (let i = 0; i < this.length; i++) {
            nuevo_array[i] = myCallBack(this[i]);
            // console.log(funcionCallBack)
            console.log(nuevo_array[i])

        }
        // Cambia solo el código encima de esta línea
        return nuevo_array;
    };


    const nuevo_array = array.myMap((items) => items * 2);
    console.log(nuevo_array);
}




{
    // === Solucion 2 con forEach() con  funcione flecha ()=>{} ===

    // La variable global
    const array = [23, 65, 98, 5];

    Array.prototype.myMap = (mycallBack) => {
        console.log(this);// window
        console.log(mycallBack);
        const newArray = [];
        array.forEach((itemArray) => {
            newArray.push(mycallBack(itemArray));
            console.log(newArray);
        });
        return newArray;
    };

    let new_array = array.myMap((itemArray) => itemArray * 2);
    console.log(new_array);
    console.log(Array.prototype.myMap);



}

{
    // === Solucion  con forEach() con  funcione Anonima ===

    var array = [23, 65, 98, 5];

    // Recive funcion que a su ves retorna su parametro multiplicado por 2
    Array.prototype.myMap = function (callBack) {
        console.log(this); // array 
        var new_array = [];
        for (let i = 0; i < this.length; i++) {
            new_array.push(callBack(this[i]));
        }
        return new_array;
    };

    let arrayFinal = array.myMap((itemArray) => itemArray * 2);
}




{

    /*👉=== Prctica de funcion Call Back ===👈*/

    resultadoCallBack = (myCallBack) => {
        resultado = myCallBack(2, 3);
        return resultado;
    };

    console.log(resultadoCallBack((a, b) => a + b));
    console.log(`El resultado de esta operacion es : ${resultado}`);



}


{
    /*👉 === Practica de map ===👈*/
    const almuerzos = [
        { principal: 'arepa', postre: 'helado' },
        { principal: 'tacos', postre: 'torta de queso' },
        { principal: 'pizza', postre: 'galletas' },
        { principal: 'suchi', postre: 'qesillo' }

    ];

    {
        console.log(this)

        const platosPrincipales = [];

        for (let i = 1; i <= almuerzos.length; i++) {
            platosPrincipales.push(almuerzos[i - 1].principal);
        }
        console.log(platosPrincipales);
    }

    {
        /*👉 === Parametro del metodo map ===👈*/

        const platosPrincipales = almuerzos.map((itemDelArray, indiceDelArray, elArray) => {
            console.log(itemDelArray);
            console.log(indiceDelArray);
            console.log(elArray);
            return itemDelArray.principal;
        });
        console.log(platosPrincipales);
    }
}





{
    // Solución 3   Resuelve este desafío usando recursividad y metodo ternario parametreos por defecto

    let s = [23, 65, 98, 5];
    // console.log(this) // window
    Array.prototype.myMap = function (callback, newArray = [], i = 0) {
        // console.log(this)// [23, 65, 98, 5]
        return i < this.length ? (this.myMap(callback, newArray.concat(callback(this[i])), i + 1)): (newArray);
    };

    let new_s = s.myMap((item) => item * 2);
    console.log(new_s);



    console.log(s.myMap((item) => item * 2));


}