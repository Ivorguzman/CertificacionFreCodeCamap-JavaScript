

'use strict';

{
  // Usa el método de "filter" para extraer datos de un arreglo

  // Otra función útil de los arreglos es Array.prototype.filter() o simplemente filter().

  // filter llama a una función en cada elemento de un arreglo y devuelve un nuevo arreglo que contiene solo los elementos por lo que esa función devuelve true. En otras palabras, filtra el arreglo, basándose en la función que se le pasa. Al igual que map, hace esto sin necesidad de modificar el arreglo original.

  // La función callback acepta tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo sobre el que se llamó al método filter.

  // A continuación se muestra un ejemplo en el que se utiliza el método filter en el arreglo users para devolver un nuevo arreglo que contiene sólo a los usuarios menores de 30 años. Para que sea más fácil, el ejemplo solo utiliza el primer argumento de la función callback.


  const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];

  const usersUnder30 = users.filter(function (user) {
    return user.age < 30;
  });
  console.log(usersUnder30);// La consola muestra el valor [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].
}

// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

{

  //!=== Desafio ===

  // La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza una combinación de filter y map 
  //en watchList para asignar un nuevo arreglo de objetos con solo las claves  title y rating  . 
  // El nuevo arreglo solo debe incluir objetos donde imdbRating es mayor o igual a 8.0.
  // Ten en cuenta que los valores rating se guardan como cadenas en el objeto y puedes necesitar
  //convertirlos en números para realizar operaciones matemáticas en ellos.

  // Cambia solo el código debajo de esta línea

  const filteredList = "";

  // Cambia solo el código encima de esta línea

  console.log(filteredList);

}


{

  //! === Solucion ===


  // Cambia solo el código debajo de esta línea


  

  const filteredList = watchList
    .map(function (peliculas) {
      return {
        title: peliculas.Title,
        rating: peliculas.imdbRating
      };
    })
    .filter(function (pelicula) {
      return pelicula.rating >= 8;
    });

  // Cambia solo el código encima de esta línea

  console.log(filteredList);

}



{

  {

    //! Solución 1



    var filteredList = watchList
      .map(function (movie) {
        console.log(this);
        console.log(movie);
        return {
          //Renombrando los atributos por medio de la destructiracion sintaxis del punto
          title: movie.Title,
          rating: movie.imdbRating
        };
      })
      .filter(function (movie) {
        console.log(movie);
        // return true it will keep the item
        // return false it will reject the item
        return parseFloat(movie.rating) >= 8.0;
      });
    console.log(filteredList);

    //! Código Explicación

    // En la solución para principiantes, estamos mapeando la matriz watchList para reducir la cantidad de datos con los que tenemos que trabajar y solo devolvemos los dos elementos que necesitamos.Una vez que hemos reducido los elementos a lo que nos interesa(Título y imdbRating), filtramos y solo devolvemos los elementos restantes que cumplen con los criterios.En este caso, tiene un imdbRating de 8.0 o superior.
  }

  {
    //! Solución 2
    // Add your code below this line

    var filteredList = watchList
      .map(function (e) {
        //Renombrando los atributos por medio de la destructiracion sintaxis de corchete
        return { title: e["Title"], rating: e["imdbRating"] };
      })
      .filter(e => e.rating >= 8);

    console.log(filteredList);


  }


  {
    //! Solución 3
    // Only change code below this line

    var filteredList = watchList
      .map(function ({ Title: title, imdbRating: rating }) {
        return ({ title, rating });
      })
      .filter(function ({ rating }) {
        return rating > 8;
      });
    // .filter(e=>e.Year=="2009");
    // .filter(e=>e.Year=="2009");

    // Only change code above this line

  }

  {
    //! Solución 4 con uso del parametro index de la funcion map y destructuración

    const filteredList = watchList.filter((item) => {
      console.log(this);
      console.log(item);
      return item.imdbRating >= 8.0;
    }).map((item, index) => {
      console.log(item);
      // return ( { 'title': watchList[index].Title, 'rating': watchList[index].imdbRating })
      const { Title: title, imdbRating: rating } = item;  // destructuracion
      return { title, rating };
    }
    );

    // Cambia solo el código encima de esta línea

    console.log(filteredList);
  }
  {

    //! === PRACTICAS PERSONALES ==>  Creando my propia funcion map() ==> Map()

    Array.prototype.Map = function (funcionCallBack) {
      const nuevo_array = [];
      for (let i = 0; i < watchList.length; i++) {
        nuevo_array[i] = funcionCallBack(watchList[i]);
      }
      return nuevo_array;
    };

    const nuevo_array = watchList.Map(({ Title: title, imdbRating: rating }) => ({ title, rating }));
    console.log(nuevo_array);


  }
}
{

  //! === PRACTICAS PERSONALES ==> 2 ===
  const productos = [
    {
      nombre: "Camiseta",
      precio: 500
    },
    {
      nombre: " Zapatillas",
      precio: 2000
    },
    {
      nombre: "Pantalón",
      precio: 1000
    }
  ];

  const productoConDescuento = productos.filter((producto) => { //! ===> un filter
    return producto.precio >= 1000;
  })
    .map((producto) => {
      let pieza = producto.nombre;
      let precio = producto.precio;
      let montoPorcentaje = 10;
      let porcentajeDescuento = montoPorcentaje / 100;
      let descuento = producto.precio * porcentajeDescuento;
      let totalPagar = producto.precio - descuento;
      let x = `productos en descuento ${pieza}, precio ${precio} Bs,   descuento del ${montoPorcentaje}%, monto de ldescuento ${descuento} Bs, precio  a cancelar  ${totalPagar} Bs`;
      return x;
    });

  // console.log(productos);
  console.log(productoConDescuento);
}

