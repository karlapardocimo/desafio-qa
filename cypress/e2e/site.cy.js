describe('Avaliação de QA - Site Institucional', () => {
  
  beforeEach(() => {
 
    cy.visit('https://qualidade.apprbs.com.br/site')
  })

  it('Deve validar se o cabeçalho e a logo estão visíveis', () => {

    cy.get('img').should('be.visible')
    cy.contains('Cursos').should('be.visible')
  })

  it('Deve validar o redirecionamento dos botões de CTA', () => {
     cy.contains('Inscreva-se').first().click()
    cy.url().should('include', '/inscricao') 
  })

  it('Deve validar links de Redes Sociais no rodapé', () => {
    cy.scrollTo('bottom')
    cy.get('a[href*="facebook.com"]').should('exist')
    cy.get('a[href*="instagram.com"]').should('exist')
  })
})