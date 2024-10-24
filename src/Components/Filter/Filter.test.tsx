import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Filter from './Filter';
import { store } from '../../store';

const renderWithRedux = (component: string | number | boolean | JSX.Element | Iterable<React.ReactNode> | null | undefined, p0: { initialState: { todosReducer: { todos: { id: string; name: string; active: boolean; }[]; activeFilter: string; }; }; }) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

describe('Filter component', () => {
    const initialState = {
        todosReducer: {
            todos: [],
            activeFilter: 'All',
        },
    };

    test('renders correct number of active items', () => {
        renderWithRedux(<Filter />, { initialState });

        expect(screen.getByRole('button', { name: /2 items left/i })).toBeInTheDocument();
    });

    test('dispatches changeFilter action on button click', () => {
        const { store } = renderWithRedux(<Filter />, { initialState });

        fireEvent.click(screen.getByRole('button', { name: /Active/i }));

        const actions = store.getState
        expect(actions).toEqual([
            expect.objectContaining({
                type: 'changeFilter',
                payload: 'Active',
            }),
        ]);
    });

    test('dispatches clearRightToDo action on Clear completed button click', () => {
        const { store } = renderWithRedux(<Filter />, { initialState });

        fireEvent.click(screen.getByRole('button', { name: /Clear completed/i }));

        const actions = store.getState
        expect(actions).toEqual([
            expect.objectContaining({
                type: 'clearRightToDo',
            }),
        ]);
    });
});