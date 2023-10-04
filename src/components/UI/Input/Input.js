import React from 'react';
import styles from "./Input.module.scss";

const Input = ({ type, id, label, placeholder, value, onChange }) => {
  return (
    <div className={styles.InputContainer}>
      <label htmlFor={id}>{label}</label>
      <span
       className={styles.InputWrap}
      >
        <input
            type={type}
            id={id}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
      </span>
    </div>
  );
};

export default Input;
