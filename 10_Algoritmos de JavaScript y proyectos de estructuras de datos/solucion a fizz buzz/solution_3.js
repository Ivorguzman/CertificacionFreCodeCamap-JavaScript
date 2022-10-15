{

  let size = 4;

  let board = "";
  for (let y = 0; y < size; y++) {
    console.log("******* y = " + y + " ********");
    for (let x = 0; x < size; x++) {
      console.log("------ x = " + x +" --------");
      console.log(x);
      let a = ((x + y) % 2 == 0);
      console.log(a);
      if ((x + y) % 2 == 0) {
        board += " ";
        console.log(board);
      } else {
        board += "#";
        console.log(board);
      }
    };
    console.log(board += "\n");
    console.log(board);
  }

  console.log(board);
}

/* 

{
  valores = []
  for (let x = 0; x < 10; x++) {
    valores.push([
      2 ** x,
      2 * x ** 2
    ])
  }
  console.table(valores)
}

{
  let size = 10;
  valores1 = [];
  valores2 = [];
  for (let y = 0; y < size; y++) {
    valores1[y] = 2 ** y
    for (let x = 0; x < size; x++) {
      valores2[x] = 2 * x ** 2
    }
  }
  console.log(valores1);
  console.log(valores2);
}
 */