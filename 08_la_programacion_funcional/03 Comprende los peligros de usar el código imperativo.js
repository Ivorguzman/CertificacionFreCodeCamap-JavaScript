
{
    // === Explicacion === 

    // La programación funcional es un buen hábito.Mantiene tu código fácil de manejar y evita que tengas errores incómodos.Pero antes de llegar allí, veamos un enfoque imperativo de la programación para destacar dónde pueden tener problemas.

    // En inglés(y muchos otros idiomas), la tensión imperativa se utiliza para dar órdenes.De forma similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de sentencias para llevar a cabo una tarea.

    // A menudo las sentencias cambian el estado del programa, como actualizar variables globales.Un ejemplo clásico es escribir un bucle for que dé instrucciones exactas para iterar sobre los índices de un arreglo.

    // Por el contrario, la programación funcional es una forma de programación declarativa.Le dice al ordenador lo que quieres hacer llamando a un método o función.

    // JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes para que no necesites escribir cómo debe ejecutarlas el equipo.Por ejemplo, en lugar de usar el bucle for mencionado anteriormente se podría llamar al método map que maneja los detalles de iteración sobre un array.Esto ayuda a evitar errores semánticos, como los "Off By One Errors" que fueron cubiertos en la sección Debugging.




}

{
    /*👉{=== Array.prototype.join() ===
    Definición y uso
    El join()método devuelve una matriz como una cadena.
    El join()método no cambia la matriz original.
    OjO ==> Se puede especificar cualquier separador. El valor predeterminado es coma (,).

    Ejemplo:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruits.join("|");
    console.log(text) ==> Banana|Orange|Apple|Mango;




    === Array.prototype.concat () ===
    El método concat()se usa para unir dos o más elementos (arrays o caracteres). Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

    Definición y uso
    Elconcat() método une dos o más cadenas.
    Elconcat() método no cambia las cadenas existentes.
    El concat()método devuelve una nueva cadena.

    Sintaxis
    string.concat(string1, string2, ..., stringX)

    Ejemplo 1:
    const arra1 = ['a', 'b', 'c'];
    const array2 = [1, 2, 3];
    let numLeters = arra1.concat(arra2);// ==> ['a', 'b', 'c', 1, 2, 3]
    console.log(numLeters);


    Ejemplo 2:
    let text1 = "sea";
    let text2 = "food";
    let result = text1.concat(text2);
    console.log(result); // ==> seafood


    Ejemplo3:
    const array1 = ['a', 'b', 'c'];
    const array2 = [1, 2, 3];
    const array3=["IV","V","VI"]
    let leterNum = array1.concat(array2,array3);// ==> ['a', 'b', 'c', 1, 2, 3, 'IV', 'V', 'VI']
    console.log(leterNum);


    Ejemplo 4:
    const array1 = ['a', 'b', 'c'];     
    const array2 = [1, 2, 3];
    const array3=["IV","V","VI"]
    const texto = "Numeros y letras";
    let leterNum = array1.concat(array2,array3,texto);// ==> ['a', 'b', 'c', 1, 2, 3, 'IV', 'V', 'VI', 'Numeros y letras']
    console.log(leterNum);



    === Array.prototype.slice()===

    El método slice() devuelve una copia de una parte del   array dentro de un nuevo array empezando por inicio   hasta fin (fin no incluido).
    slice() no modifica el array original. Devuelve una copia plana (shallow copy) de los elementos especificados del array original. Los elementos del array original son copiados en el array devuelto


    Sintaxis 
    arr.slice([inicio [, fin]])


    Parámetros:

    Inicio:
    Índice donde empieza la extracción.(Con la propiedad lengt en vez del indice del array)

    El primer elemento corresponde con el índice  0.

    Si el índice especificado es negativo, indica un desplazamiento desde el final del array. slice(-2)extrae los dos últimos elementos del array

    Si inicio es omitido el valor por defecto es 0.

    Si inicio es mayor a la longitud del array, se devuelve un array vacío.

    Fin:
    Índice  que marca el final de la extracción. slice() extrae hasta, pero sin incluir el final.

    slice(1,4) extrae desde el segundo elemento hasta el cuarto  (los elementos con índices 1, 2,  y 3).

    Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia. slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia.

    Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).

    Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).

    Valor de retorno:
    Un nuevo array con los valores extraídos.

    Ejemplo:
    var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
    var masculinos = nombres.slice(1, 3); // ==> ['Pedro','Miguel']

  






👈*/
}


