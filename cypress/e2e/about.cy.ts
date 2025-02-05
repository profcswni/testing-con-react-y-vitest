describe('About Page', () => {
    beforeEach(() => {
        cy.visit('/about')
    })

    it('renders the About heading', () => {
        cy.get('h1').contains('About').should('be.visible')
    })

    it('renders the description in English', () => {
        cy.get('p').contains('This is a simple example of a Vite + React application.').should('be.visible')
    })

    it('renders the description in Spanish', () => {
        cy.get('p').contains('Estamos integrando React con Vite, vitest y react-testing-library.').should('be.visible')
    })

    it('renders the Back to home link', () => {
        cy.get('a').contains('Back to home').should('be.visible')
    })

    it('Back to home link has correct href', () => {
        cy.get('a').contains('Back to home').should('have.attr', 'href', '/')
    })

    // Visit the home page after clicking the link
    it('clicking the Back to home link takes you to the home page', () => {
        cy.get('a').contains('Back to home').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
})
