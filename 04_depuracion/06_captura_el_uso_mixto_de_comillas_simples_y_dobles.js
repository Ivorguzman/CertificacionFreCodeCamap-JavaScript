

        {

            // === Explicacion ===

            // JavaScript permite el uso de comillas simples (') y dobles (") para declarar una cadena. Decidir cuál usar se reduce generalmente a la preferencia personal, con algunas excepciones.

            // Tener dos opciones es genial cuando una cadena tiene contracciones u otro fragmento de texto que está entre comillas. Sólo hay que tener cuidado de no cerrar la cadena demasiado pronto, lo que provoca un error de sintaxis.

            // Aquí hay algunos ejemplos de comillas mezcladas:
            const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
            const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
            // const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
            const uhOhGroucho = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

            // Los dos primeros son correctos, pero el tercero es incorrecto.

            // Por supuesto, está bien utilizar sólo un estilo de comillas. Puedes escapar las comillas dentro de una cadena usando el carácter de barra diagonal invertida (\):

            {
                //  === Desafio === 

                // Corrige la cadena para que use comillas diferentes para el valor de href, o realiza un escape de las existentes. Mantén las comillas dobles alrededor de toda la cadena.

                {
                    /*👉 let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";👈*/
                    console.log(innerHtml);
                }

                {
                    let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>"; // caracter escapado (\"#Home\")
                    console.log(innerHtml);
                }

            }

        }
