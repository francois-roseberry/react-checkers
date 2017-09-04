import React from 'react';

import Board from './Board';
import { BOARD as STARTING_BOARD } from '../../data/StartingBoard';

export default class App extends React.Component {
  render() {
    return <Board board={ STARTING_BOARD } />;
  }
}
