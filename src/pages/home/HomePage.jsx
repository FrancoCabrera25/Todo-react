import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { TodoHeader } from '../../components/ui/TodoHeader';
import { TodoCounter } from '../../components/todos/TodoCounter';
import { TodoSearch } from '../../components/todos/TodoSearch';
import { TodoList } from '../../components/todos/TodoList';
import { TodoItem } from '../../components/todos/TodoItem';
import { TodosError } from '../../components/ui/TodosError';
import { TodosLoading } from '../../components/ui/TodosLoading';
import { EmptyTodos } from '../../components/ui/EmptyTodos';
import { CreateTodoButton } from '../../components/ui/CreateTodoButton';
import { ChangeAlert } from '../../components/ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const { state, stateUpdaters } = useTodos();
    const navigate = useNavigate();

    const {
        error,
        loading,
        searchedTodos,
        totalTodos,
        completedTodos,
        //openModal,
        searchValue,
    } = state;

    const {
        //setOpenModal,
        //addTodo,
        completeTodo,
        deleteTodo,
        setSearchValue,
        sincronizeTodos,
        editTodo
    } = stateUpdaters;

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={(searchText) => (
                    <p>No hay resultados para {searchText}</p>
                )}>
                {(todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={()=> navigate(`/edit/${todo.id}`)}
                    />
                )}
            </TodoList>

            {/* {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )} */}

            <CreateTodoButton 
             onClick={()=> navigate('/new') }
            //setOpenModal={setOpenModal} 
            />

            <ChangeAlert sincronize={sincronizeTodos} />
        </React.Fragment>
    );
};
