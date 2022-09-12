
{
    // === Explicacion ===
    // Como ya has visto, el comportamiento se comparte mediante una herencia. Sin embargo, hay algunos casos en los que la herencia no es la mejor opción. La herencia no funciona bien con objetos que no están relacionados como Bird y Airplane. Ambos pueden volar pero un Bird no es un tipo de Airplane y viceversa.

    // Un mixin se puede describirUn como un término de programación orientado a objetos, , que contiene métodos que pueden ser usados ​​por otras clases sin heredarlos. Es decir, mixin proporciona métodos que implementan un comportamiento específico. No se usa solo sino para agregar el comportamiento a otras clases.

    // Para objetos no relacionados es mejor utilizar mixins. Un "mixin" permite a otros objetos utilizar una colección de funciones.

    let flyMixin = function (obj) {
        obj.fly = function () {
            console.log("Yo Puesdo volar");
        };
       
    };

    let bird = {
        name: 'Donald soy un aguila',
        numLengs: 'Tengo 2 patas'
    };

    let plane = {
        model: 'Avion modelo 777',
        numPassengers: 'Puedo trasladar 524 pasajeros'
    };

    flyMixin(bird);
    flyMixin(plane);

    console.log(bird.name);
    console.log(bird.numLengs);
    bird.fly();

    console.log('----------------');

    console.log(plane.model);
    console.log(plane.numPassengers);
    plane.fly();


    // El flyMixin toma a cualquier objeto y le da el método fly.


    // Aquí bird y plane son pasados a flyMixin el cual después asigna la función fly a cada objeto. Ahora bird y plane pueden volar largas ditancias:


    // a consola mostraría la cadena Flying, wooosh! dos veces, una por cada llamada a .fly().

    // Ten en cuenta cómo el mixin permite que el mismo método fly sea reutilizado por los objetos bird y plane los cuales no están relacionados.
}

{
    //  === Desafio ===

    // Crea un mixin llamado glideMixin que defina un método llamado glide. Luego utiliza el glideMixin para dar a bird y boat la habilidad de planear.

    let bird = {
        name: "Donald",
        numLegs: 'Tengo 2 patas'
    };

    let boat = {
        name: "Warrior",
        type: "race-boat"
    };

    // Cambia solo el código debajo de esta línea



}
{
    //  === Solucion ===

    // Crea un mixin llamado glideMixin que defina un método llamado glide. Luego utiliza el glideMixin para dar a bird y boat la habilidad de planear.
    let bird = {
        name: "Donald",
        numLegs: 'Tengo 2 patas'
    };

    let boat = {
        name: "Warrior",
        type: "race-boat"
    };

    // Cambia solo el código debajo de esta línea

    let glideMixin = function (obj) {
        obj.glide = function () {
            console.log(' y planeo');
        };

    };

    glideMixin(bird);
    glideMixin(boat);
    
    console.log("--------------------");
    console.log(bird.name);
    console.log(bird.numLegs);
    bird.glide();
    
    console.log("--------------------");
    console.log(boat.name);
    console.log(boat.type);
    boat.glide();

    bird.name = 'Pepe'
    console.log(bird.name);
}
