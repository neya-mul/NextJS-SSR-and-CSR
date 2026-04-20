import React from 'react'

export default async function ToDos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    return (
        <div>
            Todos: {todos.length}
            

        </div>
    )
}
