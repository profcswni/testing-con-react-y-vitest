describe('Clicking', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Click on increase button', () => {
      cy.visit('/')
      cy.get('button').first().click()
      cy.get('button').contains('count is 1')
    })
  })