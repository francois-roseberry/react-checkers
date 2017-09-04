export const BOARD = {
  black: {
    men: line(0).concat(line(1)).concat(line(2)).concat(line(3)),
    kings: []
  },
  white: {
    men: line(6).concat(line(7)).concat(line(8)).concat(line(9)),
    kings: []
  }
};

function line(y) {
  const x = y%2 ? 0 : 1;
  return [point(x, y), point(x + 2, y), point(x + 4, y), point(x + 6, y), point(x + 8, y)];
}

function point(x, y) {
  return { x: x, y: y };
}
