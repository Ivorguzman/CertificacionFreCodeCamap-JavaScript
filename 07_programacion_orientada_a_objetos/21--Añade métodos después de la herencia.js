
{
    /// Añade métodos  y propiedades después de la herencia

    // ==Explicacion ===

    // Una función constructor que hereda su objeto prototype de una función constructor "supertype" puede seguir teniendo sus propios métodos además de los heredados.

    // Por ejemplo, Bird es un constructor que hereda su prototype de Animal:

    function Animal() { };

    Animal.prototype = {
        eat: function () {
            console.log("nom nom nom");
        },
        genero: 'Animal',
        tipo: 'Pato Salvaje',
        color: 'Soy colorido'
    };


    function Bird() { }
    Bird.prototype = Object.create(Animal.prototype);
    console.log(Bird.prototype.constructor === Animal);
    Bird.prototype.constructor = Bird;

    console.log("---------------------------------------");
    console.log(Bird.prototype.constructor === Animal);
    console.log(Bird.prototype.constructor === Bird);


    Bird.prototype.fly = function () {
        console.log("I'm flying!");
    };


    let duck = new Bird();
    duck.eat();
    duck.fly();
    console.log(duck.tipo);
    duck.tipo = "Donald Pato Animado";
    console.log(duck.tipo);
    console.log(duck.color);
    duck.eat();
    console.log(duck.genero);

    console.log("---------------------------------------");

    let loro = new Bird();
    loro.fly();
    loro.eat();
    loro.tipo='Loro salvaje'
    console.log(loro.tipo);
    loro.tipo = ' Pepe Loro Animado';
    console.log(loro.tipo);
    console.log(loro.color);
    console.log(loro);


    console.log("---------------------------------------");


    console.log(loro);
    console.log(duck);


    // Además de lo que se hereda de Animal, se quiere añadir un comportamiento que sea exclusivo de los objetos Bird. Aquí, Bird obtendrá una función fly(). Las funciones se añaden al prototype de Bird's del mismo modo que cualquier función constructor:


    // Ahora las instancias de Bird tendrán métodos tanto eat() como fly():

}

{
    // === Desafio ===

    // Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog. A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.
    Animal.prototype.eat = function () { console.log("nom nom nom"); };

    function Dog() { }

    // Cambia solo el código debajo de esta línea




    // Cambia solo el código encima de esta línea

    let beagle = new Dog();


}
{
    // === solucion ===

    // Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog. A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.

    function Animal() { }
    Animal.prototype.eat = function () {
        // console.log("nom nom nom");
    };

    function Dog() { };

    // Cambia solo el código debajo de esta línea
    Dog.prototype.constructor = Dog;
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.bark = function () {
        // console.log('Woof!');
    };



    // Cambia solo el código encima de esta línea


    let beagle = new Dog();

    beagle.eat();
    beagle.bark();

    // console.log(beagle instanceof Dog);
    // console.log(beagle.constructor);





}