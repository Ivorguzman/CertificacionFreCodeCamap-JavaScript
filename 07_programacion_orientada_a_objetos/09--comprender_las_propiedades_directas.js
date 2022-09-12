{

    // ===EXPLICACION ===
    //     Comprender las propiedades directas
    // En el siguiente ejemplo, el constructor Bird define dos propiedades: name y numLegs:

    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
    }

    let duck = new Bird("Donald");
    let canary = new Bird("Tweety");

    //* name y numLegs se llaman propiedades directas, porque están definidas directamente en la instancia del objeto. Eso significa que duck y canary tienen su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades. El siguiente código añade todas las propiedades directas de duck al arreglo ownProps:

    //* El[ hasOwnProperty()] método devuelve true si la propiedad especificada es una propiedad (directa) del objeto, incluso si el valor es nullo undefined. El método devuelve false si la propiedad se (hereda o no se ha declarado en absoluto). A diferencia del operador in , este método no comprueba la propiedad especificada en la cadena de prototipos del objeto.

    let ownProps = [];

    for (let property in duck) {
        if (duck.hasOwnProperty(property) && canary.hasOwnProperty(property)) {
            ownProps.push(property)
        }
    }

    console.log(ownProps);
    // La consola mostrará el valor ["name", "numLegs"] ["name", "numLegs"].
}

{
    // ===A DESAFIO ===
    
    // Agrega todas las propiedades directas de canary al arreglo ownProps.

    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
    }

    let canary = new Bird("Tweety");
    let ownProps = [];
}

{
    // === SOLUCION===

    // Agrega todas las propiedades directas de canary al arreglo ownProps.

    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
    }

    let canary = new Bird("Tweety");
    let ownProps = [];

    for(let propiedades in canary){
        if(canary.hasOwnProperty(propiedades)){
            ownProps.push(propiedades)
        }
    }
    console.log(ownProps);
}