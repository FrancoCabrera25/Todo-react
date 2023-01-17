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
import { TodoForm } from '../../components/todos/TodoForm';
import { CreateTodoButton } from '../../components/ui/CreateTodoButton';
import { Modal } from '../../components/ui/Modal';
import { ChangeAlert } from '../../components/ui/ChangeAlert';

export const HomePage = () => {
    const { state, stateUpdaters } = useTodos();

    const {
        error,
        loading,
        searchedTodos,
        totalTodos,
        completedTodos,
        openModal,
        searchValue,
    } = state;

    const {
        setOpenModal,
        addTodo,
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
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        onEdit={()=> editTodo(todo.text)}
                    />
                )}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlert sincronize={sincronizeTodos} />
        </React.Fragment>
    );
};
