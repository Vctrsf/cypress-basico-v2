// CAC-TAT.spec.js created with Cypress
/// <reference types="Cypress" />

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
        //const tempoDeDigitaçao = : também é possível criar uma variável para utilizar como delay
        //wait é uma função que determina o tempo entre um teste .type e outro
        //const longText = 'Textao,Textao,Textao,Textao,Textao,Textao,Textao,'
        
        cy.get('#firstName').type('Victor')

        cy.get('#lastName').type('Souza')

        cy.get('#email').type('victorsouza@gmail.com')

        cy.get('#open-text-area').type('Um texto automatizado')

 //Sintaxe é estruturada em ('button[(nome da propriedade)= tipo da propriedade])
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        
        cy.get('#firstName').type('Victor')

        cy.get('#lastName').type('Souza')

        cy.get('#email').type('victorsouza')

        cy.get('#open-text-area').type('Um texto automatizado')

 //Sintaxe é estruturada em ('button[(nome da propriedade)= tipo da propriedade])
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
  })
    
