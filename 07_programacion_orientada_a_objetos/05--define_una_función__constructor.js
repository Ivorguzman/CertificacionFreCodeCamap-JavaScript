
// === EXPLICACION ===
{
    // [Las funciones Constructors crean nuevos objetos]. Definen propiedades (vinculaciones) y comportamientos  (funciones )que pertenecerán al nuevo objeto. Piensa que son el modelo para la creación de nuevos objetos.

    // A continuación se muestra un ejemplo de un constructor:


    // funcion  Constructora
    function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
    }

    // Este constructor define un objeto Bird con las propiedades name, color y numLegs con valores de: Albert, blue y 2 respectivamente. Los constructores tienen las siguientes convenciones:

    // Están definidos con un nombre en mayúscula (primera letra) para distinguirlos de otras funciones que no son constructors.

    // Utilizan la palabra clave[ this ] para establecer propiedades del objeto que crearán. Dentro del constructor,( this se refiere al nuevo objeto que creará ).

    // Los Constructors definen propiedades y comportamientos en ves de devolverlos como un valor como lo harían otras funciones.
}

{
    //  === DESAFIO  ===

    // Crea un constructor, Dog, con las propiedades name, color y numLegs que se establecen a una cadena, una cadena y un número respectivamente

}

{
    //  === SOLUCION  ===

    // Crea un constructor, Dog, con las propiedades name, color y numLegs que se establecen a una cadena, una cadena y un número respectivamente

    function Dog() {
        this.name = "Lukas",
        this.color = "negro",
        this.numLegs = 2
    }
}
