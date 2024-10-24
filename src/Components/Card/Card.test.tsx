import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Card from './Card'; // 
import { ToDo } from '../../types';
import { JSX } from 'react/jsx-runtime';
import { store } from '../../store';

const renderWithRedux = (component: string | number | boolean | JSX.Element | Iterable<React.ReactNode> | null | undefined ) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

describe('Card component', () => {
    const mockToDo: ToDo = {
        id: '1',
        name: 'Test Task',
        active: true,
    };

    test('renders todo item', () => {
        renderWithRedux(<Card el={mockToDo} />);
        expect(screen.getByText('Test Task')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeChecked(); 
    });

    test('dispatches changeActive action on checkbox change', () => {
        const { store } = renderWithRedux(<Card el={mockToDo} />);
        fireEvent.click(screen.getByRole('checkbox'));
        const actions = store.getState
        expect(actions).toEqual([
            expect.objectContaining({
                type: 'changeActive',
                payload: expect.objectContaining({
                    id: mockToDo.id,
                    active: false, 
                }),
            }),
        ]);
    });

    test('dispatches deleteToDo action on delete icon click', () => {
        const { store } = renderWithRedux(<Card el={mockToDo} />);
        fireEvent.click(screen.getByRole('button', { name: /delete/i }));
        const actions = store.getState
        expect(actions).toEqual([
            expect.objectContaining({
                type: 'deleteToDo', 
                payload: mockToDo.id,
            }),
        ]);
    });
});