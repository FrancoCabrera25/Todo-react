
import { useNavigate, useParams } from 'react-router-dom';
import { TodoForm } from '../../components/todos/TodoForm';
import { useTodos } from '../../hooks/useTodos';

const titleAdd = 'Agregar nuevo todo';
const titleUpdate = 'Editar todo';
const textButtonEdit = 'Editar';
const textButtonAdd = 'Agregar';
export const AddUpdateTodoPage = () => {
    let todoText = '';
    const { stateUpdaters, state } = useTodos();
    const { addTodo, editTodo, getTodo } = stateUpdaters;
    const { loading } = state;
    const param = useParams();
    const navigate = useNavigate();
    const { id = null } = param;
    const todoId = id ? Number(id) : null;

    const addOrUpdateTodo = (value) => {
        if (!todoId) {
            addTodo(value);
        } else {
            editTodo(todoId, value);
        }
        navigate('/');
    };


    if (loading && todoId) {
        return <p>Loading...</p>;
    } else if(todoId) {
        const todo = getTodo(todoId);
        if (todo) {
            todoText = todo.text;
        }
    }

    return (
        <TodoForm
            initialValue={todoText}
            onSubmitEvent={addOrUpdateTodo}
            title={id ? titleUpdate : titleAdd}
            submitButtonText={id ? textButtonEdit : textButtonAdd}
        />
    );
};
