jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';

import Square, { SIZE } from '../Square';

describe("<Square />", () => {
  const X = 1;
  const Y = 1;
  const renderSquare = (x = X, y = Y, isWhite = false) => {
    return shallow(<Square isWhite={ isWhite } x={ x } y={ y } />);
  };

  describe("render a SVG rectangle", () => {
    it("of the right size", () => {
      const square = renderSquare().find('rect');
      expect(square).toHaveLength(1);
      expect(square.prop('width')).toBe(SIZE);
      expect(square.prop('height')).toBe(SIZE);
    });

    it("at the right place", () => {
      const square = renderSquare(X, Y).find('rect');
      expect(square).toHaveLength(1);
      expect(square.prop('x')).toBe(X * SIZE);
      expect(square.prop('y')).toBe(Y * SIZE);
    });

    it("of the right color", () => {
      const blackSquare = renderSquare(0, 0).find('rect');
      expect(blackSquare.prop('style').fill).toBe('black');

      const whiteSquare = renderSquare(0, 0, true).find('rect');
      expect(whiteSquare.prop('style').fill).toBe('white');
    });
  });
});
