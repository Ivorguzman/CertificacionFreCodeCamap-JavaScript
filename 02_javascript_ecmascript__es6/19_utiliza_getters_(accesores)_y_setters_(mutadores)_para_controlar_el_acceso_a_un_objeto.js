
{

  // Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

  // Estas operaciones clásicamente se llaman getters y setters.

  // Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

  // Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.

  let Libro = function (autor) {
    this.autor = autor;
  };

  let josue = new Libro('Josue');
  let salmos = new Libro('Salomon');


  console.log(josue.autor);
  console.log(salmos.autor);

  console.log('--------------');


  class Book {
    constructor(author) {
      this._author = author;
    };

    ///getter
    get writer() {
      console.log(this);
      console.log(this._author);
      return this._author;
    };

    ///setter
    set writer(updatedAuthor) {
      console.log(updatedAuthor);
      console.log(this);
      console.log(this._author);
      this._author = updatedAuthor;
    }
  };

  const novel = new Book('ánonymus');

  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);


  // La consola mostrará las cadenas anonymous y newAuthor.

  // Ten en cuenta la sintaxis usada para invocar el getter y el setter. Ni siquiera se ven como funciones. Los getter y los setter son importantes porque ocultan los detalles internos de la implementación.

  // Nota: Es convención preceder el nombre de una variable privada con un guión bajo (_). Sin embargo, la práctica en sí misma no hace una variable privada.
}


{
  // === Desafio ===

  // Utiliza la palabra clave class para crear una clase Thermostat. El constructor acepta una temperatura Fahrenheit.

  // En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.

  // Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor de la temperatura en Fahrenheit y C es el valor de la misma temperatura en Celsius.

  // Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

  // Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

  // En otras palabras, estás abstrayendo los detalles de la implementación del usuario.
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea

  /*👉const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  let temp = thermos.temperature; // 24.44 en Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 en Celsius👈*/
}

{
  // === Solucion  ===

  // Utiliza la palabra clave class para crear una clase Thermostat. El constructor acepta una temperatura Fahrenheit.

  // En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.

  // Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor de la temperatura en Fahrenheit y C es el valor de la misma temperatura en Celsius.

  // Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

  // Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

  // En otras palabras, estás abstrayendo los detalles de la implementación del usuario.
  // Cambia solo el código debajo de esta línea


  console.log(' ');
  console.log("---=== Solucion  ===----");

  class Thermostat {
    constructor(temp) {
      this._temp = temp;
    }
    // getter ==> Obtener ===> debuelve el valor de un Atributo  
    get temperature() {
      console.log(this._temp);
      return 5 / 9 * (this._temp - 32);
    }
    // setter ==> establecer  ===>  establece un nuevo valor a un atributo
    set temperature(c) {
      console.log(c);
      console.log(this._temp);
      this._temp = (c * 9.0) / 5 + 32;
      console.log(this._temp);
    }
  }

  // Cambia solo el código encima de esta línea

  const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  temp = thermos.temperature; // 24.44 en Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 en Celsius 

}

{
  //* Practica mdn ==> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects#definici%C3%B3n_de_captadores_getters_y_establecedores_setters

  //* Definición de captadores (getters) y establecedores (setters)

  /// Un captador (getter) es un método que obtiene el valor de una propiedad específica.
  /// Un establecedor(setter) es un método que establece el valor de una propiedad específica

  var objeto = {
    a: 7,
    get b() {
      console.log(this);
      return this.a + 1;
    },

    set c(x) {
      this.a = x / 2;
    }
  };

  console.log(objeto.a); // 7

  console.log("----En este punto se inicia el método get b()--------");
  console.log(objeto.b); // 8 <-- En este punto se inicia el método get b().

  console.log("----En este punto se inicia el método  set c(x)------");
  objeto.c = 50;         // <-- En este punto se inicia el método set c(x)
  console.log(objeto.a); // 25
  console.log(objeto.a = 'Modificada en forma directas');
}

{
  function Animal() { };

  Animal.prototype = {
    eat: function () {
      console.log("nom nom nom");
    },
    genero: 'Animal'
  };

  function Bird() { }
  Bird.prototype = Object.create(Animal.prototype);
 

  Bird.prototype.constructor = Bird;
  Bird.prototype.fly = function () {
    console.log("I'm flying!");
  };


  let duck = new Bird();

  duck.eat();
  duck.fly();
  console.log(duck.genero);
}