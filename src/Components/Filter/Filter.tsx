import { Box, Button, Grid } from '@mui/material';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { changeFilter, clearRightToDo } from '../../reducer';

function Filter() {
    const todos = useAppSelector(state => state.todosReducer.todos);
    const activeFilter = useAppSelector(state => state.todosReducer.activeFilter);
    const activeItems = todos.filter((el) => el.active);

    const handleClear = () => {
        store.dispatch(clearRightToDo())
    }

    return (
        <Grid container justifyContent='space-between' p={2} sx={{ background: theme => theme.palette.background.paper }}>
            <Button children={`${activeItems.length} items left`} disabled />
            <Box display='flex' gap={2}>
                <Button children={'All'} onClick={() => store.dispatch(changeFilter('All'))} sx={[activeFilter === 'All' && { background: 'grey' }]} />
                <Button children={'Active'} onClick={() => store.dispatch(changeFilter('Active'))} sx={[activeFilter === 'Active' && { background: 'grey' }]} />
                <Button children={'Completed'} onClick={() => store.dispatch(changeFilter('Completed'))} sx={[activeFilter === 'Completed' && { background: 'grey' }]} />
            </Box>
            <Button children={'Clear completed'} onClick={handleClear} />
        </Grid>
    );
}

export default Filter;

