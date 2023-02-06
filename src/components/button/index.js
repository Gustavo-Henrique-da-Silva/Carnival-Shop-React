import React from 'react';
const Button = ({ children, className, onClick, id }) => {
  return (
    <button className={className} type="button" onClick={onClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
