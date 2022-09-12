{
    // ES6 hace que desestructurar arreglos sea tan fácil como desestructurar objetos.

    /*👉Una diferencia clave entre el operador de propagación y la desestructuración de arreglos es que el operador de propagación desempaca todos los contenidos de un arreglo en una lista separada por comas. En consecuencia, no puedes elegir qué elementos deseas asignar como variables.👈*/

    // Desestructurar un arreglo nos permite hacer exactamente eso:

    {
        const [a, b] = [1, 2, 3, 4, 5, 6];
        console.log(a, b);
    }
    // La consola muestra los valores de ay bcomo 1, 2.

    // A la variable ase le asigna el primer valor del arreglo, ya bse le asigna el segundo valor del arreglo. También podemos acceder al valor en cualquier índice de un arreglo con la desestructuración usando comas para alcanzar el índice deseado:
    {
        const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
        console.log(a, b, c);
    }
    // La consola muestra los valores de a, b, y ccomo 1, 2, 5.
}
{
    // Utilice la sintaxis de desestructuración para intercambiar los valores de ay bpara que areciba el valor almacenado en b, y breciba el valor almacenado en a.

    let a = 8, b = 6;
    // Cambia solo el código debajo de esta línea

}

{
    // === Solucion 1  ineficas===
    {
        // Utilice la sintaxis de desestructuración para intercambiar los valores de  ay b para que areciba el valor almacenado en b, y breciba el valor almacenado en a.

        let a = 8, b = 6;
        // Cambia solo el código debajo de esta línea
        [, , , , , a, , b] = [1, 2, 3, 4, 5, 6, 7, 8]
        console.log(a)
        console.log(b)
    }
}


{

    // === Solucion 2 correcta ===
    {


        let a = 8, b = 6;
        
        // Cambia solo el código debajo de esta línea
        [a, b] = [b, a];
        console.log(a)
        console.log(b)
        

    }
}

