import { createContext } from "react";

// Creamos el contexto para compartir el estado global en toda la aplicación

// El context lo creé en un archivo a parte para que veais como separar la lógica del "contendor" que es el context
const TodoContext = createContext(null);

// En este archivo se podrían añadir funciones para comprobar que el context acepte o no acepte ciertos datos
// O manejar errores o añadirle datos al context que tengan que estar creados cuando se inicie la app
// Incluso se podría guardar y rescatar los datos del localStorage
// Yo no los implementé porque quería que el proyecto fuese pequeño

export default TodoContext;