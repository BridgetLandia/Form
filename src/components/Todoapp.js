import React from 'react';
import useTodoState from './UseTodoState'
import Todolist from './Todolist'
import Todoform from './Todoform'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid'


 function Todoapp() {
     const initialTodos = [];
     const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)
    
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