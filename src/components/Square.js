import React from 'react';
import PropTypes from 'prop-types';

import './styles/Square.css';

export const SIZE = 40;

class Square extends React.Component {
  render() {
    return (
      <g className={ `square ${this.props.isWhite ? 'white' : 'black' }` }
        transform={ `translate(${this.props.x * SIZE}, ${this.props.y * SIZE})` }>
        <rect
          height={ SIZE }
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
