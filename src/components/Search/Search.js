import React from 'react';
import s from './Search.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Search = ({ value, setValue }) => {
  return (
    <div className={s.searchContainer}>
      <Input
        value={value}
        setValue={setValue}
        type={'text'}
        placeholder={'Search...'}
      />
      <Button text={'Search'} />
    </div>
  );
}

export default Search;