import { describe, test, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';
import {MemoryRouter} from "react-router-dom";
const RenderComponent = () => render(<MemoryRouter><App /></MemoryRouter>);

describe('Testing de App.tsx', () => {
    // Se puede usar test o it para describir el test
    it('componente renderizado correctamente', () => {
        const { asFragment } = RenderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Debe renderizar la palabra "Vite"', () => {
        const { getAllByText } = RenderComponent()
        expect(getAllByText(/Vite/i)).toBeTruthy();
    });

    it('Debe renderizar la palabar "React"', () => {
        const { getAllByText } = RenderComponent()
        expect(getAllByText(/React/i)).toBeTruthy();
    });

    test('Debe incrementar a 1 cuando se da clic al botón', () => {
        const { getAllByText } = RenderComponent()
        const button = getAllByText(/count is/i)[0];
        fireEvent.click(button);
        expect(button.textContent).toBe('count is 1');
    });
});