{

  //! === PRACTICAS PERSONALES ==>  Pruevas por separada de .map()

  var myMapedList = watchList.map(function (movie) {
    console.log(movie);
    return {

      //* Renombrando los atributos
      title: movie.Title,
      rating: movie.imdbRating
    };
  });
  console.log(myMapedList);
}

{
  /*👉 
    //! === PRACTICAS PERSONALES ==>   Pruevas por separada de.filter()👈*/
  var myfilterdList = watchList.filter(function (movie) {
    console.log(movie);
    return parseFloat(movie.rating) >= 8.0;
  });
  console.log(myfilterdList);
}

{

  //! === PRACTICAS PERSONALES ==> 2 ===
  {

    const almuerzos = [
      { principal: 'arepa', postre: 'helado' },
      { principal: 'tacos', postre: 'torta de queso' },
      { principal: 'arepa', postre: 'bienmesabe' },
      { principal: 'pizza', postre: 'galletas' },
      { principal: 'arepa', postre: 'golfeados' },
      { principal: 'suchi', postre: 'quesillo' },
      { principal: 'arepa', postre: 'churros' }

    ];

    //* practica 2 más eficiente y más elegante === 

    const postresSoloArepas = almuerzos.filter((ItemFilter) => {
      console.log(ItemFilter.principal === 'arepa');
      return ItemFilter.principal === 'arepa';

    })
      .map((itemMap) => {
        console.log(itemMap);
        return itemMap.postre;

      });


    console.log(postresSoloArepas);
  }

}

{

  //! === PRACTICAS PERSONALES ==> 3 ===

  const productos = [
    {
      nombre: "Camiseta",
      precio: 500
    },
    {
      nombre: " Zapatillas",
      precio: 2000
    },
    {
      nombre: "Pantalón",
      precio: 1000
    }
  ];

  //!   NOTA : PREDICADO FUNCION QUE AFIRMA O NIEGA SI UN ELEMENTO CUMPLE CIERTA CONDICION.



}
{
  //! === PRACTICAS PERSONALES ==> 4 ===

  function getIndexToIns(arr) {
    return arr > 50;
  }

  let resultado = [40, 60].filter(getIndexToIns);
  console.log(resultado);
}

{
  //! === PRACTICAS PERSONALES ==> 5 ===
  var fruits = ['apple', 'Banana', 'grapes', 'mango', 'orange'];

  /**
   * Filtra la matríz en función de un criterio de búsqueda (query)
   */
  function filterItems(query) {
    return fruits.filter(function (el) {
      console.log(el.toLowerCase());
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  console.log(filterItems('ap')); // ['apple', 'grapes']
  console.log(filterItems('an')); // ['banana', 'mango', 'orange']

}



{
  //! === PRACTICAS PERSONALES ==> 6 (Forma tradicional) ===

  var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

  var entradasInvalidas = 0; //* contador

  let resultadoFiltrado = arr.filter((obj) => {
    if ('id' in obj && typeof (obj.id) === 'number' && !isNaN(obj.id)) {
      return true;
    } else {
      entradasInvalidas++;
      return false;
    }
  });

  console.log(resultadoFiltrado);
  console.log('Número de Entradas Invalidas = ', entradasInvalidas);
}

{
  //! === PRACTICAS PERSONALES ==> 6.1 ( Engorrosamente sofisticada) ===

  var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

  var entradasInvalidas = 0;
  // Si el elemento tiene un atributo id, y su valor correspondiente es un numero
  // Y no es el valor NaN, entonces es una entrada válida



  function filtrarPorID(obj, index) {
    // El operador in devuelve  true si la propiedad está especificada en el objeto especificado o su prototipo.
    // Sintaxis
    // prop in object  ('id' in obj)

    if ('id' in obj && typeof (obj.id) === 'number' && !isNaN(obj.id)) {

      return true, console.log(` indice de las entrada valida = ${index}`);
    } else {
      entradasInvalidas++;
      return false, console.log(` indice de las entrada invalida = ${index}`);
    }
  }

  var arrPorID = arr.filter(filtrarPorID);
  console.log('Array Filtrado\n', arrPorID);
  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

  console.log('Número de Entradas Invalidas = ', entradasInvalidas);
  // 4
}