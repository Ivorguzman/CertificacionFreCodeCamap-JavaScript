{
    //! Problema
    /// Conversor de números romanos

    // Convierte el número proporcionado en un número romano.
    // Todos los números romanos deben proporcionarse en mayusculas.


    function convertToRoman(num) {
        return num;
    }

    convertToRoman(36);
}




{

    //! Solucion  1 con metodos de arreglos  y de string  

    /// Conversor de números romanos
    // Convierte el número proporcionado en un número romano.

    // Todos los números romanos deben proporcionarse en mayusculas.

    function convertirEnteroARomano(numero) {
        if (typeof numero != 'number' || !Number.isInteger(numero)) {
            return null;
        }
    
        const ROMANOS = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
        '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
        '','I','II','III','IV','V','VI','VII','VIII','IX'];
    
        let digitos = String(numero).split('');
        let romano = '';
        let i = 3;
    
        while (i--) {
            romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
        }
    
        return Array(+digitos.join('') + 1).join('M') + romano;
    }
    

    // convertToRoman(2)
    convertToRoman(900)
    // console.log(convertToRoman(1)); //  "XXXVI"
    // console.log(convertToRoman(900)); //  "XXXVI"
    // console.log(convertToRoman(2)); // "II"
    // console.log(convertToRoman(23));  // "XXIII"
    // console.log(convertToRoman(8)); // "VIII"
    // console.log(convertToRoman(36)); // "XXXVI"    
}