{

    // === Desafio === 

    // Considere el escenario: está navegando por la web en su navegador y quiere rastrear las pestañas que ha abierto.Intentemos modelar esto con un código simple orientado a objetos.

    // Un objeto ventana está formado por pestañas y normalmente tienes más de una abierta.Los títulos de cada sitio abierto en cada objeto ventana se mantienen en un arreglo.Después de trabajar en el navegador(abriendo nuevas pestañas, combinando ventanas y cerrando pestañas), deseas imprimir las pestañas que todavía están abiertas.Las pestañas cerradas se eliminan de la matriz y las nuevas pestañas(por simplicidad) se añaden al final de la misma.

    // El editor de código muestra una implementación de esta funcionalidad con funciones para tabOpen(), tabClose()y join(). El array tabs es parte del objeto ventana que almacena el nombre de las páginas abiertas.

    // Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, causando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en finalTabs.tabs deberia ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] pero la lista producida por el código es un poco diferente.

    // Cambia Window.prototype.tabClose para que elimine la pestaña correcta.  

    // tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
    const Window = function (tabs) {
        this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
    };

    // Cuando unes dos ventanas en una
    Window.prototype.join = function (otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };

    // Cuando abres una nueva pestaña al final
    Window.prototype.tabOpen = function (tab) {
        this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
        return this;
    };

    // Cuando cierras una pestaña
    Window.prototype.tabClose = function (index) {

        // Cambia solo el código debajo de esta línea

        const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
        const tabsAfterIndex = this.tabs.splice(index + 1); // Obtiene las pestañas después de la pestaña

        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

        // Cambia solo el código encima de esta línea

        return this;
    };

    // Vamos a crear tres ventanas del navegador
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

    // Ahora completa la apertura de la pestaña, cierre, y otras operaciones
    const finalTabs = socialWindow
        .tabOpen() // Abre una nueva pestaña para memes de gatos
        .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);

}





{
    /*👉=== Solucion con el metodo splice()===👈*/

    // Cambia Window.prototype.tabClose para que elimine la pestaña correcta.  

    // tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
    const Window = function (tabs) {
        this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
    };

    // Cuando unes dos ventanas en una
    Window.prototype.join = function (otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };

    // Cuando abres una nueva pestaña al final
    Window.prototype.tabOpen = function (tab) {
        this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
        return this;
    };

    // Cuando cierras una pestaña
    Window.prototype.tabClose = function (index) {

        // Cambia solo el código debajo de esta línea

        const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
        const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña

        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

        // Cambia solo el código encima de esta línea

        return this;
    };

    // Vamos a crear tres ventanas del navegador
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

    // Ahora completa la apertura de la pestaña, cierre, y otras operaciones
    const finalTabs = socialWindow
        .tabOpen() // Abre una nueva pestaña para memes de gatos
        .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);

}


