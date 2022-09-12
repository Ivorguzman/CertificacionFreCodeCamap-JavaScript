
// === EXPLICACION ===
{

    // El último desafío introdujo un método al objeto duck. Usó la notación de puntos duck.name para acceder al valor de la propiedad name dentro de la declaración de retorno:
    {
        console.log("=== BLOQUE 1 ===");
        let duck = {
            name: "Aflac",
            numLegs: 2,
            sayName: function () { return "The name of this duck is " + duck.name + "."; }
        };
        console.log(duck.sayName());
    }
    // Aunque esta es una forma válida de acceder a la propiedad del objeto, existe un problema. Si el nombre de la variable cambia, cualquier código que haga referencia al nombre original también tendría que ser actualizado. En una definición breve de un objeto, esto no es un problema, pero si un objeto tiene muchas referencias a sus propiedades hay una mayor probabilidad de error.
}
console.log(" ");
{
    console.log("=== BLOQUE 2 ===");
    let duck = {
        name: "Aflac",
        numLegs: 2,
        sayName: function () {
            console.log("La propiedad nombre del objeto duck tiene el valor de ==> " + this.name + ".");
            console.log("Valor de (this) dentro del objeto duck es:");
            console.log(this);// contesto  dentro del objeto duck
        }
    };
    console.log(duck.sayName());
    console.log("Valor de (this) fuera del objeto duck es:");
    console.log(this); // contrsto global
    console.log(window);
}
// this es un tema profundo, y el ejemplo anterior es sólo una forma de usarlo. En el contexto actual, this se refiere al objeto con el que el método está asociado al objeto (duck). Si el nombre del objeto se cambia a mallard, no es necesario encontrar todas las referencias a duck en el código. Hace que el código sea reutilizable y mas fácil de leer.





{
    //  === DESAFIO ===
    // Modifica el método dog.sayLegs para eliminar cualquier referencia a dog. Utiliza el ejemplo de duck como orientación.


    let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function () { return "This dog has " + dog.numLegs + " legs."; }
    };
}


{
    //  === SOLUCION ===

    // Modifica el método dog.sayLegs para eliminar cualquier referencia a dog. Utiliza el ejemplo de duck como orientación.

    {
        let dog = {
            name: "Spot",
            numLegs: 4,
            sayLegs: function () { return "This dog has " + dog.numLegs + " legs."; }
        };
    }

    {
        let dog = {
            name: "Spot",
            numLegs: 4,
            sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
        };
    }
}



{
    // ! Uso del metod bind(),arguments,call()}
    //* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    //* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/arguments

    ///===  Uso 1:  Crear una función Bindiada ===
    this.x = 9;
    console.log(x);


    let module = {
        x: 81,
        getX: function () {
            console.log(this);
            return this.x;
        }
    };

    console.log(module.getX()); // 81

    let getX = module.getX;
    console.log(getX);
    console.log(getX()); // 9, porque en este caso, "this" apunta al objeto global
    console.log(getX.bind(module));;
    // Crear una nueva función con 'this' asociado al objeto original 'module'
    let GetXBindiada = getX.bind(module);
    console.log(GetXBindiada()); // 81


    {
        ///===  Uso 2:  Crear una función Bindiada  y uso del objeto arguments===  


        function list() {
            console.log(this);
            console.log(arguments);
            return Array.prototype.slice.call(arguments);// arguments es un objeto que contiene todos los argumentos de la función invocada. Para convertirlo en un array, usamos Array.prototype.slice.call(arguments)  
        }
        console.log(list(38, 39, 40));
        var list1 = list(38, 39, 40); // [38,39,40]

        // Crear funcion (sin referencia this) con argumento inicial predeterminado
        var leadingThirtysevenList = list.bind(undefined, 37);
        var list2 = leadingThirtysevenList(); // [37]
        var list3 = leadingThirtysevenList(38, 39, 40); // [37, 38,39,40]
        console.log(list2);
        console.log(list3);



    }
}


