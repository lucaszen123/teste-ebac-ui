/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        .first()
        .click()
        
    });

        it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        .last()
        .click()
        
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
        .eq(5)
        .click()
        
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
        
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });



});