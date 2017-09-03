jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';

import Board, { ROWS, COLUMNS } from '../Board';
import { SIZE as SQUARE_SIZE } from '../Square';

describe("<Board />", () => {
  const board = shallow(<Board />);

  it("render a SVG container of the right size", () => {
    const svg = board.find('svg');
    expect(svg.prop('width')).toBe(ROWS * SQUARE_SIZE);
    expect(svg.prop('height')).toBe(COLUMNS * SQUARE_SIZE);
  });

  it("render a square for each row/column combination", () => {
    const squares = board.find('svg Square');
    expect(squares).toHaveLength(ROWS * COLUMNS);
  });
});
