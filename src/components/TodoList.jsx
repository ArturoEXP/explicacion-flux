import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

// Componente para renderizar la lista de tareas
export const TodoList = () => {
    const { state } = useContext(TodoContext);

    return(
        <ul>
            {state.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}