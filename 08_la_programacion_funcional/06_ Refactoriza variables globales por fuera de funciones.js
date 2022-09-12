{

    // ===Explicacion===

    //*Refactoriza variables globales por fuera de funciones

    // Hasta ahora, hemos visto dos principios distintos para la programación funcional:

    // No alteres una variable u objeto: crea nuevas variables y objetos y devuélvelos, si es necesario, desde una función. Pista: usar algo como const newArr = arrVar, donde arrVar es un arreglo, simplemente creará una referencia a la variable existente y no una copia. Así que cambiar un valor en newArr cambiaría el valor en arrVar.

    // Declara parámetros de función: cualquier cálculo dentro de una función depende sólo de los argumentos pasados a la función y no en ningún objeto o variable global.

    // Añadir uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con arreglos u objetos más complejos.
}

{
    //* ===Desafio===


    //*  Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las funciones:
    // *  1) La función add debe agregar el bookName dado al final del arreglo pasado a esta y devolver un nuevo arreglo (lista).
    // *  2) La función remove debe eliminar el bookName dado del arreglo pasado a esta.

    //! Nota: ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser añadido antes del parámetro bookName.

    // La variable global
    const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

    // Cambia el código debajo de esta línea
    function add(bookList, bookName) {
        let bookListCopy = bookList.slice();
        bookListCopy.push(bookName);
        // console.log(bookListCopy);
        return bookListCopy;
        // Cambia el código encima de esta línea
    }

    // Cambia el código debajo de esta línea
    function remove(bookList, bookName) {
        let bookListCopy = [...bookList];
        // console.log(bookListCopy);
        const book_index = bookListCopy.indexOf(bookName);
        // console.log(book_index);
        if (book_index >= 0) {
            bookListCopy.splice(book_index, 1);
            return bookListCopy;
            // Cambia el código encima de esta línea
        }
    }

    /*👉
        const newBookList = add(bookList, 'A Brief History of Time')
        console.log(newBookList);
    
        const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
        console.log(newerBookList);👈*/

    const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies'); //remove('A Brief History of Time','On The Electrodynamics of Moving)
    // console.log(newestBookList);
}

{
    //! ===Solucion===


    //* Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las funciones. La función add debe agregar el bookName dado al final del arreglo pasado a esta y devolver un nuevo arreglo (lista). La función remove debe eliminar el bookName dado del arreglo pasado a esta.

    //* Nota: ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser añadido antes del parámetro bookName.


    //! La variable global  
    // La variable global
    const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

    // Cambia el código debajo de esta línea
    function add(bookList, bookName) {
        let newbookList = bookList.slice();
        newbookList.push(bookName);
        return newbookList;

        // Cambia el código encima de esta línea
    }


    // Cambia el código debajo de esta línea
    function remove(bookList, bookName) {
        let newbookList = bookList.slice();
        let book_index = newbookList.indexOf(bookName);
        console.log(book_index);
        if (book_index >= 0) {
            console.log(newbookList[book_index]);
            console.log("  Parametos de el newbookList.splice(book_index, book_index)  ==> " + book_index, book_index);
            newbookList.splice(book_index, book_index);
            console.log(" ");
            return newbookList;

            // Cambia el código encima de esta línea
        }
    }

    //console.log(add(bookList, "A Brief History of Time"))
    //console.log(remove(bookList, "Disquisitiones Arithmeticae"))
    console.log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));
}