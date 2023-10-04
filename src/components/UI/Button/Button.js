import React from 'react';
import styles from "./Button.module.scss";

const Button = ({ onClick, type, disabled, children }) => {
  return (
    <button 
    className={styles.Button}
    type={type} 
    onClick={onClick}
    disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
