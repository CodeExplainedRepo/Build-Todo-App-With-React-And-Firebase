import React, { createContext, useState } from 'react'
import { useTodos, useProjects, useFilterTodos, useProjectsWithStats } from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)

    const todos = useTodos()
    const projects = useProjects()
    const projectsWithStats = useProjectsWithStats(projects, todos)
    const filteredTodos = useFilterTodos(todos, selectedProject)

    return (
        <TodoContext.Provider
            value={
                {
                    defaultProject,
                    selectedProject,
                    setSelectedProject,
                    todos : filteredTodos,
                    projects : projectsWithStats
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }