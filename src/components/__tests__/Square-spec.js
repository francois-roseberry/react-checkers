jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';

import Square, { SIZE } from '../Square';
import Piece from '../Piece';

describe("<Square />", () => {
  const X = 1;
  const Y = 1;
  const renderSquare = (x = X, y = Y, isWhite = false, hasPiece = false) => {
    return shallow(<Square isWhite={ isWhite } x={ x } y={ y } >{ hasPiece ? <Piece isWhite /> : "" }</Square>);
  };

  it("render a <g> container at the right place", () => {
    const container = renderSquare(X, Y).find('.square');
    expect(container).toHaveLength(1);
    expect(container.prop('transform')).toBe(`translate(${X * SIZE}, ${Y * SIZE})`);
  });

  describe("render a SVG rectangle", () => {
    it("of the right size", () => {
      const square = renderSquare().find('.square rect');
      expect(square).toHaveLength(1);
      expect(square.prop('width')).toBe(SIZE);
      expect(square.prop('height')).toBe(SIZE);
    });

    it("at the right place", () => {
      const square = renderSquare().find('.square rect');
      expect(square).toHaveLength(1);
      expect(square.prop('x')).toBe(0);
      expect(square.prop('y')).toBe(0);
    });

    it("of the right color", () => {
      const blackSquare = renderSquare().find('.square.black');
      expect(blackSquare).toHaveLength(1);

      const whiteSquare = renderSquare(X, Y, true).find('.square.white');
      expect(whiteSquare).toHaveLength(1);
    });
  });

  it("render the piece inside (if present)", () => {
    const squareWithoutPiece = renderSquare().find("g Piece");
    expect(squareWithoutPiece).toHaveLength(0);

    const squareWithPiece = renderSquare(X, Y, true, true).find("g Piece");
    expect(squareWithPiece).toHaveLength(1);
  });
});
