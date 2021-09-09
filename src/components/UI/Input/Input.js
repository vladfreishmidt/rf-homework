import React, { createRef } from 'react';
import s from './Input.module.css';

const Input = (
  {
    type,
    placeholder,
    value,
    setValue }
) => {

  const input = createRef();

  const onSearchChange = () => {
    setValue(input.current.value);
  }

  return (
    <input
      ref={input}
      value={value}
      onChange={onSearchChange}
      className={s.input}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;