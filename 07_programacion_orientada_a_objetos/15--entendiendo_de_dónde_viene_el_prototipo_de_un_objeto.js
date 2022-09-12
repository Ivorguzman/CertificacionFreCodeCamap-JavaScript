
{
    // === EXPLICACION ===

    // Así como las personas heredamos genes de nuestros padres, los objetos también heredan su prototype directamente de la función constructor que lo creó. Por ejemplo, aquí el constructor Bird crea el objeto duck:

    function Bird(name) {
        this.name = name;
    }

    let duck = new Bird("Donald");
    // El  método isPrototypeOf() comprueba si un objeto existe en la cadena de prototipos de otro objeto.
    console.log(Bird.prototype.isPrototypeOf(duck));

}

{
    // === DESAFIO ===

    // Utiliza isPrototypeOf() para comprobar el prototype de beagle.

    function Dog(name) {
        this.name = name;
    }

    let beagle = new Dog("Snoopy");
    console.log(Dog.prototype.isPrototypeOf(beagle));


}