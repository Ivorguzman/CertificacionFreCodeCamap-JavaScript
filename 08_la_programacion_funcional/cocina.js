/*👉
{
    function sumAll(arr) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);

        return min === max ? min
            : max + sumAll([min, max - 1]);
    }
    console.log(sumAll([4, 1]));
    console.log(sumAll([1, 4]));
}👈*/

{
    function sumAll(arr) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        console.log(min, max); //1 4, 1 3, 1 2, 1 1 ;

        if (min === max) {
            return min
        }
        else {
            return max + sumAll([min, max - 1]);
        }

    }
    // console.log(sumAll([4, 1]));
    console.log(sumAll([1, 4]));
}






