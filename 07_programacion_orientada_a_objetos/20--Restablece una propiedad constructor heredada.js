
{
    // Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo.

    // Por ejemplo:


    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("Guao Guao Guao");
        }
    };

    function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);

    let duck = new Bird();
    console.log(duck.constructor === Bird);
    console.log(duck.constructor === Animal);

    console.log("------------------");
    // Pero duck y todas las instancias de Bird deberían mostrar que fueron construidas por Bird y no Animal. Para ello, puedes establecer manualmente la propiedad del constructor de Bird al objeto Bird:
    Bird.prototype.constructor = Bird;
    console.log(duck.constructor === Bird);
    console.log(duck.constructor === Animal);
    console.log(duck instanceof Bird);
    console.log(Object.getPrototypeOf(duck));// ¿cual es prototipo de duck?
    // El método {Object.getPrototypeOf()} devuelve el prototipo (es decir, el valor de la [[Prototype]]propiedad interna ) del objeto especificado.

}




{
    // === Desafio ===

    // Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.


    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("nom nom nom");
        }
    };


    function Bird() { }
    function Dog() { }

    Bird.prototype = Object.create(Animal.prototype);
    Dog.prototype = Object.create(Animal.prototype);

    // Cambia solo el código debajo de esta línea



    let duck = new Bird();
    let beagle = new Dog();



}


{
    // === solucion ===

    // Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.

    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function () {
            console.log("nom nom nom");
        }
    };

    function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;

    function Dog() { }
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;


    // Cambia solo el código debajo de esta línea

    console.log("---------------------------------------");



    let duck = new Bird();
    console.log(duck.constructor === Bird);
    console.log(duck.constructor === Animal);
    console.log(duck instanceof Bird);
    console.log(Object.getPrototypeOf(duck));// ¿cual es prototipo de duck?

    let beagle = new Dog();
    console.log(beagle.constructor === Dog);
    console.log(beagle.constructor === Animal);
    console.log(beagle instanceof Dog);
    console.log(beagle instanceof Bird);
    console.log(Object.getPrototypeOf(beagle));


    duck.eat();
    beagle.eat();

}