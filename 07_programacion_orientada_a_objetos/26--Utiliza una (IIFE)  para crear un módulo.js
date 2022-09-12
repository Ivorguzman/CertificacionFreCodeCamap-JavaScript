
{
    // === Explicacion ===

    // Un patrón común en JavaScript es la ejecución de una función apenas declarada:
/*👉    
    let bird = {
        name: "Donald",
        numLegs: 'Tengo 2 patas'
    };

    let boat = {
        name: "Warrior",
        type: "race-boat"
    };




    function glideMixin(obj) {
        obj.glide = function () {
            console.log("Gliding on the water");
        };
    }

    function flyMixin(obj) {
        obj.fly = function () {
            console.log("Flying, wooosh!");
        };
    }

    glideMixin(bird);
    glideMixin(boat);

    flyMixin(bird);
    flyMixin(boat);

    console.log("--------------------");
    console.log(bird.name);
    console.log(bird.numLegs);
    bird.glide();
    bird.fly();

    console.log("--------------------");
    console.log(boat.name);
    console.log(boat.type);
    boat.glide();
    boat.fly();

    bird.name = 'Pepe';
    console.log(bird.name);
👈*/
}

{
    console.log("------_ IIFE() _----");
    
    {
        let motionModule = (function () {
            return {
                glideMixin: function (obj) {
                    obj.glide = function () {
                        console.log("Gliding on the water");
                    };
                },
                flyMixin: function (obj) {
                    obj.fly = function () {
                        console.log("Flying, wooosh!");
                    };
                }
            };
        })();
    }
}




// === Desafio === 

// Crea un módulo llamado funModule para envolver los dos mixins isCuteMixin y singMixin. funModule debe devolver un objeto.

{

    //Modifica este codigo

    let isCuteMixin = function (obj) {
        obj.isCute = function () {
            return true;
        };
    };

    let singMixin = function (obj) {
        obj.sing = function () {
            console.log("Singing to an awesome tune");
        };

    };
}

{

    // === Solucion ===

    let funModule = (function () {

        let bird = {
            name: "Donald",
            numLegs: 'Tengo 2 patas'
        };
    
        let boat = {
            name: "Warrior",
            type: "race-boat"
        };
    
        function glideMixin(obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        }
    
        function flyMixin(obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    
        glideMixin(bird);
        glideMixin(boat);
    
        flyMixin(bird);
        flyMixin(boat);
    
        console.log("--------------------");
        console.log(bird.name);
        console.log(bird.numLegs);
        bird.glide();
        bird.fly();
    
        console.log("--------------------");
        console.log(boat.name);
        console.log(boat.type);
        boat.glide();
        boat.fly();
    
        bird.name = 'Pepe';
        console.log(bird.name);



    })();
}


