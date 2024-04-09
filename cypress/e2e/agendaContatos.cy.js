/// <reference types="cypress" />

describe('Testes para a agenda de contatos',()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir contato', ()=>{
        
        

        cy.get('[type="text"]').type('Tallyson Freitas')
        cy.get('[type="email"]').type('example@example.com')
        cy.get('[type="tel"]').type('00000000000')
        cy.get('.adicionar').click()

        cy.get('.sc-beqWaB').should('have.length', 4)
    })

    it('Deve alterar contato',()=>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('contato editado')
        cy.get('[type="email"]').clear().type('novo.email@email.com')
        cy.get('[type="tel"]').clear().type('99112233445')
        
        cy.get('.alterar').click()
    })

    it('Deve excluir contato',()=>{
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        
        cy.get('.sc-beqWaB').should('have.length', 3)
        
    })

    
    
})