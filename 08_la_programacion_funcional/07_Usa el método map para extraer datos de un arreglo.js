
{

    /*
    //! === Explicacón ===
    
    👉Usa el método "map" para extraer datos de un arreglo👈*/

    // Hasta ahora hemos aprendido a utilizar funciones puras para evitar efectos secundarios en un programa. Además, hemos aprendido el valor de tener una función que solo depende de sus argumentos de entrada.

    // Este es solo el principio. Como su nombre indica, la programación funcional se centra en una teoría de funciones.

    // Tendría sentido pasarlos como argumentos a otras funciones y devolver una función de otra función. Las funciones se consideran Objetos de primera calase  en JavaScript, lo que significa que pueden ser usados como cualquier otro objeto. Pueden guardarse en variables, almacenarse en un objeto o pasarse como argumentos de función.

    /// Empecemos con algunas funciones de arreglos simples, que son métodos en el prototipo de objetos del arreglo. En este ejercicio estamos utilizando Array.prototype.map() o más específicamente map.

    /*👉El método map() iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo👈*/ ///que contiene los resultados de llamar a la función callback en cada elemento.//
    /*👉Esto lo hace sin mutar el arreglo original.👈*/

    /// Cuando se utiliza la función callback, se pasan tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo al que se llamó el método map.

    /// A continuación se muestra un ejemplo con el método map() en el arreglo users para devolver un nuevo arreglo que contiene solo los nombres de los usuarios como elementos. Para que sea más fácil, el ejemplo solo utiliza el primer argumento del callback.

    {
        const users = [{ name: 'John', age: 34, }, { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 }];
        users;

        {
            const names = users.map((user) => user.name);
            // console.log(names);
        }


        const names = users.map((user) => {
            console.log(user);
            return user.name;
        });
        console.log(names);


    }


}
//! === PRACTICAS PERSONALES ===


{

    //* Practica 1 aplicando map

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


    /*👉 const productosConDescuentos = productos.map(({ precio }) => { //!  ==> Desarmar el parametro👈*/

    const productosConDescuentos = productos.map(function (producto) {
        if (producto.precio < 1000) return producto;  //! nos sacamos de ensima el caso que no interesa (Retorno temprano)

        // producto.precio = producto.precio * 0.9; //! ERROR: se modifica el array original

        return {
            ...producto,
            precio: producto.precio * 0.9
        };


    });


    console.log(productos);
    console.log(productosConDescuentos);

}


{


    //* Practica 1 aplicando filter y map




}



{
    // El arreglo [ watchList ] contiene objetos con información sobre varias películas. Usa map en watchList para asignar un nuevo arreglo de objetos a la variable ratings. Cada película en el nuevo arreglo debe tener solo una tecla title con el nombre de la película, y una tecla rating con la calificación IMDB. El código en el editor utiliza actualmente un bucle for para hacer esto, por lo que debes reemplazar la funcionalidad del bucle con tu expresión map.
    // La variable global
}
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
    // === Desafio ===


    console.log("--- === Desafio === ---");
    const ratings = [];
    const ratings2 = [];
    for (let i = 0; i < watchList.length; i++) {
        console.log(watchList[i].Title);
        console.log(watchList[i].imdbRating);
        console.log("---------=== Con sintaxis de Corchete === ---------");
        ratings.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
        console.log('  ');
        ratings2.push({ title: watchList[i].Title, rating: watchList[i].imdbRating });
    }
    // Cambia solo el código encima de esta línea
    console.log('  ');
    console.log("=== Con sintaxis de Corchete ===");
    console.log(ratings);
    console.log('  ');
    console.log(JSON.stringify(ratings));
    console.log("=== Con sintaxis de Punto ===");
    console.log(ratings2);
    console.log('  ');
    console.log(JSON.stringify(ratings2));
    console.log('  ');

}

{
    /// === Solucion del desafio con for in ===

    {
        const array = [];
        for (let i = 0; i < watchList.length; i++) {
            array.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
        }
        console.log("=== Con sintaxis de Corchete ===");
        console.log(array);
    }
    {
        const array2 = [];
        for (let i = 0; i < watchList.length; i++) {
            array2.push({ title: watchList[i].Title, rating: watchList[i].imdbRating });
        }
        console.log("=== Con sintaxis de Punto === ");
        console.log(array2);
    }
}
{

    /// === Solucion del desafio ===
    // console.log(watchList.length - 1)
    // Submitted by: TitenQ <titenq@gmail.com>

    /* 
      array.map(function (currentValue, index, array) { }, thisValue);
    
      currentValue - required
      index - optional
      array - optional
      thisValue - optional 
    */

    const ratings = watchList.map((array) => ({ title: array.Title, rating: array.imdbRating }));

    const años = watchList.map(function (array) {
        return { año: array.Year, fecha: array.Released };
    });

    const sensura = watchList.map(function (array) {
        let pelicula = { Titulo: array.Title, Año: array["Year"], Clase: array.Rated };
        // console.log(pelicula);
        return pelicula;
    });

    const pulicidad = watchList.map((array) => ({ Titulo: array["Title"], propaganda: array.Poster }));
    // console.log(pulicidad);

    const premios = watchList.map(array => ({ Pelicula: array.Title, Premio: array.Awards }));
    // console.log(premios);

    // === DESTRUCTURACION ===

    const origen = watchList.map(({ Title: Titulo, Country: Paises }) => ({ Titulo, Paises }));
    // console.log(origen);
}

{
    /// === Solucion del desafio con un forEach() ===
    // Submitted by: TitenQ <titenq@gmail.com>    
    /* 
      array.forEach(function (currentValue, index, array) { }, thisValue);
    
      currentValue - required
      index - optional
      array - optional
      thisValue - optional 
    */

    const newWatchList = watchList.slice();
    let newArray = [];
    newWatchList.forEach((array) => {
        return newArray.push({ Title: item.Title.toUpperCase(), rating: item.imdbRating });
    });
    console.log(newArray);
}




