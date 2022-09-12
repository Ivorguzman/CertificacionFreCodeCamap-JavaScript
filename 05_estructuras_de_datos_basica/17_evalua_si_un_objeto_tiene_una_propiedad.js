
{
    // Ahora podemos agregar, modificar y eliminar claves de los objetos.Pero, ¿y si sólo queremos saber si un objeto tiene una propiedad específica ? JavaScript nos proporciona dos maneras diferentes de hacerlo.Uno utiliza el método hasOwnProperty() y el otro utiliza la palabra clave in.Si tenemos un objeto users con una propiedad de Alan, podríamos comprobar su presencia de cualquiera de las siguientes maneras:

    /*👉 users.hasOwnProperty('Alan');👈*/
    /*👉 'Alan' in users;👈*/

    //    Ambos devuelven true.

}

{
    // === Desafio ===

    // Termina de escribir la función para que devuelva "true" sólo si el objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah y Ryan, y devuelve false de lo contrario.

    let users = {
        Alan: {
            age: 27,
            online: true
        },
        Jeff: {
            age: 32,
            online: true
        },
        Sarah: {
            age: 48,
            online: true
        },
        Ryan: {
            age: 19,
            online: true
        }
    };

    // El método  hasOwnProperty()devuelve un booleano indicando si el objeto tiene la propiedad especificada.

    // El operadorin devuelve  truesi la propiedad especificada está en el objeto especificado o su prototipo.

}
{

    {            // === Solocion A (Notacin de punto)
        let users = {
            Alan: {
                age: 27,
                online: true
            },
            Jeff: {
                age: 32,
                online: true
            },
            Sarah: {
                age: 48,
                online: true
            },
            Ryan: {
                age: 19,
                online: true
            }
        };

        function isEveryoneHere(userObj) {
            if (
                userObj.hasOwnProperty("Alan") &&
                userObj.hasOwnProperty("Jeff") &&
                userObj.hasOwnProperty("Sarah") &&
                userObj.hasOwnProperty("Ryan")
            ) {
                return true;
            }
            return false;
        }
        console.log(isEveryoneHere(users));
    }

/*👉
    {
        {        
            //!=== Ojo Verificar ===
            
            // === Solocion B ( Notacion de corchete)
            let users = {
                Alan: {
                    age: 27,
                    online: true
                },
                Jeff: {
                    age: 32,
                    online: true
                },
                Sarah: {
                    age: 48,
                    online: true
                },
                Ryan: {
                    age: 19,
                    online: true
                }
            };

            // Array.prototype.every () Determina si todos los elementos en el array satisfacen una condición.

            // Precaución : ¡Llamar este método en un array vacío devuelve  true para cualquier condición!


            return ["Alan", "Jeff", "Sarah", "Ryan"].prototype.every(name => userObj.hasOwnProperty(name))
            function isEveryoneHere(userObj) {
            }
            console.log(isEveryoneHere(users));


            // Explicación del código

            // Utiliza una matriz con todos los nombres que deberían estar presentes en el objeto.

            // El método every se utiliza para validar todos los nombres utilizados junto con el resultado hasOwnProperty  del método en un valor de que true se devuelve durante cada iteración.

            // Si al menos un nombre es evaluado false por el método hasOwnProperty , el método every() regresa false.



        }
    }👈*/
}

