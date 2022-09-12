{

    //! Ejercicio

    // / Boo who (Booleano Quién)

    // Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

    // Booleanos primitivos son true y false.

    function booWho(bool) {
        return bool;
    }

    booWho(null);

}
{



    //! Soluicion

    // / Boo who (Booleano Quién)

    // Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

    // Booleanos primitivos son true y false.

    function booWho(bool) {

        return typeof bool === 'boolean';
    }

    console.log(booWho([2,3,4,5]));
    console.log(booWho(1));
    console.log(booWho('true'));
    console.log(booWho(true));
    console.log(booWho('false'));
    console.log(booWho(false));
} 