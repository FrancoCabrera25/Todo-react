import React from 'react';
import { CompleteIcon } from '../../ui/TodoIcon/CompleteIcon';
import { DeleteIcon } from '../../ui/TodoIcon/DeleteIcon';
import {EditIcon} from '../../ui/TodoIcon/EditIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete , onEdit}) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={completed}
        onComplete={onComplete}
      />
      <p
        className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
      >
        {text}
      </p>
  
      <DeleteIcon
        onDelete={onDelete}
      />
      <EditIcon onEdit={onEdit} />

    </li>
  );
}

export { TodoItem };
