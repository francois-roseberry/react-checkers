import React from 'react';
import PropTypes from 'prop-types';

import Square, { SIZE as SQUARE_SIZE } from './Square';
import Piece from './Piece';

export const ROWS = 10;
export const COLUMNS = 10;

class Board extends React.Component {
  renderPiece(x, y) {
    if (containsPoint(this.props.board.white.men, x, y)) {
      return <Piece isWhite />
    }

    if (containsPoint(this.props.board.black.men, x, y)) {
      return <Piece isWhite={ false } />
    }
  }

  renderSquares() {
    let result = [];
    for (var x = 0; x < ROWS; x++) {
      for (var y = 0; y < COLUMNS; y++) {
        const square = (
          <Square isWhite={ x%2 === y%2 } key={ `square-${x}-${y}` } x={ x } y={ y }>
            { this.renderPiece(x, y) }
          </Square>
        );
        result.push(square);
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

function containsPoint(array, x, y) {
  return array.filter((coords) => { return coords.x === x && coords.y === y; }).length === 1;
}

const coordinateArrayShape = PropTypes.arrayOf(PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}));

const playerShape = PropTypes.shape({
  men: coordinateArrayShape.isRequired,
  kings: coordinateArrayShape.isRequired
});

Board.propTypes = {
  board: PropTypes.shape({
    white: playerShape.isRequired,
    black: playerShape
  }).isRequired
};

export default Board;
