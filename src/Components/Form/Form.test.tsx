import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Form from './Form';
import { JSX } from 'react/jsx-runtime';
import { store } from '../../store';


const renderWithRedux = (component: string | number | boolean | JSX.Element | Iterable<React.ReactNode> | null | undefined) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

describe('Form component', () => {
    test('renders input and button', () => {
        renderWithRedux(<Form />);

        const inputElement = screen.getByRole('textbox'); 
        const buttonElement = screen.getByRole('button', { name: /add new task/i }); // ищем кнопку

        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test('dispatches addToDo action on form submit', () => {
        const { store } = renderWithRedux(<Form />);

        const inputElement = screen.getByRole('textbox');
        const buttonElement = screen.getByRole('button', { name: /add new task/i });

        fireEvent.change(inputElement, { target: { value: 'Test Task' } });
        fireEvent.click(buttonElement);

        const actions = store.getState
        expect(actions).toEqual([
            expect.objectContaining({
                type: 'addToDo',
                payload: expect.objectContaining({
                    name: 'One Task',
                }),
            }),
        ]);
    });
});
