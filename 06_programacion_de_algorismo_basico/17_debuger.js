/*👉

function chunkArrayInGroups(arr, size) {
    let temp = [], result = [];
    let i = 0;
    let l = arr.length; 
    for (; i < l; i++) {
        if (i % size !== size - 1) temp.push(arr[i]);
        else {
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }
    }
    if (temp.length !== 0) result.push(temp);
    return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

👈*/
// /debugger
function chunkArrayInGroups(arr, size) {
    let temp = [], result = [];
    let i = 0;
    let l = arr.length;

    for (; i < l; i++) {
        console.log(i)
        console.log(size)
        console.log(i % size);
        console.log(size - 1);
        console.log(i % size !== size - 1);
        if (i % size !== size - 1) {// si el indice no es multiplo de size, agrega el elemento al arreglo temporal
            temp.push(arr[i])// si el indice no es multiplo de size, agrega el elemento al arreglo temporal
            console.log(i)
            console.log(arr[i])
            console.log(temp);
        }
        else {
            console.log(i)
            console.log(temp);
            temp.push(arr[i])
            console.log(arr[i])
            result.push(temp);
            console.log(temp);
            temp = [];
            console.log(temp);
        }
    }
    if (temp.length !== 0) result.push(temp);
    return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3))


// function chunkArrayInGroups(arr, size) {
//     let temp = [], result = [];
//     let i = 0;
//     let l = arr.length;
//     for (; i < l; i++) {
//         (i % size !== size - 1) ? temp.push(arr[i])
//             :
//             temp.push(arr[i]), result.push(temp), temp = [];
//     }
//     return (temp.length !== 0) ? result.push(temp) : result;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));


{
    function chunkArrayInGroups(arr, size) {
        var result = [];// arreglo vacio
        var temp = [];// arreglo temporal
        for (var i = 0; i < arr.length; i += size) {// recorre el arreglo arr
            temp = [];// vacia el arreglo temporal
            console.log(temp)
            for (var j = i; j < Math.min(i + size, arr.length); j++) {
                console.log(arr[j])
                console.log(Math.min(i + size, arr.length))
                console.log(temp)
                temp.push(arr[j]);// agrega el elemento al arreglo temporal
                console.log(temp)
            }
            result.push(temp);
        }
        return result;
    }

    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
}