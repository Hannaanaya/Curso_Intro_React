import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className='LoadingTodo_container'>
            <span className='LoadingTodo_completeIcon'></span>
            <p className='LoadingTodo_text'>Cargando TODOS...</p>
            <span className='LoadingTodo_deleteIcon'></span>
        </div>
    );
}

export { TodosLoading };