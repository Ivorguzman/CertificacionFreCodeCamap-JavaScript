
/* 
{
  // !Ejercicio 1

  {

    let size = 4;

    let board = "";
    for (let i = 0; i < size; i++) {
      console.log("******* i = " + i + " ********");
      let t_f = ((j + i) % 2 == 0);
      console.log(t_f);
      if ((j + i) % 2 == 0) {
        board += "°";
        console.log(board);
      } else {
        board += "#";
        console.log(board);
      }
    };
  }

  // console.log(board);
}

*/






{

  // !  Ejercicio 2

  {
    /// Bucle con console.table()
    valores = [];
    for (let j = 0; j < 10; j++) {
      valores.push([
        2 ** j,
        2 * j ** 2
      ]);
    }
    console.table(valores);
  }

  {
    /// bucle con console.log()

    let size = 10;
    valores1 = [];
    valores2 = [];
    for (let i = 0; i < size; i++) {
      valores1[i] = 2 ** i;
      for (let j = 0; j < size; j++) {
        valores2[j] = 2 * j ** 2;
      }
    }
    console.log(valores1);
    console.log(valores2);
  }
}