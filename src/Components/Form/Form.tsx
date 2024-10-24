import { Button, Grid, Input } from "@mui/material";
import { store } from "../../store";
import { addToDo } from "../../reducer";
import { useState } from "react";

function Form() {
    const [newTask, setNewTask] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        store.dispatch(addToDo({
            id: Date.now() + '-' + Math.floor(Math.random() * 10000),
            name: newTask,
            active: true
        }));
        setNewTask('')
    }

    return (
        <Grid container justifyContent='center' margin={2} alignItems='center'>
            <form onSubmit={handleSubmit}>
                <Input required
                    name="name"
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    sx={{ background: 'white', padding: '15px', fontSize: '24px', borderRadius: '10px' }}
                    value={newTask}
                />
                <Button type='submit' sx={{padding: '10px', marginLeft: '20px', borderRadius: '10px' }} >
                    ADD NEW TASK
                </Button>
            </form>
        </Grid>
    );
}

export default Form;