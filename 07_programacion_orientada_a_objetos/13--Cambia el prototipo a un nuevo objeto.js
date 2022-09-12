{
    //*     Cambia el prototipo a un nuevo objeto
    function Bird(name) {
        this.name = name;
    }
    // Hasta ahora, has estado agregando propiedades al prototype (prototipo) individualmente:

    Bird.prototype.numLegs = 2;

    // Esto se vuelve tedioso después de varias propiedades.

    Bird.prototype.eat = function () {
        console.log("nom nom nom");
    };

    Bird.prototype.describe = function () {
        console.log("My name is " + this.name);
    };
}
let cacatua = new Bird('poke');

console.log(cacatua.numLegs);
cacatua.eat();
cacatua.describe();

{


    // Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades son añadidas todas a la vez:
    function Bird(name) {
        this.name = name;
    }

    Bird.prototype = {
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
    
    console.log(loro.constructor === Bird)
    console.log(loro.constructor === Object);
    console.log(loro instanceof Bird);
}
{
    // ===DESAFIO===

    // Agrega la propiedad numLegs, y los dos métodos eat() y describe() al prototype de Dog, estableciendo prototype a un nuevo objeto.
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype = {
        // Cambia solo el código debajo de esta línea

    };
    let salchicha = new Dog();

    salchicha.name = "pancho";

    Dog.prototype = {
        numLegs: 2,
        eat: function () {
            console.log("nom,nom,nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }

    };
}
{
    // ===SOLUCION===

    // Agrega la propiedad numLegs, y los dos métodos eat() y describe() al prototype de Dog, estableciendo prototype a un nuevo objeto.
    function Dog(name) {
        this.name = name;
    }

    Dog.prototype = {
        // Cambia solo el código debajo de esta línea

    };
    let salchicha = new Dog();

    salchicha.name = "pancho";

    Dog.prototype = {
        numLegs: 2,
        eat: function () {
            console.log("nom,nom,nom");
        },
        describe: function () {
            console.log("My name is " + this.name);
        }

    };
}