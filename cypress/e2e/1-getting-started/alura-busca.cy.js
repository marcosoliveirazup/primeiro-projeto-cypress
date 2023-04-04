describe('alura busca cursos',() => {

    beforeEach (() => {
        cy.visit('https://www.alura.com.br');
    })
    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(2) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
            .should('have.text','Formação Aprenda Java com Orientação a Objetos');
    })
})