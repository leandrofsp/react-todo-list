import React from 'react';
import TodoItem from './todo-item';

const TodoList = (props) => {

  const renderRows = () => {
    const list = props.list || [];

     return list.map(todo => (
        <TodoItem 
            key={todo._id} 
            todo={todo}
            handleMarkAsDone={props.handleMarkAsDone} 
            handleMarkAsPending={props.handleMarkAsPending} 
            handleRemove={props.handleRemove}/>
     ));
  }

  return (
    <ul className="demo-list-control mdl-list">
      {renderRows()}
    </ul>
  );
};

export default TodoList;