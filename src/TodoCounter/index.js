import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <section className='Counter'>
            <h1 className='TitleCounter'>Lista de pendientes</h1>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </section>
    );
}

export { TodoCounter };