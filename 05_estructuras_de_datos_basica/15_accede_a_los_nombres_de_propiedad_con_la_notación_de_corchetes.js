
{
    // En el primer desafío de objetos mencionamos el uso de notación de corchetes como una manera de acceder a los valores de una propiedad mediante la evaluación de una variable. Por ejemplo, imagina que nuestro objeto foods está siendo usado en un programa para una caja registradora de supermercado. Tenemos una función que establece selectedFood y queremos revisar en nuestro objeto foods si ese alimento está presente. Esto podría verse así:

    /*👉 let selectedFood = getCurrentFood(scannedItem);👈*/
    /*👉let inventory = foods[selectedFood];👈*/
}

{
    // === Desafio ===

    // Hemos definido una función, checkInventory, que recibe como argumento un elemento escaneado. Devuelve el valor actual de la clave scannedItem en el objeto foods. Puedes asumir que sólo se proporcionarán claves válidas como argumento a checkInventory.



    let foods = {
        apples: 25,
        oranges: 32,
        plums: 28,
        bananas: 13,
        grapes: 35,
        strawberries: 27
    };

    function checkInventory(scannedItem) {
        // Cambia solo el código debajo de esta línea

        // Cambia solo el código encima de esta línea
    }

    console.log(checkInventory("apples"));
}
{
    // === Solucion ===

    // Hemos definido una función, checkInventory, que recibe como argumento un elemento escaneado. Devuelve el valor actual de la clave scannedItem en el objeto foods. Puedes asumir que sólo se proporcionarán claves válidas como argumento a checkInventory.



    let foods = {
        apples: 25,
        oranges: 32,
        plums: 28,
        bananas: 13,
        grapes: 35,
        strawberries: 27
    };

    function checkInventory(scannedItem) {
        // Cambia solo el código debajo de esta línea
        return foods[scannedItem];

        // Cambia solo el código encima de esta línea
    }

    console.log(checkInventory("bananas"));
}