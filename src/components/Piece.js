import React from 'react';
import PropTypes from 'prop-types';

import { SIZE } from './Square';

import './styles/Piece.css';

class Piece extends React.Component {
  colorClass() {
    return this.props.isWhite ? 'white' : 'black';
  }

  highlightedClass() {
    return this.props.highlighted ? 'highlighted' : '';
  }

  shadowedClass() {
    return this.props.shadowed ? 'shadowed' : '';
  }

  render() {
    return (
      <circle
        className={ `piece ${this.colorClass()} ${this.highlightedClass()} ${this.shadowedClass()}` }
        cx={ SIZE / 2 } cy={ SIZE / 2 } r={ SIZE / 2 - 2 } />);
  }
}

Piece.propTypes = {
  highlighted: PropTypes.bool,
  isWhite: PropTypes.bool.isRequired,
  shadowed: PropTypes.bool
}
Piece.defaultProps = {
  highlighted: false,
  shadowed: false
}

export default Piece;
