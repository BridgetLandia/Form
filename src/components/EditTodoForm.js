import React from 'react'
import useInputstate from './useInputstate'
import TextField from '@material-ui/core/TextField'


function EditTodoForm({id, task, editTodo, toggleEditForm}) {
    const [value, handlechange, reset] = useInputstate(task)
    return  <form onSubmit={(e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm()}} 
    style={{marginLeft: "1rem", width: "50%"}}>
    <TextField margin='normal'
    value={value}
    onChange={handlechange}
    fullWidth
    autoFocus
    >
    </TextField>
    </form>

}
export default EditTodoForm