
{
    // === EXPLICACION ===

    // Entiende la propiedad constructor

    // Hay una propiedad especial constructor ubicada en instancias de objeto duck y beagle que fueron creados en desafíos anteriores:
    function Bird(name) {
        this.name = name;
      };
      function Dog(name) {
        this.name = name;
      }
      
      let duck = new Bird();
      let beagle = new Dog();
      
      console.log(duck.constructor === Bird);
      console.log(beagle.constructor === Dog);
    //   Ambas llamadas console.log devolverían true en la consola.

      function joinBirdFraternity(candidate) {
        if (candidate.constructor === Bird) {
          return true;
        } else {
          return false;
        }
      }
      joinBirdFraternity()

    // Ten en cuenta que la propiedad constructor hace referencia a la función constructor que creo la instancia. La ventaja de la propiedad constructor es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Así es como se podría utilizar:
   
    /// Nota: dado que la propiedad constructor se puede sobreescribir (se verá en los próximos dos desafíos), por lo general, es mejor utilizar el método instanceof para verificar el tipo de un objeto.




}



{
    // === DESAFIO ===

    // Escribe una función joinDogFraternity que tome como parámetro candidate y que con la propiedad constructor, devuelva true si el candidato es un Dog y si no lo es debería devolver false.



    function Dog(name) {
        this.name = name;
    }

    // Cambia solo el código debajo de esta línea


}

{
    // === SOLUCION ===

    // Escribe una función joinDogFraternity que tome como parámetro candidate y que con la propiedad constructor, devuelva true si el candidato es un Dog y si no lo es debería devolver false.


    function Dog(name) {
        this.name = name;
    }

    // Cambia solo el código debajo de esta línea

    function joinDogFraternity(candidate) {
        console.log(candidate);
        console.log(candidate.constructor === Dog);
        if (candidate.constructor === Dog){
            return true
        }
        else{
            return false
        }

    }
    console.log(joinDogFraternity('Juan'));
}





{
    function Bird(name) {
        this.name = name;
      }
      
      Bird.prototype.numLegs = 2;
      
      console.log(Object.keys(Bird));
}

