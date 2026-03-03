describe('Teste de Certificação', () => {
  it('Validar funcionamento do botão Saiba Mais', () => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
    cy.contains('Saiba mais').should('be.visible').click()
    cy.url().should('not.eq', 'https://qualidade.apprbs.com.br/certificacao')
  })
})