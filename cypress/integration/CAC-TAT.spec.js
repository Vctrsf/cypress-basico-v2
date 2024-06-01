// CAC-TAT.spec.js created with Cypress
/// <reference types="Cypress" />

const { delay } = require("cypress/types/bluebird")


    describe('Central de Atendimento ao Cliente TAT', function(){
        beforeEach(function(){
            cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() 
    {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() 
    {
        cy.get('#firstName').type('Victor')
        cy.get('#lastName').type('Souza')
        cy.get('#email').type('victorsouza@gmail.com')
        cy.get('#open-text-area').type('Um teste automatizado')
 //Sintaxe é estruturada em ('button[(nome da propriedade)= tipo da propriedade])
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  })
    
