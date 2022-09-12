{
    // catches el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, después de que se llama al método reject de una promesa. A continuación la sintaxis:
    /*👉
        myPromise.catch(function (error) {
        });
    
    
        myPromise.catch(error => {
    
        });
        👈*/

    // errores el argumento pasado al metodo reject.
}

{
    //  === Desafio ===


    // añade el método catch a tu promesa. Usa error como el parámetro de tu función callback e imprime erroren la consola.

    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
        let responseFromServer = false;

        if (responseFromServer) {
            resolve("We got the data");
        } else {
            reject("Data not received");
        }
    });

    makeServerRequest.then(result => {
        console.log(result);
    });

}
{
    //  === Solucion ===


    // añade el método catch a tu promesa. Usa error como el parámetro de tu función callback e imprime erroren la consola.

    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
        let responseFromServer = false;

        if (responseFromServer) {
            resolve("We got the data");
        } else {
            reject("Data not received");
        }
    });

    makeServerRequest.then(result => {
        console.log(result)
    });

    makeServerRequest.catch(error => {
        console.log(error)
    });

}