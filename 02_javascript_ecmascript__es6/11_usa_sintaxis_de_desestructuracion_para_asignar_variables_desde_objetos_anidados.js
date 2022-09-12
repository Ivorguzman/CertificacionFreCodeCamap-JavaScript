{
    // === Explicacion ===

    // Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos anidados.

    // Usando un objeto similar a los ejemplos anteriores:
    const user = {
        johnDoe: {
            age: 34,
            email: 'johnDoe@freeCodeCamp.com'
        }
    };

    // Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:
    const {
        johnDoe: { age, email } } = user;

    // Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres: 
    const { johnDoe: { age: userAge, email: userEm } } = user;
    console.log(userAge)
}


{
    // === Desafio ===

    /*👉Reemplace las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables lowToday y highToday con los valores de today.lowy today.high del objeto LOCAL_FORECAST.👈*/

    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };

    // Cambia solo el código debajo de esta línea
    const lowToday = LOCAL_FORECAST.today.low;
    const highToday = LOCAL_FORECAST.today.high;
    // Cambia solo el código encima de esta línea
}
{
    // === Solucion ===

    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };

    // Cambia solo el código debajo de esta línea
    const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST
    console.log(lowToday)
    // Cambia solo el código encima de esta línea
    
}