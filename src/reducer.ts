import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { filterValue, ToDo } from './types'

export interface CounterState {
    todos: ToDo[],
    activeFilter: filterValue
}

 const initialState: CounterState = {
    todos: [],
    activeFilter: 'All'
}

export const counterSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<ToDo>) => {
            state.todos = [...state.todos, action.payload]
        },
        changeActive: (state, action: PayloadAction<ToDo>) => {
            state.todos = state.todos.map((el) => {
                if (el.id === action.payload.id) {
                    return action.payload
                } else {
                    return el
                }
            })
        },
        deleteToDo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((el: ToDo) => el.id !== action.payload)
        },
        clearRightToDo: (state, action: PayloadAction) => {
            state.todos = state.todos.filter((el) => el.active)
        },
        changeFilter: (state, action: PayloadAction<filterValue>) => {
            state.activeFilter = action.payload
        }
    }
})

export const { addToDo, deleteToDo, changeActive, clearRightToDo, changeFilter } = counterSlice.actions

export const selectCount = (state: RootState) => state.todosReducer

export default counterSlice.reducer