
        {
            // Cuando una función o método no recibe argumentos, puedes olvidarte de incluir los paréntesis de apertura y cierre (vacíos) al llamarla. A menudo, el resultado de una llamada a una función se guarda en una variable para su uso en el código. Este error puede detectarse registrando los valores de las variables (o sus tipos) en la consola y viendo que uno de ellos se establece como una referencia a la función, en lugar del valor esperado que la función devuelve.

            // Las variables del siguiente ejemplo son diferentes:

            function myFunction() {
                return "You rock!";
            }
            let varOne = myFunction // Almacena la funcion  myFunction  en varOne
            let varTwo = myFunction(); // Se llma la funcion  myFunction  y se almacena su resultado en varTwo
        }

        {
            // Corrige el código para que la variable result se establezca en el valor devuelto al llamar a la función getNine.

            {
                function getNine() {
                    let x = 6;
                    let y = 3;
                    return x + y;
                }

                let result = getNine; // Se almacena la funcion 
                console.log(result);
            }

            {
                function getNine() {
                    let x = 6;
                    let y = 3;
                    return x + y;
                }

                let result = getNine();// Se almacena el resultado de la funcion
                console.log(result);

            }


        }