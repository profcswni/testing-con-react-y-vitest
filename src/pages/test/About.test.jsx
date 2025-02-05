import { describe, it, expect, afterEach } from 'vitest';
import {cleanup, render, screen} from '@testing-library/react';
import About from "../About.tsx";
import {MemoryRouter} from "react-router-dom";

const RenderComponent = () => render(<MemoryRouter><About /></MemoryRouter>);

describe('About Page', () => {
    afterEach(async () => {
        cleanup()
    })

    it('componente renderizado correctamente', () => {
        const { asFragment } = RenderComponent();
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders the About heading', () => {
        const {getByText} = RenderComponent();
        expect(getByText('About')).toBeTruthy();
    });

    it('renders the description in English', () => {
        const {getByText} = RenderComponent()
        expect(getByText('This is a simple example of a Vite + React application.')).toBeTruthy();
    });

    it('renders the description in Spanish', () => {
        const {getByText} = RenderComponent()
        expect(getByText('Estamos integrando React con Vite, vitest y react-testing-library.')).toBeTruthy();
    });

    it('renders the Back to home link', () => {
        const {getByText} = RenderComponent()
        expect(getByText('Back to home')).toBeInTheDocument();
    });

    it('Back to home link has correct href', () => {
        const {getByText} = RenderComponent()
        expect(getByText('Back to home').closest('a')).toHaveAttribute('href', '/');
    });

    // Click en link to home
    it('Back to home link redirects to home page', () => {
        RenderComponent()
        const link = screen.getByText('Back to home');
        link.click();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
    });
});
