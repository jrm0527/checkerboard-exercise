function createSquare() {
  const div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.float = "left";
  div.style.paddingBottom = "11.1%";
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  return div;
}

// function createBlackBlock() {
//   const div = createSquare();
//   div.style.backgroundColor = "black";
//   return div;
// }

// function createRedBlock() {
//   const div = createSquare();
//   div.style.backgroundColor = "red";
//   return div;
// }

function createCheckerBoard(size) {
  const board = document.createElement("div");
  for (let i = 0; i < size; i++) {
    // if (i % 2 === 0) {
    //   const block = createBlackBlock();
    //   board.appendChild(block);
    // } else {
    //   const block = createRedBlock();
    //   board.appendChild(block);
    // }
    board.appendChild(createSquare());
  }
  return board;
}
document.body.appendChild(createCheckerBoard(81));
