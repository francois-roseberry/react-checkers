import React from 'react';
import PropTypes from 'prop-types';

export const SIZE = 40;

class Square extends React.Component {
  render() {
    return (
      <rect
        height={ SIZE }
        style={ { fill: this.props.isWhite ? 'white' : 'black' } }
        width={ SIZE }
        x={ this.props.x * SIZE } y={ this.props.y * SIZE } />);
  }
}

Square.propTypes = {
  isWhite: PropTypes.bool,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
Square.defaultProps = {
  isWhite: false
}

export default Square;
