import { Grid, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './App.css';
import Card from '../Card/Card';
import { ToDo } from '../../types';
import { useAppSelector } from '../../hooks';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import { useEffect, useState } from 'react';

function App() {
  const todos = useAppSelector(state => state.todosReducer.todos);
  const activeFilter = useAppSelector(state => state.todosReducer.activeFilter);
  const [activeToDo, setActiveToDo] = useState(todos);

  useEffect(() => {
    setActiveToDo(todos.filter((toDo) => {
      if (activeFilter === 'Active') {
        return toDo.active
      } else if (activeFilter === 'Completed') {
        return !toDo.active
      }
      return toDo
    }))
  }, [todos, activeFilter])

  return (
    <Grid p={4} gap={2} sx={{ background: theme => theme.palette.background.default }}>
      <header className="App-header">
        TODO LIST
      </header>
      <Form />
      <Grid container flexDirection='column' gap={1}>
        <Grid container gap={4} p={2} alignItems='center' sx={{ color: theme => theme.palette.background.default, background: theme => theme.palette.background.paper }}>
          <KeyboardArrowDownIcon fontSize='large' />
          <Typography children='What need to be done?' variant='poster' sx={{ color: 'inherit' }} />
        </Grid>
        <Grid container gap={.2}>
          {activeToDo.length > 0 ?
            activeToDo.map((el: ToDo) => <Card el={el} key={el.id} />)
            : <Typography children='Empty to do list!' variant='h2' />}
          {todos.length > 0 && <Filter />}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
