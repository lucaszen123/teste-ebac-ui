/// <reference types="cypress" />

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain','Descrição')
        
    });


    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain','produto')
    });


    it('Deve visitar a página de um produto específico', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain','Zeppelin Yoga Pant')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Green', qtd)
        
        cy.get('.woocommerce-message').should('contain', qtd + ' x “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
    
    it.only('Deve adicionar o produto ao carrinho - Buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor, 
                dados[2].quantidade)
        
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        
        })
       
        
    });

});