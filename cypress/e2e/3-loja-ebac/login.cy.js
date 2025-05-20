/// <reference types= "cypress" />

describe('Funcionalidade: Login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});  

afterEach(() => {
    cy.screenshot()
});

it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('lucasteste@ebac.com.br')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucasteste (não é lucasteste? Sair)')
});

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('lucxas@ebac.com.br')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('lucasteste@ebac.com.br')
    cy.get('#password').type('000@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail lucasteste@ebac.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
});

})