


    // *   === Explicacion ===

    // Bien, ya hemos aprendido a eliminar elementos al principio y al final de los arreglos utilizando shift() y pop(), pero ¿qué pasa si queremos eliminar un elemento de alguna parte del medio? ¿O eliminar más de un elemento a la vez? Pues bien, ahí es donde entra splice(). splice() nos permite hacer precisamente eso: eliminar cualquier número de elementos consecutivos de cualquier parte de un arreglo.
    // El método  splice() cambia el contenido de un arreglo eliminando elementos existentes y / o agregando nuevos elementos.

    /*👉 splice() puede tomar hasta 3 parámetros, pero por ahora, nos centraremos sólo en los 2 primeros. Los dos primeros parámetros de splice() son [enteros que representan índices, o posiciones], del arreglo que llama splice(). Y recuerda que los arreglos están indexados en cero, por lo que para indicar el primer elemento de un arreglo, usaríamos 0. El primer parámetro de splice() representa el índice del arreglo a partir del cual se empiezan a eliminar los elementos, mientras que el segundo parámetro indica el número de elementos a eliminar. 👈*/

    //* Ejemplo:
    //const months = ['Jan', 'March', 'April', 'June'];
    //months.splice(1, 0, 'Feb');
    // inserts at index 1 ('Feb')
    // console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

    //months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    // console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]



    
    {    let array = ['today', 'was', 'not', 'so', 'great'];
    
        console.log(array);// ['today', 'was', 'not', 'so', 'great']
        console.log(array.splice(2, 2)); // ELEMEMTOS QUE BORRO ['not', 'so'] ==>(array.splice(Indice(2), 2(cantidad de elementos)) 
        console.log(array);// Valor de la matriz modificada ['today', 'was', 'great']
    
        // Aquí eliminamos 2 elementos, comenzando con el tercer elemento (en el índice 2). array tendrá el valor ['today', 'was', 'great'].
    
        // splice() no sólo modifica el arreglo que llama, sino que también devuelve un nuevo arreglo que contiene el valor de los elementos eliminados:
    
        array = ['I', 'am', 'feeling', 'really', 'happy'];
    
        let newArray = array.splice(3, 2);
    
    }
    const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    {
        // === Desafio ===
    
        // Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.
    
    
        // Cambia solo el código debajo de esta línea
        console.log(arr.splice(0, 1));
        console.log(arr.splice(3, 4));
        // Cambia solo el código encima de esta línea
        console.log(arr);
    
    }

    {
        // === Soluciom ===
    
        // Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.
    
        // Cambia solo el código debajo de esta línea
        console.log(arr.splice(0, 1));
        console.log(arr.splice(3, 4));
        // Cambia solo el código encima de esta línea
        console.log(arr);
    
    }
    

