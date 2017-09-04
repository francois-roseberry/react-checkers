jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';

import { SIZE } from '../Square';
import Piece from '../Piece';

describe("<Piece />", () => {
  const renderSquare = (isWhite = false, highlighted = false) => {
    return shallow(<Piece highlighted={ highlighted } isWhite={ isWhite } />);
  };

  describe("render a SVG circle", () => {
    it("of the right radius", () => {
      const piece = renderSquare().find('circle.piece');
      expect(piece).toHaveLength(1);
      expect(piece.prop('r')).toBe(SIZE / 2 - 2);
    });

    it("at the right place", () => {
      const piece = renderSquare().find('circle.piece');
      expect(piece).toHaveLength(1);
      expect(piece.prop('cx')).toBe(SIZE / 2);
      expect(piece.prop('cy')).toBe(SIZE / 2);
    });

    it("of the right color", () => {
      const blackPiece = renderSquare().find('circle.piece.black');
      expect(blackPiece).toHaveLength(1);

      const whitePiece = renderSquare(true).find('circle.piece.white');
      expect(whitePiece).toHaveLength(1);
    });

    it('highlighted if needed', () => {
      const nonHighlightedPiece = renderSquare().find('circle.piece.highlighted');
      expect(nonHighlightedPiece).toHaveLength(0);

      const highlightedPiece = renderSquare(true, true).find('circle.piece.highlighted');
      expect(highlightedPiece).toHaveLength(1);
    });
  });
});
