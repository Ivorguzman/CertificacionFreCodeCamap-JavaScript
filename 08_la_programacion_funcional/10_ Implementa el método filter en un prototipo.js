
// Implementa el método filter en un prototipo

// Puedes aprender mucho sobre el método filter si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().


// La variable global
const s = [23, 65, 98, 5];

{

  // === Desafio ===
  // Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.
  const s = [23, 65, 98, 5];

  Array.prototype.myFilter = function (callback) {
    // Cambia solo el código debajo de esta línea
    const newArray = [];
    // Cambia solo el código encima de esta línea
    return newArray;
  };

  const new_s = s.myFilter(function (item) {
    return item % 2 === 1;
  });
}


{
  // === Solucion  ===
  {
    //===  Analizando callback  con forEach() del desafio ===

    const s = [23, 65, 98, 5];
    let newArray = [];

    function myFilter(item, callback) {

      // console.log(newArray);
      item.forEach(callback);
      return newArray;


    }
    let new_s = myFilter(s, function (item) { if (item % 2 === 1) { newArray.push(item); } });
    // console.log(new_s);

    /*     
        function myFilter(callback) {
          s.forEach(function (item) {
            if (item % 2 === 1) {
              newArray.push(item);
              console.log(newArray);
            }
    
          });
        }
     */
  }


  {
    const s = [23, 65, 98, 5];

    Array.prototype.myFilter = function (callback) {
      // Cambia solo el código debajo de esta línea
      const newArray = [];
      console.log(callback);
      console.log(this); //s
      this.forEach((item) => {
        console.log(item % 2);
        console.log(item % 2 === 1);
        console.log(callback(item));
        if (callback(item) === true) {
          console.log('entre');
          newArray.push(item);
          newArray.push(item % 2 === 1);
        }
      });

      // Cambia solo el código encima de esta línea
      return newArray;
    };

    const new_s = s.myFilter(function (item) { return item % 2 === 1; });

    console.log(new_s);







  }

}





{
  /*👉=== Solucion con el This con buclke for ===👈*/

  Array.prototype.myFilter = function (callback) {
    var newArray = [];
    // Add your code below this line
    console.log(this);//s
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i]) === true) {
        newArray.push(this[i]);
      }
    }
    // Add your code above this line
    return newArray;
  };

  var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
  });

  // console.log(new_s);
}