function createSquare() {
  const div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.float = "left";
  div.style.paddingBottom = "11.1%";
  return div;
}

function createBlackBlock() {
  const div = createSquare();
  div.style.backgroundColor = "black";
  return div;
}

function createRedBlock() {
  const div = createSquare();
  div.style.backgroundColor = "red";
  return div;
}

function createCheckerBoard(size) {
  const board = document.createElement("div");
  for (let i = 0; i < size; i++) {
    console.log(i);
    if (i % 2 === 0) {
      const block = createBlackBlock();
      board.appendChild(block);
    } else {
      const block = createRedBlock();
      board.appendChild(block);
    }
  }
  return board;
}
document.body.appendChild(createCheckerBoard(81));
