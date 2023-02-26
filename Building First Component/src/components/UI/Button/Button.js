import React from 'react';

import './Button.css';

const Button = props => {
  const classes = 'button ' + props.className;
  console.log(classes);

  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
