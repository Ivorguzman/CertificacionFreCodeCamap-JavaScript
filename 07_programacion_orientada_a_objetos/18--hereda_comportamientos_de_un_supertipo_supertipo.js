
{
  // En el desafío anterior, creaste un super type llamado Animal que definía comportamientos compartidos por todos los animales:
  function Animal() { } // super type
  // En el siguiente ejemplo, el constructor Bird define dos propiedades y dos metodos () :  y comparte el comportamiento de Animal con el super type:
  Animal.prototype = {// super prototype
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

  // Este desafío y el siguiente, descubrirán como reutilizar los métodos de Animal() dentro de Birdy() y Dog() sin tener que definirlos otra vez. Se utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia del supertype(o objecto padre). Ya conoces una forma de crear una instancia de Animalutilizando el operador new:
  /// let animal = new Animal();

  // Hay algunas desventajas cuando se utiliza esta sintaxis para la herencia, pero son demasiado complejas para el alcance de este desafío. En su lugar, hay un enfoque alternativo que no tiene esas desventajas:
  /// let animal = Object.create(Animal.prototype);

}

{

  // === Desafio===

  // Utiliza Object.create para crear dos instancias de Animal llamadas duck y beagle.
  function Animal() { }

  Animal.prototype = {
    constructor: Animal,
    eat: function () {
      console.log("nom nom nom");
    }
  };

  // Cambia solo el código debajo de esta línea

  let duck; // Cambia esta línea
  let beagle; // Cambia esta línea


}
{

  // === Solucion ===

  // Utiliza Object.create para crear dos instancias de Animal llamadas duck y beagle.

  function Animal() { }

  Animal.prototype = {
    constructor: Animal,
    eat: function () {
      console.log("nom nom nom");
    }
  };

  // Cambia solo el código debajo de esta línea

  let duck = Object.create(Animal.prototype);
  let beagle = Object.create(Animal.prototype);

  console.log(duck);
  console.log(beagle);
}


