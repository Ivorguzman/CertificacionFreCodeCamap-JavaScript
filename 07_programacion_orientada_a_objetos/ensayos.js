{
    function Bird(name) {
        this.name = name;
    }

    Bird.prototype.numLegs = 2;

    let loro = new Bird();

    console.log("------------Object.keys ( __ )---------------------");

    console.log(Object.keys(loro));




    const object1 = {
        a: 'somestring',
        b: 42,
        c: false
    };

    console.log(Object.values(object1));


    {
        console.log("--------------for (let __ in __ ) -------------------------");
        for (let propiedad in loro) {
            console.log(propiedad);
        }
    }

}

console.log("---------------- __in__ -----------------------");

{
    let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
    console.log(0 in trees);
    console.log(3 in trees);
    console.log(6 in trees);

    console.log('bay' in trees);
}

console.log("---------------------------------------");
{

    const car = { make: 'Honda', model: 'Accord', year: 1998 };

    console.log('make' in car);

    delete car.make;

    console.log('make' in car);

    if ('make' in car === false) {
        car.make = 'Suzuki';
        console.log('make' in car);
    }

    console.log(car.make);
}

console.log("---------------------------------------");

{

    function Bird(name) {
        this.name = name;
    }

    Bird.prototype.numLegs = 2;


    let canary = new Bird();

    console.log('name' in Bird);
    console.log('name' in canary);
    console.log(Object.keys(canary));

    Bird.prototype.eat = function () {
        console.log('nom nom nom ');
    };

    Bird.prototype.describelo = function () {
        console.log(this);
        console.log('My name is ' + this.name);
    };
    console.log('describelo' in canary);
    canary.eat;




    

    console.log("------- getPrototypeOf(__) ---------------");

    console.log(Object.getPrototypeOf(canary));

    console.log("---- Object.getOwnPropertyDescriptor(__,__) ------");

    let valor_property = Object.getOwnPropertyDescriptor(canary, 'name');
    console.log(valor_property);

    console.log("---------------------------------------");

    let valor_property2 = Object.getOwnPropertyDescriptor(canary, 'describelo');
    console.log(valor_property2);



}


{

    console.log("__Practica de prototipos__");
    
    function Animal(volar) {
        this.volar = volar;
      } // super type
      this.numLegs4 = 4 + " contexto Globla window";
      console.log(this.numLegs4);
      // En el siguiente ejemplo, el constructor Bird define dos propiedades y dos metodos () :  y comparte el comportamiento de Animal con el super type:
      Animal.prototype = {// super prototype
        correr: function () {
    
          console.log('CORRO con mis ' + this.numLegs4 + ' patas __contexto Animal()__!<br>'); // Contexto Animal()
        },
        // correr: () => {
        //   console.log('CORRO con mis ' + this.numLegs4 + ' patas!<br>'); // Contexto Global
        // },
        constructor: Animal,
        eat: function () {
          console.log("nom nom nom");
        },
        numLegs4: 4,
        numLegs2: 2,
      };
      // Cambia solo el código debajo de esta línea
    
      let duck = Object.create(Animal.prototype); // Cambia esta línea
      let beagle = Object.create(Animal.prototype); // Cambia esta línea
    
      console.log("---------------------------------------");
      let loro = new Animal('Si vuelo');
      console.log(loro.volar);
      console.log("---------------------------------------");
     
    
    
    
      duck.eat();
      console.log(duck.numLegs2);
      beagle.correr();
      duck.eat();
      beagle.eat();
      console.log(beagle.numLegs4);
      console.log(duck.numLegs2);
      console.log(duck instanceof Animal);
      console.log(beagle instanceof Animal);
      console.log(beagle.constructor === Animal);
      console.log(Object.prototype.isPrototypeOf(duck));
      console.log(Object.prototype.isPrototypeOf(beagle));
      console.log(Object.prototype.isPrototypeOf(Animal.prototype));
      console.log(beagle.hasOwnProperty("volar"));
      console.log(loro.hasOwnProperty("prueba"));
      console.log(loro.hasOwnProperty("volar"));
      console.log('eat' in loro);
      console.log('correr' in beagle);
      console.log('volar' in loro);
}