{

    // === Solucion  con el metodo  splice() con  ES2015 ===

    // tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
    class Window {
        constructor(tabs) {
            this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
        }
        // Cuando unes dos ventanas en una
        join(otherWindow) {
            this.tabs = this.tabs.concat(otherWindow.tabs);
            return this;
        }
        tabOpen(tab) {
            this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
            return this;
        }
        // Cuando cierras una pestaña
        tabClose(index) {
            // Cambia solo el código debajo de esta línea
            const tabsBeforeIndex = this.tabs.splice(0, index);
            const tabsAfterIndex = this.tabs.splice(1);
            this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

            // Cambia solo el código encima de esta línea
            return this;
        }
    }


    // Vamos a crear tres ventanas del navegador

    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

    const finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());

    // const finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose()).join(workWindow.tabClose().tabOpen());

    // Ahora completa la apertura de la pestaña, cierre, y otras operaciones

    console.log(finalTabs.tabs);


    /*👉 
    respuesta correcta ==> ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
    👈*/


    /*👉=== _____Analisis individual de cada metodo_____ ===👈*/
    /*👉const finalTabs = workWindow.tabClose(1);👈*/
    /*👉const finalTabs = videoWindow.tabClose(2);👈*/
    /*👉const finalTabs = socialWindow.join(videoWindow);👈*/
    /*👉const finalTabs = socialWindow.tabOpen();👈*/




    /*👉=== ____Analisis individual de laasentencia____=== 👈*/
    // const finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());

    /*👉  
        let finalTabs = 0;
        let a = socialWindow.tabOpen()
        let b = a.join(videoWindow.tabClose(2))
        let c = b.join(workWindow.tabClose(1))
        let d = c.tabOpen()
        finalTabs = b
    
        console.log(finalTabs);
    👈*/


}


{
    /*👉=== Solucion con el metodo slice()===👈*/

    // Cambia Window.prototype.tabClose para que elimine la pestaña correcta.  

    // tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
    const Window = function (tabs) {
        this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
    };

    // Cuando unes dos ventanas en una
    Window.prototype.join = function (otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };

    // Cuando abres una nueva pestaña al final
    Window.prototype.tabOpen = function (tab) {
        this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
        return this;
    };

    // Cuando cierras una pestaña
    Window.prototype.tabClose = function (index) {

        // Cambia solo el código debajo de esta línea

        const tabsBeforeIndex = this.tabs.slice(0, index);
        const tabsAfterIndex = this.tabs.slice(index + 1);

        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

        // Cambia solo el código encima de esta línea


        return this;
    };

    // Vamos a crear tres ventanas del navegador
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

    // Ahora completa la apertura de la pestaña, cierre, y otras operaciones
    const finalTabs = socialWindow
        .tabOpen() // Abre una nueva pestaña para memes de gatos
        .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);

}




{
    /*👉=== Solucion con el metodo slice() en ES2015===👈*/

    // Cambia Window.prototype.tabClose para que elimine la pestaña correcta.  

    // tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
    class Window {
        constructor(tabs) {
            this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
        }
        // Cuando unes dos ventanas en una
        join(otherWindow) {
            this.tabs = this.tabs.concat(otherWindow.tabs);
            return this;
        }
        // Cuando abres una nueva pestaña al final
        tabOpen(tab) {
            this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
            return this;
        }
        // Cuando cierras una pestaña
        tabClose(index) {
            // Cambia solo el código debajo de esta línea

            const tabsBeforeIndex = this.tabs.slice(0, index);
            const tabsAfterIndex = this.tabs.slice(index + 1);

            this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos




            // Cambia solo el código encima de esta línea
            return this;
        }
    }




    // Vamos a crear tres ventanas del navegador
    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

    // Ahora completa la apertura de la pestaña, cierre, y otras operaciones
    const finalTabs = socialWindow
        .tabOpen() // Abre una nueva pestaña para memes de gatos
        .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);

}
























