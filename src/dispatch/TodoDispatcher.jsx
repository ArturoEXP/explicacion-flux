import { ADD_TODO, REMOVE_TODO } from "../utils/constants";

/**
 * En estas funciones podeis ver como pedimos como primer parametro el dispatcher para utilizarlo como funcion,
 * le pasamos la acción en concreta que queremos utilizar y como payload la información que nos interesa.
 * Mirad como se utilizan estas funciones y entenderéis mejor como funcionan.
 */

// Función para manejar la acción de agregar una nueva tarea
export function addTodo(dispatch, todo) {
    dispatch({ type: ADD_TODO, payload: todo });
}

// Función para manejar la acción de eliminar una tarea
export function removeTodo(dispatch, todoId) {
    dispatch ( {type: REMOVE_TODO, payload: todoId });
}