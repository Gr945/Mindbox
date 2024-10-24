import { Checkbox, Grid, Typography } from "@mui/material";
import { ToDo } from "../../types";
import { store } from "../../store";
import { changeActive, deleteToDo } from "../../reducer";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface CardProps {
    el: ToDo
}

function Card({ el }: CardProps) {


    const handleActive = () => {
        store.dispatch(changeActive({ ...el, active: !el.active }))
    }

    const handleDelete = () => {
        store.dispatch(deleteToDo(el.id))
    }

    return (
        <Grid position='relative' container gap={4} p={1} pl={2} alignItems='center' sx={{ color: theme => theme.palette.background.default, background: 'white' }}>
            <Checkbox
                checked={!el.active}
                onChange={handleActive}
            />
            <Typography children={el.name} variant='poster'
                sx={[!el.active && { textDecoration: 'line-through', color: theme => theme.palette.primary.light }]} />
            <DeleteForeverIcon sx={{
                position: 'absolute', right: '20px', color: theme => theme.custom.c1,
                width: '50px', height: '50px', cursor: 'pointer'
            }} onClick={handleDelete} />
        </Grid>
    );
}

export default Card;