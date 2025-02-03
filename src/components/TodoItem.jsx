import { useContext, useEffect } from "react"
import TodoContext from "../context/TodoContext"
import { removeTodo } from "../dispatch/TodoDispatcher";

// Es un componente en el que recibimos el todo como prop y nos traemos el dispatch con el context
export const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <li>
            {todo.text} <button onClick={() => removeTodo(dispatch, todo.id)}>Eliminar</button>
        </li>
    )
}