
        {
            // === Explicacion ===


            // La programación funcional es un estilo de programación donde las soluciones son simples, funciones aisladas, sin ningún efecto secundario fuera del ámbito de la función: INPUT -> PROCESS -> OUTPUT

            // La programación funcional se refiere a:

            // 1.Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios

            // Funciones puras: una misma entrada siempre da la misma salida

            // Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados

        }


        {
            // === Desafio ===

            // En el editor de código, las funciones prepareTea y getTea ya están definidas. Llama a la función getTea para obtener 40 tazas de té para el equipo y guárdalas en la variable tea4TeamFCC.
            /*
            Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
            siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
            */

            const prepareTea=()=>'greenTea';

            const getTea = (numOfCups) => {
                const teaCups = [];

                for (let cups = 1; cups <= numOfCups; cups += 1) {
                    const teaCup = prepareTea();
                    teaCups.push(teaCup);
                }
                return teaCups;
            };

            // Cambia solo el código debajo de esta línea
            const tea4TeamFCC =  getTea (5);
            console.log(tea4TeamFCC)
            // Cambia solo el código encima de esta línea


        }
  