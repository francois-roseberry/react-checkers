jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';

import Board from '../Board';

describe("<Board />", () => {
  const board = shallow(<Board />);

  it("renders a message", () => {
    const message = board.find('FormattedMessage');
    expect(message.prop('id')).toBe('welcome');
  });
});
