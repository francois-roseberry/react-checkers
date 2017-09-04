jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';

import { SIZE } from '../Square';
import Piece from '../Piece';

describe("<Piece />", () => {
  const renderSquare = (isWhite = false) => {
    return shallow(<Piece isWhite={ isWhite } />);
  };

  describe("render a SVG circle", () => {
    it("of the right radius", () => {
      const piece = renderSquare().find('circle');
      expect(piece).toHaveLength(1);
      expect(piece.prop('r')).toBe(SIZE / 2);
    });

    it("at the right place", () => {
      const piece = renderSquare().find('circle');
      expect(piece).toHaveLength(1);
      expect(piece.prop('cx')).toBe(SIZE / 2);
      expect(piece.prop('cy')).toBe(SIZE / 2);
    });

    it("of the right color", () => {
      const blackPiece = renderSquare().find('circle');
      expect(blackPiece.prop('fill')).toBe('black');

      const whitePiece = renderSquare(true).find('circle');
      expect(whitePiece.prop('fill')).toBe('white');
    });
  });
});
