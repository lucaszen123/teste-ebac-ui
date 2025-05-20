/// <reference types= "cypress" />

describe('Funcionalidade: Login', () => {

it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('lucasteste@ebac.com.br')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucasteste (não é lucasteste? Sair)')





})


})