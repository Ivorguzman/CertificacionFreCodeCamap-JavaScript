
{

    //  === Explicacion ===
    // El siguiente método que cubriremos es slice(). En lugar de modificar un arreglo, slice()copia o extrae un número determinado de elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. slice() toma sólo 2 parámetros: el primero es el índice en el que se inicia la extracción, y el segundo es el índice en el que se detiene la extracción.

    /*👉(la extracción se producirá hasta el índice, pero sin incluir el elemento en este índice). Considera esto:👈*/

    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

    let todaysWeather = weatherConditions.slice(1, 3);
    console.log(weatherConditions);
    console.log(todaysWeather);


    // todaysWeather tendrá el valor ['snow', 'sleet'], mientras que     weatherConditionstodavía tendrá ['rain', 'snow', 'sleet', 'hail', 'clear'].

    // En efecto, hemos creado un nuevo arreglo
}

{
    // === Desafio ===

    // Hemos definido una función, forecastque toma un arreglo como argumento. Modifica la función usando slice()para extraer información del arreglo de argumentos y devuelve un nuevo arreglo que contiene los elementos warmy sunny.
    function forecast(arr) {
        // Cambia solo el código debajo de esta línea

        return arr;
    }

    // Cambia solo el código encima de esta línea
    console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

};

{
    // === SOLUCION ===

    // Hemos definido una función, forecastque toma un arreglo como argumento. Modifica la función usando slice()para extraer información del arreglo de argumentos y devuelve un nuevo arreglo que contiene los elementos warmy sunny.
    function forecast(arr) {
        // Cambia solo el código debajo de esta línea
        console.log(arr);
        arr = arr.slice(2, 4);
        return arr;
    }

    // Cambia solo el código encima de esta línea
    console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

};

