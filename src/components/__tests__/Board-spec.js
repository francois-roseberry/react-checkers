jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';

import Board, { ROWS, COLUMNS } from '../Board';
import { SIZE as SQUARE_SIZE } from '../Square';
import { BOARD as STARTING_BOARD } from '../../../data/StartingBoard';

describe("<Board />", () => {
  const board = shallow(<Board board={ STARTING_BOARD } />);

  it("render a SVG container of the right size", () => {
    const svg = board.find('svg');
    expect(svg.prop('width')).toBe(ROWS * SQUARE_SIZE);
    expect(svg.prop('height')).toBe(COLUMNS * SQUARE_SIZE);
  });

  describe("render squares", () => {
    const squares = board.find('svg Square');

    it("for each row/column combination", () => {
      expect(squares).toHaveLength(ROWS * COLUMNS);
    });

    it("at the right place", () => {
      forEachSquare((square) => {
        expect(square).toHaveLength(1);
      });
    });

    it("with pieces on them, if any", () => {
      forEachSquare((square, x, y) => {
        if (containsPoint(STARTING_BOARD.white.men, x, y)) {
          const piece = square.find("Piece[isWhite=true]");
          expect(piece).toHaveLength(1);
        }
        else if (containsPoint(STARTING_BOARD.black.men, x, y)) {
          const piece = square.find("Piece[isWhite=false]");
          expect(piece).toHaveLength(1);
        }
        else {
          expect(square.children()).toHaveLength(0);
        }
      });
    });

    function containsPoint(array, x, y) {
      return array.filter((coords) => { return coords.x === x && coords.y === y; }).length === 1;
    }

    function forEachSquare(callback) {
      for (var x = 0; x < ROWS; x++) {
        for (var y = 0; y < COLUMNS; y++) {
          const square = board.find(`svg Square[x=${x}][y=${y}]`);

          callback(square, x, y);
        }
      }
    }
  });
});
