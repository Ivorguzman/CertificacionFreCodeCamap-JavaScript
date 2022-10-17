

{
  // !Ejercicio 1

  {
    let size = 4;

    let board = "";
    for (let y = 0; y < size; y++) {
      console.log("******* y = " + y + " ********");
      for (let x = 0; x < size; x++) {
        console.log("------ x = " + x + " --------");
        //console.log(x);
        let a = ((x + y) % 2 == 0);
        console.log(a);
        if ((x + y) % 2 == 0) {
          board += "°";
          console.log(board);
        } else {
          board += "#";
          console.log(board);
        }
      };
      board += "\n"
    }

  }

  // console.log(board);
}








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