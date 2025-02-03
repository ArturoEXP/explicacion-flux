import { useReducer, createContext } from "react";
import { ADD_TODO, REMOVE_TODO } from "../utils/constants";
import TodoContext from "../context/TodoContext";

// Estado inicial del store
const initialState = {
    todos: []
};

// Reducer que maneja las acciones y modifica el estado
// Como puedes ver este reducer lo unico que hace es recibir las diferentes acciones y la variable donde se almacenan los datos
function todoReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
}

// Proveedor del store que envolverá la aplicación
export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}