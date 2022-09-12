
{
    // === Explicacion ===

    // Una de las características más poderosas cuando se piensa en los arreglos como estructuras de datos, es que los arreglos pueden contener, o incluso estar completamente formados por otros arreglos. Hemos visto arreglos que contienen arreglos en desafíos anteriores, pero bastante simples. Sin embargo, los arreglos pueden contener una profundidad infinita de arreglos que pueden contener otros arreglos, cada uno con sus propios niveles arbitrarios de profundidad, y así sucesivamente. De esta manera, un arreglo puede convertirse rápidamente en una estructura de datos muy compleja, conocido como multidimensional, o arreglo anidado. Considera el siguiente ejemplo:
    let nestedArray = [
        ['deep'],
        [
            ['deeper_0A', 'deeper_0B'], ['deeper_1A']
        ],
        [
            [
                ['deepest_0A', 'deepest_0B'], ['deepest_1B']
            ],
            [
                [
                    ['deepest-est?_0A']
                ]
            ]
        ]
    ];

    // El arreglo deep está anidado a 2 niveles de profundidad. El arreglo deeper está a 3 niveles de profundidad. Los arreglos deepest están anidados a 4 niveles y el arreglo deepest-est? a 5.


    // Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, ni siquiera inusual, cuando se trata de grandes cantidades de datos. Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de un arreglo tan complejo con notación de corchetes:

    /*
     console.log(nestedArray[0][0]) //deep ==> nivel 2
    console.log(nestedArray[1][0][0]) //deeper_0A ==> nivel 3
    console.log(nestedArray[1][0][1]) //deeper_0B ==> nivel 3
    console.log(nestedArray[1][1][0]) //deeper_1A ==> nivel 3
    console.log(nestedArray[2][0][0][0]) //deepest_0A  ==> nivel 4
    console.log(nestedArray[2][0][0][1]) //deepest_0B  ==> nivel 4
    console.log(nestedArray[2][0][1][0]) //deepest_1B  ==> nivel 4
     */
    console.log(nestedArray[2][1][0][0][0]) //'deepest-est?'  ==> nivel 

    // Esto registra la cadena deepest-est?. Y ahora que sabemos dónde está ese dato, podemos modificarlo si es necesario:

    nestedArray[2][1][0][0][0] = 'Nuevo Valor "deeper still". '

    console.log(nestedArray[2][1][0][0][0])
}

