import React from 'react';
import useToggle from  "./useToggle"
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Iconbutton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from  './EditTodoForm'


export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo}) {
    const [isEditing, toggle] = useToggle(false);
    return (
        <ListItem style={{height:"64px"}}>
        {isEditing ? ( <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/> ) : (   
            <>
        <Checkbox tabIndex={-1}  checked={completed} onClick={() => toggleTodo(id)}/>
        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
        {task}</ListItemText> 
        <ListItemSecondaryAction>
        <Iconbutton aria-label='Delete' onClick={()=> removeTodo(id)} >
        <DeleteIcon></DeleteIcon>
        </Iconbutton>
        <Iconbutton aria-label='Edit' onClick={toggle}>
        <EditIcon></EditIcon>
        </Iconbutton>
        </ListItemSecondaryAction> 
        </>
        )}

        </ListItem>
    )
}
