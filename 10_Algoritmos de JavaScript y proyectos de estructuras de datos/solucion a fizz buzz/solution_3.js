{
  let size = 8;

  let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  console.log(board);
}



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
