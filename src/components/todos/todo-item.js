import React from 'react';
import CircularButton from '../common/circularButton';

const TodoItem = (props) => {
  const isDone = props.todo.done ? 'done' : '';
  return (
    <li className={`mdl-list__item ${isDone}`}>

      
      <span className="mdl-list__item-primary-content">
        {props.todo.description}
      </span>
      <span className="mdl-list__item-secondary-action">
        <CircularButton hide={props.todo.done} icon="done" colored={true} onClick={() => props.handleMarkAsDone(props.todo)} />
        <CircularButton hide={!props.todo.done} icon="replay" colored={true} onClick={() => props.handleMarkAsPending(props.todo)}/>
        <CircularButton hide={!props.todo.done} icon="delete" colored={false} onClick={() => props.handleRemove(props.todo)}/>
      </span>
    </li>
  );
};

export default TodoItem;