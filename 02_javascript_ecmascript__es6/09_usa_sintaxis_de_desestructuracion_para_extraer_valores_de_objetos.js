// La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los valores directamente desde un objeto.


{
    // Considera el siguiente código ES5:
    const user = { nombre: 'John Doe', edad: 34 };
    // const user = {edad: 34, nombre: 'John Doe'};

    // name tendría una cadena con valor John Doe, y age tendría el número 34.
    const nombre = user.name;
    const edad = user.age;

    console.log(user.nombre)
    console.log(user.edad)
}


{
    // const user = { nombre: 'John Doe', edad: 34 };
    const user = { edad: 34, nombre: 'John Doe' };

    // Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6:
    const { nombre, edad } = user;
    // Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user. Puedes observar que esto es mucho más limpio.


    // De nuevo, name tendrá una cadena con valor John Doe, y age tendrá el número 34.
    console.log(user.nombre)
    console.log(user.edad)

    // Puedes extraer tantos o pocos valores del objeto como desees.
}

{

    // === Desafio ===
    // Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables today y tomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.
    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

    // Cambia solo el código debajo de esta línea

    const today = HIGH_TEMPERATURES.today;
    const tomorrow = HIGH_TEMPERATURES.tomorrow;

    // Cambia solo el código encima de esta línea
}
{

    // === Solucion ===
    // Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables today y tomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.
    const HIGH_TEMPERATURES = { yesterday: 75, today: 77, tomorrow: 80 };

    // Cambia solo el código debajo de esta línea

    const { today, tomorrow } = HIGH_TEMPERATURES;
    console.log(HIGH_TEMPERATURES.yesterday)
    console.log(HIGH_TEMPERATURES.today)
    console.log(HIGH_TEMPERATURES.tomorrow)
    // Cambia solo el código encima de esta línea
}


