{

    // ===EXPLICACION===

    //     Itera sobre todas las propiedades

    // Ahora has visto dos tipos de propiedades: propiedades directas y propiedades prototype. Las propiedades directas se definen directamente en la propia instancia del objeto. Y las propiedades prototype se definen en el prototype.

    function Bird(name) {
        this.name = name;  //PROPIEDA DIRECTA
    }

    Bird.prototype.numLegs = 2; // PROPIEDAD prototype 

    let duck = new Bird("Donald");

    // A continuación, se explica cómo se agregan las propiedades directas de duck al arreglo ownProps y las propiedades prototype al arreglo prototypeProps:

    let ownProps = [];
    let prototypeProps = [];

    //* /*👉 for...in 👈*/ La instrucción for-in itera sobre todas las propiedades enumerables de un {objeto}. Cuando desee enumerar solo las propiedades propias de un objeto (las que no se heredan), usar el método hasOwnProperty:

    for (let property in duck) {
        console.log(property);
        if (duck.hasOwnProperty(property)) {
            console.log(duck.hasOwnProperty(property));
            console.log(property);
            ownProps.push(property);
            console.log(ownProps);
        } else {
            console.log(duck.hasOwnProperty(property));
            console.log(property);
            prototypeProps.push(property);
            console.log(prototypeProps);
        }
    }

    //* El[ hasOwnProperty()] método devuelve true si la propiedad especificada es una propiedad (directa) del objeto, incluso si el valor es nullo undefined. El método devuelve false si la propiedad se (hereda o no se ha declarado en absoluto). A diferencia del operador in , este método no comprueba la propiedad especificada en la cadena de prototipos del objeto.

    console.log(ownProps);//debe mostrar["name"] en la consola
    console.log(prototypeProps) //debe mostrar["numLegs"].
}

{
    // === DESAFIO ===

    // Agrega todas las propiedades directas de beagle al arreglo ownProps. Agrega todas las propiedades prototype de Dog al arreglo prototypeProps.

    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.numLegs = 4;

    let beagle = new Dog("Snoopy");

    let ownProps = [];
    let prototypeProps = [];

    // Cambia solo el código debajo de esta línea
}
{
    // === SOLUCION ===

    // Agrega todas las propiedades directas de beagle al arreglo ownProps. Agrega todas las propiedades prototype de Dog al arreglo prototypeProps.

    function Dog(name) {
        this.name = name;
    }

    Dog.prototype.numLegs = 4;

    let beagle = new Dog("Snoopy");

    let ownProps = [];
    let prototypeProps = [];

    // Cambia solo el código debajo de esta línea
    for (let property in beagle) {

        if (beagle.hasOwnProperty(property)) {
            console.log(beagle.hasOwnProperty(property));
            console.log(property);
            ownProps.push(property)
        }
        else {
            console.log(beagle.hasOwnProperty(property));
            console.log(property);
            prototypeProps.push(property)
            console.log(prototypeProps);
        }
        console.log(ownProps);
        console.log(property);

    }
}