{
    // === Desafio === 

    // Hemos definido una variable myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinación de cadenas , números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerda que el arreglo más externo es el nivel 1). En algún lugar del tercer nivel, incluye la cadena deep, en el cuarto nivel, incluye la cadena deepery en el quinto nivel, incluye la cadena deepest.
    {

        let myNestedArray = [
            // Cambia solo el código debajo de esta línea
            ['unshift', false, 1, 2, 3, 'complex', 'nested'],
            ['loop', 'shift', 6, 7, 1000, 'method'],
            ['concat', false, true, 'spread', 'array', 'deep'], //3
            ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepery'],//4
            ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', 'deepest'] //5
            // Cambia solo el código encima de esta línea
        ];
    }
    {
        let myNestedArray = [
            // Cambia solo el código debajo de esta línea
            ['unshift', false, 1, 2, 3, 'complex', 'nested'], // 1
            ['loop', 'shift', 6, 7, 1000, 'method'],
            ['concat', false, true, 'spread', 'array',

                ['deep'] //3

            ],
            ['mutate', 1327.98, 'splice', 'slice', 'push',

                [
                    ['deepery'] //4
                ]

            ],

            ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',

                [
                    [
                        ['deepest'] //5
                    ]
                ]


            ]
            // Cambia solo el código encima de esta línea
        ];
        console.log(myNestedArray[2][5][0][0])
    }




    {
        let myNestedArray = [
            // Only change code below this line
            'level 1',                       /* myNestedArray[0]             */
            ['level 2'],	               /* myNestedArray[1][0]          */
            [['level 3', 'deep']],	       /* myNestedArray[2][0][0]       */
            [[['level 4', 'deeper']]],    /* myNestedArray[3][0][0][0]    */
            [[[['level 5', 'deepest']]]]  /* myNestedArray[4][0][0][0][0] */
            // Only change code above this line
        ];
    }


    {
        let myNestedArray = [
            // change code below this line
            ["unshift", false, 1, 2, 3, "complex", "nested"],
            ["loop", "shift", 6, 7, 1000, "method"],
            ["concat", false, true, "spread", "array", ["deep"]],
            ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
            ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
            // change code above this line
        ];
    }

    /*👉
            {
    
    
                // === Mi Practica ===
    
                let myNestedArray = [
    
                    ['unshift', false, 1, 2, 3, 'complex', 'nested',
                        [
                            ['loop', 'shift', 6, 7, 1000, 'method',
                                [// [0][7][0][6]
                                    'concat', false, true, 'spread', 'array', 'deep',//[0][7][0][6][5]
                                    [//[0][7][0][6][6]
                                        'mutate', 1327.98, 'splice', 'slice', 'push', 'deepery',
                                        [
                                            'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', 'deepest'
                                        ]
                                    ]
    
                                ]
                            ],
                        ]
                    ]
                ]
                console.log(myNestedArray)
                console.log(myNestedArray[0]) // ==> [....] nivel  1
                console.log(myNestedArray[0][0]) //unshift  ==> nivel  2 
                console.log(myNestedArray[0][1]) //false    ==> nivel  2
                console.log(myNestedArray[0][2]) //1        ==> nivel  2
                console.log(myNestedArray[0][3]) //2        ==> nivel  2
                console.log(myNestedArray[0][4]) //3        ==> nivel  2
                console.log(myNestedArray[0][5]) //complex  ==> nivel  2
                console.log(myNestedArray[0][6]) //nested   ==> nivel  2
    
                console.log("___________________")
                console.log(myNestedArray[0][7]) // [....]  ==> nivel  2
                console.log(myNestedArray[0][7][0][0])  // loop ==> nivel  3
                console.log(myNestedArray[0][7][0][1])  // shift ==> nivel 3 
                console.log(myNestedArray[0][7][0][2])  // 6 ==> nivel 3 
                console.log(myNestedArray[0][7][0][3])  // 7 ==> nivel  3
                console.log(myNestedArray[0][7][0][4])  // 1000 ==> nivel 3 
                console.log(myNestedArray[0][7][0][5])  // method ==> nivel 3 
    
                console.log("___________________")
                console.log(myNestedArray[0][7][0][6]) // [....]  ==> nivel 4
                console.log(myNestedArray[0][7][0][6][0]) // concat  ==> nivel 5
                console.log(myNestedArray[0][7][0][6][1]) // false  ==> nivel 5
                console.log(myNestedArray[0][7][0][6][2]) // true  ==> nivel 5
                console.log(myNestedArray[0][7][0][6][3]) // "spread"  ==> nivel 5
                console.log(myNestedArray[0][7][0][6][4]) // "array"  ==> nivel 5
                console.log(myNestedArray[0][7][0][6][5]) // "deep"  ==> nivel 5
    
                console.log("___________________")
                console.log(myNestedArray[0][7][0][6][6]) // [...]  ==> nivel 5
                console.log(myNestedArray[0][7][0][6][6][0]) // mutate  ==> nivel 6
                console.log(myNestedArray[0][7][0][6][6][1]) // 1327.98 ==> nivel 6
                console.log(myNestedArray[0][7][0][6][6][2]) // splice  ==> nivel 6
                console.log(myNestedArray[0][7][0][6][6][3]) //slice  ==> nivel 6
                console.log(myNestedArray[0][7][0][6][6][4]) // push  ==> nivel 6
                console.log(myNestedArray[0][7][0][6][6][5]) //deepery ==> nivel 6
    
                console.log("___________________")
                console.log(myNestedArray[0][7][0][6][6][6]) // [...]  ==> nivel 6
                console.log(myNestedArray[0][7][0][6][6][0]) // mutate  ==> nivel 7
                console.log(myNestedArray[0][7][0][6][6][1]) // 1327.98 ==> nivel 7
                console.log(myNestedArray[0][7][0][6][6][2]) // splice  ==> nivel 
                console.log(myNestedArray[0][7][0][6][6][3]) // slice  ==> nivel 7
                console.log(myNestedArray[0][7][0][6][6][4]) // push  ==> nivel 7
                console.log(myNestedArray[0][7][0][6][6][5]) //deepery ==> nivel 7
    
    
            }👈*/
}