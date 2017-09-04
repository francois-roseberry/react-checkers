import React from 'react';
import PropTypes from 'prop-types';

export const SIZE = 40;

class Square extends React.Component {
  render() {
    return (
      <g transform={ `translate(${this.props.x * SIZE}, ${this.props.y * SIZE})` }>
        <rect
          height={ SIZE }
          style={ { fill: this.props.isWhite ? 'white' : 'black' } }
          width={ SIZE }
          x={ 0 } y={ 0 } />
          { this.props.children }
      </g>);
  }
}

Square.propTypes = {
  children: PropTypes.node,
  isWhite: PropTypes.bool,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
Square.defaultProps = {
  isWhite: false
}

export default Square;
