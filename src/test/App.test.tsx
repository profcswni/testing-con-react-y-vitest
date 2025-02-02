import { describe, test, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';

describe('Testing de App.tsx', () => {
    // Se puede usar test o it para describir el test
    it('componente renderizado correctamente', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Debe renderizar la palabra "Vite"', () => {
        const { getAllByText } = render(<App />);
        expect(getAllByText(/Vite/i)).toBeTruthy();
    });

    it('Debe renderizar la palabar "React"', () => {
        const { getAllByText } = render(<App />);
        expect(getAllByText(/React/i)).toBeTruthy();
    });

    test('Debe incrementar a 1 cuando se da clic al botón', () => {
        const { getAllByText } = render(<App />);
        const button = getAllByText(/count is/i)[0];
        fireEvent.click(button);
        expect(button.textContent).toBe('count is 1');
    });
});