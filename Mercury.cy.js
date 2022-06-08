/// <reference types="cypress" />
    it('Should create account',()=> {

        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.get('[width="77"]').click()
        cy.get(':nth-child(2) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"]').type('ayoub')
        cy.get(':nth-child(3) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('bhy')
        cy.get(':nth-child(4) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('5555')
        cy.get('#userName').type('talanayoub@mail.com')
        cy.get(':nth-child(7) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('hhhh')
        cy.get(':nth-child(8) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('bbbb')
        cy.get(':nth-child(9) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('tunis')
        cy.get(':nth-child(10) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('1001')
        cy.get('select').select('TUNISIA')
        cy.get('#email').type('talanayoub@mail.com')
        cy.get(':nth-child(14) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('101010')
        cy.get(':nth-child(15) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('101010')
    
        cy.get(':nth-child(17) > td > input').click()
    
    
        cy.get('td > :nth-child(2) > font > a').click()

        cy.get(':nth-child(1) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('talanayoub@gmail.com')
        cy.get(':nth-child(2) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type('101010')

        cy.get(':nth-child(4) > td > input').click()
    })