{
    // === Soluciones explicadas ===

    /*👉 
            === Explicación del problema ===
            
    Lo que se debe notar es el hecho de que la producción no se como se sugiere en las instrucciones, que debe ser la siguiente matriz:
    ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'].
    
    En su lugar, recibirá esta matriz: [‘FB’, ‘Gitter’, ‘Reddit’, ‘Twitter’, ‘Medium’, ‘new tab’, ‘Netflix’, ‘YouTube’, ‘GMail’, ‘Docs’, ‘freeCodeCamp’, ‘new tab’].
    
    Eche un vistazo a la última parte del código para llegar a una conclusión sobre dónde está el problema.
    
    Parte 1
    
    var finalTabs = socialWindow
    Después de que se ejecuta esta parte del código, nuestra matriz es ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']
    
    Parte 2
    
    .tabOpen() // Open a new tab for cat memes  
    Parte 3
    Después de agregar una 'nueva pestaña' a la matriz, nuestra matriz ahora está['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab']
    
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    Esta parte del código supuestamente debería cerrar la tercera ventana (índice 2 ya que el conteo comienza desde 0) y devolver la ventana de video sin la tercera ventana que es 'Vimeo'en este caso. Entonces, la matriz devuelta debería verse así['Netflix', 'YouTube', 'Vine']** and after adding it to the main array, our array should be **['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab', 'Netflix', 'YouTube', 'Vine']
    
    Parte 4
    
    .join(workWindow.tabClose(1).tabOpen());
    Esta parte cerraría la segunda pestaña (índice 1) en la ventana de trabajo [‘GMail’, ‘Inbox’, ‘Work mail’, ‘Docs’, ‘freeCodeCamp’], que sería ‘Inbox’, y luego empujaría una 'nueva pestaña' a la matriz, regresándola [‘GMail’, ‘Work mail’, ‘Docs’, ‘freeCodeCamp’, ‘new tab’]y agregándola a la matriz principal.
    
    Si comparamos la matriz solicitada y la que recibimos después de ejecutar el código inicial, podemos ver que los valores ‘Vine’y ‘Work mail’se omiten. Por lo tanto, necesitamos ver cuál es la causa de esto.
    Ahora que sabemos esto, comprobaremos las operaciones realizadas en esa matriz. Esto se hace en la Parte 3:
    
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    Podemos ver que tabClose()se realiza en esta matriz, por lo que analizaremos el código contenido en ese método.
    
    tabClose = function (index) {
     1. var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
     2. var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
    
     3. this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
    4. return this;
    };
    Para un índice, tomaremos 2, como se hizo en el desafío.
    
    Al principio, nuestra gama videoWindowse ve así:
    ['Netflix', 'YouTube', 'Vimeo', 'Vine'].
    Después de ejecutar la primera línea, la variable tabsBeforeIndextomará 2 ( index) valores comenzando desde 0 ( splice(0,2)) y creará una nueva matriz que los contenga.
    Las matrices ahora el siguiente aspecto:
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow:['Vimeo', 'Vine']
    Ya puede ver por qué splice () puede ser muy peligroso, ya que siempre modifica la matriz sobre la que se ejecuta y devuelve esa matriz modificada; no es determinista.
    
    Después de ejecutar la segunda línea, tabsAfterIndexdebe tomar valores comenzando desde el índice (en este caso 2) y eliminarlos de la videoWindowmatriz. Como podemos ver, en el estado actual ( ['Vimeo', 'Vine']), videoWindowno tiene índice 2, por lo que se devuelve una matriz vacía. Estado final:
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow: ['Vimeo', 'Vine']
    tabsAfterIndex:[]
    Después de la tercera línea y la concatenación, la matriz devuelta es la misma que tabsBeforeIndex, lo que da como resultado que ambos valores 'Vimeo'y 'Vine'no estén en la matriz.
    

    Soluciones: 
    === Solución-explicada 1=== 
    usando splice (). Esto crea efectos secundarios (cambios en la matriz original) y debe evitarse en la práctica.
    
    Para que la pestaña de método Cerrar funcione correctamente,
    
    var tabsAfterIndex = this.tabs.splice(index);
    debe ser reemplazado con
    
    var tabsAfterIndex = this.tabs.splice(1);
    De esta manera, después de que se ejecute la segunda línea en la matriz actual ['Vimeo', 'Vine'] , siempre omitirá el primer valor (índice 0) y el que tiene el índice 1 hasta el final, dando como resultado la matriz adecuada devuelta.
    
    === Solución-explicada 2=== 
    usando slice (). Esto no crea efectos secundarios y debe preferirse al empalme ().
    
    Esta parte del código:
    
     var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
     var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
    debe ser reemplazado por:
    
    var tabsBeforeIndex = this.tabs.slice(0, index);
    var tabsAfterIndex = this.tabs.slice(index+1);



    Advertencia
    splice () siempre debe usarse con cuidado ya que modifica el contenido en el que está trabajando. Para obtener documentación y las diferencias entre empalme y corte, eche un vistazo a:👈*/
}

