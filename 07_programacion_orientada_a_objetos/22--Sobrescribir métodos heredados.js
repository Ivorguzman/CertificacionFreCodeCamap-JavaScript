
{
    // === Explicacion ===

    // 1.  En lecciones anteriores, aprendiste que un objeto puede heredar su comportamiento (métodos) de otro objeto al referenciar su prototype:
    /*👉ObjetoHijo.prototype = Object.create(ObjetoPadre.prototype);👈*/
    // 2. Luego, el ObjetoHijo recibió sus propios métodos (nombreDelMetodo) al encadenarlos a su prototype:
    /*👉ObjetoHijo.prototype.nombreDelMetodo = function () { return "???"; };👈*/

    // Es posible sobreescribir un método heredado. Se hace de la misma manera: agregando un método a ObjetoHijo.prototype usando el mismo nombre de método que el que se va a sobrescribir. Aquí hay un ejemplo de Bird sobrescribiendo el método eat() heredado de Animal:

    function Animal() { };

    Animal.prototype = {
        constructor: Bird,
        eat: function () { return 'mon,mon,mon'; },
        volar: function () { return 'Vuelo Poco pero vuelo'; },
        numLegs: "tengo " + 4 + " Patas"
    };

    function Bird() { };

    Bird.prototype = Object.create(Animal.prototype);

    let pavo = new Bird();

    console.log(pavo.eat());
    console.log(pavo.volar());

    console.log(pavo.numLegs);
    console.log(pavo.constructor === Bird);

    Bird.prototype.numLegs = "tengo " + 2 + " Patas";

    console.log(pavo.numLegs);



}


{


    // === Desafio ===

    // Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, this is a flightless bird.


    function Bird() { }

    Bird.prototype.fly = function () { return "I am flying!"; };

    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;

    // Cambia solo el código debajo de esta línea



    // Cambia solo el código encima de esta línea

    let penguin = new Penguin();
    console.log(penguin.fly());
}
{


    // === Solucion ===

    // Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, this is a flightless bird.


    function Bird() { }

    Bird.prototype.fly = function () { return "I am flying!"; };

    function Penguin() { }
    Penguin.prototype = Object.create(Bird.prototype);

    // Cambia solo el código debajo de esta línea

    Penguin.prototype.fly = function () { return "Alas, this is a flightless bird."; };

    // Cambia solo el código encima de esta línea

    let penguin = new Penguin();

    console.log(penguin.constructor);
    Penguin.prototype.constructor = Penguin;
    console.log(penguin.constructor);

    console.log(penguin.fly());
}