import React from 'react'

function Todo({todo}){

    return (
        <div className='Todo'>
            {todo.text}
        </div>
    )
}

export default Todo