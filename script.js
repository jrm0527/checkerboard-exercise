function createSquare() {
  const div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.float = "left";
  div.style.paddingBottom = "11.1%";
  return div;
}

function createCheckerBoard(size) {
  const board = document.createElement("div");
  for (let i = 0; i < size; i++) {
    const block = createSquare();
    if (i % 2 === 0) {
      block.style.backgroundColor = "black";
    } else {
      block.style.backgroundColor = "red";
    }
    board.appendChild(block);
  }
  return board;
}
document.body.appendChild(createCheckerBoard(63));
