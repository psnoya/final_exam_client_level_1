describe('User can view a list of shows', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://content.viaplay.se/pc-se/serier/samtliga',
      response: 'fixture:shows.json',
    })
    cy.visit('/')
  })
  it('Successfully', () => {
    cy.get("[data-cy='shows-list']").within(() => {
      cy.get(">div").each((_, shows) => {
        cy.get(`[data-cy="shows-list-${shows + 1}]`).within(() => {
          cy.get("[data-cy='title']").should("exist")
          cy.get("[data-cy='description']").should("exist")
        })
      })
    })
  })
})