import React from 'react';

import Square, { SIZE as SQUARE_SIZE } from './Square';

export const ROWS = 10;
export const COLUMNS = 10;

export default class Board extends React.Component {
  renderSquares() {
    let result = [];
    for (var x = 0; x < ROWS; x++) {
      for (var y = 0; y < COLUMNS; y++) {
        result.push(<Square isWhite={ x%2 === y%2 } key={ `square-${x}-${y}` } x={ x } y={ y } />);
      }
    }
    return result;
  }

  render() {
    return (
      <svg height={ COLUMNS * SQUARE_SIZE } width={ ROWS * SQUARE_SIZE }>
        { this.renderSquares() }
      </svg>
    )
  }
}
