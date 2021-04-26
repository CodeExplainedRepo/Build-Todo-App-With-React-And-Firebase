import React, { useContext, useEffect, useRef } from 'react'
import { TodoContext } from '../context'

function Sidebar({ children }){
    // REF
    const sidebarRef = useRef()

    // CONTEXT
    const { setSelectedTodo } = useContext(TodoContext)

    // DOCUMENT CLICK LISTENER
    useEffect(() => {
        document.addEventListener('click', handleClick)
        
        return () => document.removeEventListener('click', handleClick)
    }, [])
    
    // HANDLE CLICK
    const handleClick = e => {
        if( e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
            setSelectedTodo(false)
        }
    }

    return (
        <div
            className='Sidebar'
            ref={sidebarRef}
        >
            {children}
        </div>
    )
}

export default Sidebar