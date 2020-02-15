import React from 'react'
import Todo from './Todo'
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import { Divider } from '@material-ui/core';


 function Todolist({todos, removeTodo, toggleTodo, editTodo}) {
    if (todos.length)
    return (
        <Paper>
        <List>
        {todos.map((todo, i) => (
        <React.Fragment key={todo.id}> 
            <Todo 
            id={todo.id}
            task={todo.task}  
            completed={todo.completed} 
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo} 
            />
            {i < todos.length -1 && <Divider></Divider>}
            </React.Fragment>
        ))};
            </List>
        </Paper>
    );
    return null;
}

export default Todolist
