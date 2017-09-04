import React from 'react';
import PropTypes from 'prop-types';

import { SIZE } from './Square';

class Piece extends React.Component {
  render() {
    return (
      <circle
        cx={ SIZE/2 } cy={ SIZE/2 }
        fill={ this.props.isWhite ? 'white' : 'black' } r={ SIZE / 2 } />);
  }
}

Piece.propTypes = {
  isWhite: PropTypes.bool.isRequired
}

export default Piece;
