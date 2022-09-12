
{
    // En el desafío anterior, bird tenía una propiedad pública name. Se considera pública porque se puede acceder y cambiar fuera de la definición de bird.
    /*👉 bird.name = "Duffy";👈*/

    // Por lo tanto, cualquier parte de tu código puede cambiar fácilmente el nombre "name" de bird a cualquier valor. Piensa en cosas como contraseñas y cuentas bancarias que se pueden cambiar fácilmente por cualquier parte de tu base de código. Eso podría crear muchos problemas.

    // La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora versus disponible globalmente. De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función constructora.
    let bird = {
        name: "Donald",
        numLegs: 'Tengo 2 patas'
    };


    let glideMixin = function (obj) {
        obj.glide = function () {
            console.log(' y planeo');
        };

    };

    glideMixin(bird);

    console.log("--------------------");
    console.log(bird.name);
    console.log(bird.numLegs);
    bird.glide();

    bird.name = "Duffy";
    console.log(bird.name);

    function Bird() {
        let huevosEplocionados = 10;
        console.log(this)
        this.tenerNumeroHuevoIncubados = function () {
            console.log(huevosEplocionados);
        };
        console.log(this.tenerNumeroHuevoIncubados)
    }
    let ducky = new Bird();
    ducky.tenerNumeroHuevoIncubados();


    // Aquí tenerNumeroHuevoIncubados() es un método privilegiado, porque tiene acceso a la variable privada huevosEplocionados. Esto es posible porque huevosEplocionados está declarada en el mismo contexto que tenerNumeroHuevoIncubados(). En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama closure.

}

{
    //! === Desafio === 

    // Cambia como weight es declarada en la función Bird para que sea una variable privada. Después, crea un método getWeight que devuelva el valor 15 para weight.

    function Bird() {
        this.weight = 15;
      
      }
}
{
    //! === Solucion ===

    // Cambia como weight es declarada en la función Bird para que sea una variable privada. Después, crea un método getWeight que devuelva el valor 15 para weight.
    
    function Bird() {
        let weight = 15;
      
        this.getWeight = function () {
          return weight
        }
      
      }
      let loro = new Bird();
      
      console.log(loro.getWeight())
      
}









//! === PRACTICAS ===


const repetir = 0;
{
    const padre = () => {

        let actividad = 'pasiar'; //!   ==>  Ejemplo de (scope) léxico

        let contador = repetir;
        console.log(`Quieres Ir a ${actividad} `);

        const Hija = () => {
            console.log(contador += 1);
            console.log(`si papa quiero ir a ${actividad} `);  //!  ==>  Ejemplo de (scope) léxico
        };

        return Hija; //? Retorna la funcion no  su ejecución

    };

    //* (scope) léxico
    //? El ámbito léxico es una parte importante de las cláusulas, pero no es una cláusula en sí mismo.

    //? El ámbito léxico describe cómo las funciones anidadas [const Hija = () =>{}]  (también conocidas como "secundarias") tienen acceso a las variables definidas en los ámbitos de sus padres.

    //* closure (Clausera)
    // ? Una cláusula es una función que tiene acceso al ambito de su función padre, incluso después de que la función padre haya terminado de ejecutar.

    //? La cláusula que creamos, ahora nos permite continuar aumentando el valor de la variable contador  cada vez que ejecutamos resultado().

    const resultado = padre();
    console.log(resultado);
    resultado();
    resultado();


}
