import React from 'react';
// import { CompleteIcon } from '../TodoIcon/CompleteIcon';
// import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { FiCheck, FiX } from "react-icons/fi";
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FiCheck className='' />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span
        className='Icon Icon-delete'
        onClick={props.onDelete}
      >
        <FiX />
      </span>
    </li>
  );
}

export { TodoItem };