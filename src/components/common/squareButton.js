import React from 'react';

const SquareButton = (props) => {
  return (
    <button 
      className="mdl-button mdl-js-button mdl-js-ripple-effect" 
      onClick={props.onClick}>
      <i className="material-icons">{props.icon}</i>
    </button>
  );
};

export default SquareButton;