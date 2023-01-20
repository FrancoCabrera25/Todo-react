import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm({ onSubmitEvent, title, submitButtonText , initialValue = '' }) {
  const [todoValue, setTodoValue] = React.useState(initialValue);
  const navigate = useNavigate();

  const onChange = (event) => {
    setTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitEvent(todoValue);
 
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{title}</h1>
      <textarea
        value={todoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
