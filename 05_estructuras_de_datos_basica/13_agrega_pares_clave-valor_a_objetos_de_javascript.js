
{
    // === Eplicacion === 

    // En su aspecto más básico, los objetos no son más que colecciones de pares clave-valor . En otras palabras, son piezas de datos ( valores ) asignados a identificadores llamados propiedades ( claves ). Mira un ejemplo:
    {
        const tekkenCharacter = {
            player: 'Hwoarang',
            fightingStyle: 'Tae Kwon Doe',
            human: true
        };
    }

    // El código anterior define un objeto de un personaje del videojuego Tekken como tekkenCharacter. Tiene tres propiedades, cada una de las cuales se asigna un valor específico. Si se quiere agregar una propiedad adicional, como "origin" (origen), se puede hacer asignando original objeto

    {
        /*👉tekkenCharacter.origin = 'South Korea';👈*/
    }

    // Esto usa la notación de puntos. Si observa el objeto tekkenCharacter, ahora incluirá la propiedad origin. Hwoarang también tenía el cabello naranja. Puedes agregar esta propiedad con la notación de corchetes:
    {
        /*👉 tekkenCharacter['hair color'] = 'dyed orange';👈*/
    }
    // La notación de corchetes es necesaria si tu propiedad tiene un espacio en ella o si se quiere utilizar una variable para nombrar la propiedad. En el caso anterior, la propiedad está entre comillas para denotar que es una cadena y se agregará exactamente como se muestra. Sin las comillas, se evaluará como una variable y el nombre de la propiedad será el valor que tenga la variable. He aquí un ejemplo con una variable:
    {
        /*👉  const eyes = 'eye color';👈*/

        /*👉 tekkenCharacter[eyes] = 'brown';👈*/
    }
}
// Tras agregar todos los ejemplos, el objeto se verá así:
{
    const tekkenCharacter = {
        player: 'Hwoarang',
        fightingStyle: 'Tae Kwon Doe',
        human: true,
        origin: 'South Korea',
        'hair color': 'dyed orange',
        'eye color': 'brown'
    }
}


{
    // === Desafio ===

    // Se ha creado un objeto foods con tres entradas. Usando la sintaxis de tu elección, agrega tres entradas más: bananas con el valor de 13, grapes con el valor de 35, y strawberries con el valor de 27.
    let foods = {
        apples: 25,
        oranges: 32,
        plums: 28
    };

    // Cambia solo el código debajo de esta línea

    // Cambia solo el código encima de esta línea

    console.log(foods);;

}
{
    // === Solucion ===

    // Se ha creado un objeto foods con tres entradas. Usando la sintaxis de tu elección, agrega tres entradas más: bananas con el valor de 13, grapes con el valor de 35, y strawberries con el valor de 27.

    let foods = {
        apples: 25,
        oranges: 32,
        plums: 28
    };
    console.log(foods);


    // Cambia solo el código debajo de esta línea
    foods.bananas = 13;
    foods.grapes = 35;
    foods['strawberries'] = 27;

    // Cambia solo el código encima de esta línea

    console.log(foods);

}