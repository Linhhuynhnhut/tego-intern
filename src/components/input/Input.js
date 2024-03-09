import React from 'react';
import './input.scss';

const Input = ({type}) => {
  return (
    <div className='input'>
        <input type={type} id="form" name="form" placeholder='example@gmail.com'/>
        <button type="button">Submit</button>
    </div>
  )
}

export default Input;