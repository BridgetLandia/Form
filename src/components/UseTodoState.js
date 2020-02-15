
import UseLocalStorageState from './useLocalStorage'
import uuid from "uuid/v4";



export default initialTodos => {
    const [todos, setTodos] = UseLocalStorageState("todos", initialTodos);
  
    return {
        todos,
        addTodo:newTodoText => {
            setTodos([...todos, { id: uuid(), task:newTodoText, completed: false}])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos)
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed } : todo )
            setTodos(updatedTodos)
         },
         editTodo: (todoId, NewTask) => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, task:NewTask} : todo )
            setTodos(updatedTodos)}

        
    };
};

