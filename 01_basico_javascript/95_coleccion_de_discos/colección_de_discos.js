

///  Only change code below this line

{
    function updateRecords(records, id, prop, value) {
        if (value === '') {
            delete records[id][prop];
        } else if (prop === 'tracks') {
            records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
            records[id][prop].push(value);
        } else {
            records[id][prop] = value;
        }
        return records;
    }
}





//* Ejercicio :

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};



{

    // * Problema

    // Cambia solo el código debajo de esta línea
    function updateRecords(records, id, prop, value) {
        return records;
    }

    updateRecords(recordCollection, 5439, 'artist', 'ABBA');


}

{
    // ** Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
    // ** Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
    // ** Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
    // ** Si value es una cadena vacía, elimina esa propiedad prop del álbum.
}



{
    // * Solución 1

    function updateRecords(records, id, prop, value) {
        if (prop !== 'tracks' && value !== '') {
            console.log('1');
            records[id][prop] = value;
        }

        else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
            console.log('2');
            records[id][prop] = [value];

        }
        else if (value === '') {
            console.log('3');
            delete records[id][prop];
        }

        else if (prop === 'tracks' && value !== '') {
            console.log('4');
            records[id][prop].push(value);

        }
        return records;
    }

    console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

    console.log(updateRecords(recordCollection, 2548, "artist", ""));

    console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

    console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));

    console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));

    console.log(updateRecords(recordCollection, 2548, "tracks", ""));

    console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));

}


{
    // * Solución 2


    function updateRecords(records, id, prop, value) {
        return records;
    }

    updateRecords(recordCollection, 5439, 'artist', 'ABBA');

}

