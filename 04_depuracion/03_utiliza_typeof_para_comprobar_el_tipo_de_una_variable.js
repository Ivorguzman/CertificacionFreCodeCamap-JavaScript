


        {
            // Puedes utilizar typeof para comprobar la estructura de datos, o tipo, de una variable. Esto es útil en la depuración cuando se trabaja con múltiples tipos de datos. Si crees que estás sumando dos números, pero uno es en realidad una cadena, los resultados pueden ser inesperados. Los errores de tipo pueden estar al acecho en los cálculos o en las llamadas a funciones. Ten cuidado especialmente cuando accedas y trabajes con datos externos en forma de objeto de JavaScript Object Notation (JSON).

            // Aquí hay algunos ejemplos que utilizan typeof:

            console.log(typeof ""); // ==> string
            console.log(typeof 0);  // ==> number
            console.log(typeof []); // ==> object
            console.log(typeof {}); //  ==> object
            console.log(typeof true); // ==> boolean
            console.log(typeof false); // ==> boolean
            console.log(typeof Null); // ==> 
            console.log(typeof Undefined); // ==> 

            // En orden, la consola mostrará las Cadenas string, number, object, y object.

            // JavaScript reconoce Seis Tipos de Datos primitivos (inmutables): Boolean, Null, Undefined, Number, String, y Symbol(Nuevo con ES6) y Un tipo Elementos para mutables: Object. Ten en cuenta que en JavaScript, los arreglos son técnicamente un tipo de objeto.

            {

                // === Desafio ===

                // Agrega dos sentencias console.log()para comprobar el typeofcde cada una de las dos variables seveny threeen el código.

                let seven = 7;
                let three = "3";
                console.log(seven + three);
                // Cambia solo el código debajo de esta línea
                console.log(typeof(seven));
                console.log(typeof(three));


            }


        }
   