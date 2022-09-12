{
    // La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. Puedes hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor.

    // Usando el mismo objeto del ejemplo anterior:
    const user = {
        name: 'John Doe',
        age: 34
    };

    console.log(user.name)
    console.log(user['age'])


    // Así es como puedes renombrar variables :
    const { name: userName, age: userAge } = user;
    console.log(userName)
    console.log(userAge)
    // Puedes leerlo como "obtén el valor de user.name y asígnalo a una nueva variable llamada  userName" y así sucesivamente. El valor de userName sería la cadena John Doe, y el valor de userAge sería el número 34.
}

{
    // ===Desafio ===
    /*👉Reemplace las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables highToday y highTomorrow con los valores de todayy tomorrowdel objeto HIGH_TEMPERATURES.


👈*/

    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

    // Cambia solo el código debajo de esta línea

    const highToday = HIGH_TEMPERATURES.today;
    const highTomorrow = HIGH_TEMPERATURES.tomorrow;

    // Cambia solo el código encima de esta línea
}
{

    // === Solucion ===


    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

    // Cambia solo el código debajo de esta línea

    const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES
    console.log(highToday)
    console.log(highTomorrow)

    // Cambia solo el código encima de esta línea
}
