import { useState, useEffect } from 'react'
import firebase from '../firebase'

export function useTodos(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            setTodos(data)
        })

        return () => unsubscribe()
    }, [])

    return todos
}

export function useProjects(todos){
    const [projects, setProjects] = useState([])

    function calculateNumOfTodos(projectName, todos){
        return todos.filter( todo => todo.projectName === projectName).length
    }

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {

                const projectName = doc.data().name

                return {
                    id : doc.id,
                    name : projectName,
                    numOfTodos : calculateNumOfTodos(projectName, todos)
                }
            })
            setProjects(data)
        })

        return () => unsubscribe()
    }, [])

    return projects
}
