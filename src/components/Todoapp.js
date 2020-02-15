import React, { useState, useEffect } from 'react';
import Todolist from './Todolist'
import Todoform from './Todoform'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid'
import uuid from "uuid/v4";

 function Todoapp() {
     const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || "[]";
    //  const initialTodos = [
    //      {id: 1, task:"Clean Fishtank", completed: false }, 
    //      {id: 2, task:"Eat broccoli", completed: true }, 
    //      {id: 3, task:"Walk the dog", completed: false }
    //  ];
     const [todos, setTodos] = useState(initialTodos);

     useEffect(() => {
         window.localStorage.setItem("todos", JSON.stringify(todos));
     }, [todos])
     const addTodo = newTodoText => {
         setTodos([...todos, { id: uuid(), task:newTodoText, completed: false}])
     };
     const removeTodo = todoId => {
         const updatedTodos = todos.filter(todo => todo.id !== todoId);
         setTodos(updatedTodos)
     };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed } : todo )
        setTodos(updatedTodos)
    };

    const editTodo = (todoId, NewTask) => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, task:NewTask} : todo )
        setTodos(updatedTodos)
    };
   
    return (
       <Paper   styles={{
        paading: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
    }}
    elevation={0}>
     
       <AppBar color='primary' position='static' style={{height:"64px"}}>
       <Toolbar>
       <Typography color='inherit'>Todos with hooks</Typography>
       </Toolbar>
       </AppBar>
       <Grid container justify='center' style={{marginTop:"1rem"}}>
       <Grid item xs={11} md={8} lg={4}>
       <Todoform addTodo={addTodo} />
       <Todolist 
       todos={todos} 
       removeTodo={removeTodo}
       toggleTodo={toggleTodo}
       editTodo={editTodo} />
       </Grid>
       </Grid>
       </Paper>
    )
}

export default Todoapp


//