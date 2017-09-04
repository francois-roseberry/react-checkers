import React from 'react';
import PropTypes from 'prop-types';

import { SIZE } from './Square';

import './styles/Piece.css';

class Piece extends React.Component {
  render() {
    return (
      <circle className={ `piece ${this.props.isWhite ? 'white' : 'black'}` }
        cx={ SIZE / 2 } cy={ SIZE / 2 } r={ SIZE / 2 - 2 } />);
  }
}

Piece.propTypes = {
  isWhite: PropTypes.bool.isRequired
}

export default Piece;
