

{
    /// === EXPLICACION ===

    // Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. OjO ==> ¡Elimina la propiedad constructor! Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia. Sin embargo, dado que la propiedad ha sido 
    function Bird(name) {
        this.name = name;
    };

    Bird.prototype = {
        constructor: Bird, // Establece la propiedad constructor a Bird
        numLegs: 2,
        eat: function () {
            console.log("nom nom nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }
    };

    let loro = new Bird('pepe');

    console.log(loro.numLegs);
    loro.eat();
    loro.describe();


    console.log("---------------------------------------");

    console.log(loro.constructor === Bird);
    console.log(loro instanceof Bird);
}







{

    // ===DESSAFIO  ===

    // Define la propiedad constructor en el Dog prototype.

    function Dog(name) {
        this.name = name;
    }

    // Cambia solo el código debajo de esta línea
    Dog.prototype = {

        numLegs: 4,
        eat: function () {
            console.log("nom nom nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }
    };

}

{

    // === SOLUCION===
    // Definir la propiedad constructor en el Dog prototype. 

    // NOTA:  OjO  cuando  se modifica por medio de un Objeto{}, el prototype, se elimina el constructor.

    function Dog(name) {
        this.name = name;
    }

    Dog.prototype = { // Modificando propiesdad prototype
        constructor: Dog,
        numLegs: 2,
        eat: function () {
            console.log("Yo como Rica Perrarina nom,nom,nom");
        },
        describe: function () {
            // console.log("Mi nombre es " + this.name)
            console.log(`Mi nombre es ${this.name}`);
        }
    };
    // NOTA:  OjO  cuando  se modifica por medio de un Objeto{}, el prototype, se elimina el constructor.
}
let labrador = new Dog(); // Creando Instancia de objeto Dog (labrador)
labrador.name = "ortencia";// asignandole {proiedad: valor} a la instancia (labrador)
console.log(labrador.eat()); // Invocando el metodo eat() del objeto. 
console.log(labrador.describe()); // Invocando el metodo eat() del objeto. 

console.log(labrador.constructor === Dog); // true
console.log(labrador instanceof Dog); // true
console.log(labrador.constructor === Bird); // false
console.log(labrador instanceof Bird); // false
