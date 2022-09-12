
{
    // === Explicacion ===

    // Comprende la cadena "prototype"

    // Los objetos con javascri (con algunas excepciones) tienen un prototype. Además, el prototype de un objeto en sí mismo es un objeto.

    function Bird(name) {
        this.name = name;
    }

    typeof Bird.prototype;
    // Debido a que prototype es un objeto, ¡un prototype puede tener su propio prototype! En este caso, el prototype de Bird.prototype es Object.prototype:

    Object.prototype.isPrototypeOf(Bird.prototype);
    // ¿Por qué sería útil? Quizás recuerdes el método hasOwnProperty del desafío pasado:

    let duck = new Bird("Donald");
    duck.hasOwnProperty("name");
    // El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se puede acceder con duck. Este es un ejemplo de la cadena prototype. En esta cadena prototype, Bird es el supertype de duck mientras que duck es el subtype. Object es un supertype de Bird y duck. Object es un supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede utilizar el método hasOwnProperty.
}
{
    // === DESAFIO ===
    
    function Dog(name) {
        this.name = name;
    }

    let beagle = new Dog("Snoopy");

    console.log(Dog.prototype.isPrototypeOf(beagle));  // produce true

    // Modifica el código para mostrar la cadena de prototipos correcta
    console.log(Object.prototype.isPrototypeOf(Dog.prototype));
}
{
    // === SOLUCION ===

    function Dog(name) {
        this.name = name;
    }

    let beagle = new Dog("Snoopy");

    console.log(Dog.prototype.isPrototypeOf(beagle));  // produce true

    // Modifica el código para mostrar la cadena de prototipos correcta
    console.log(Object.prototype.isPrototypeOf(beagle))
}