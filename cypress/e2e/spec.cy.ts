describe('Render aplication', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Load the application', () => {
    cy.visit('/')
    // Find some element
    cy.get('h1').should('be.visible')

  })

  // Fint the word Vite
  it('Find the word Vite', () => {
    cy.get('h1').contains('Vite + React')
  })

  // Find the button with the text count is 0
  it('Find the button with the text count is 0', () => {
    cy.get('button').contains('count is 0')
  })

  // Find "Click on the Vite and React logos to learn more"
  it('Find "Click on the Vite and React logos to learn more"', () => {
    cy.get('p').contains('Click on the Vite and React logos to learn more')
  })

  // Fint the logo of Vite
  it('Find the logo of Vite', () => {
    cy.get('img').first().should('have.attr', 'alt', 'Vite logo')
  })

  // Fint the logo of React
  it('Find the logo of React', () => {
    cy.get('img').eq(1).should('have.attr', 'alt', 'React logo')
  })
})