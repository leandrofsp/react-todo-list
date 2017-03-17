import React from 'react';

const CircularButton = (props) => {
  const colored = props.colored ? 'mdl-button--colored' : '';
  if(props.hide) {
    return null;
  }
  return (
    <button className={`mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab ${colored}`}
            onClick={props.onClick}>
      <i className="material-icons">{props.icon}</i>
    </button>
  );
};

export default CircularButton;