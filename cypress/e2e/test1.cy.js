/// <reference types="cypress" />

it('open web', () => {
     
    cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')

    cy.get('#34').click()
    
    cy.xpath('//*[@id="root"]/div[1]/div[3]/div[2]/div[1]/div/div/div[2]/button').click({force: true})

    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/button[2]').click({force: true})

    // Register
    // cy.xpath('//*[@id="root"]/div[1]/div/div[2]/div[2]/a').click({force: true})

    // cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[1]/div[2]/div/input').type('luri shafira amalia')
    // cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[2]/div[2]/div/input').type('lurishafa@gmail.com')
    // cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[3]/div[2]/div/input').type('lsa130500')
    // cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[4]/button').click({force: true})

    //Login
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[1]/div[2]/div/input').type('lurishafa@gmail.com')
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[2]/div[2]/div/input').type('lsa130500')
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[4]/button').click({force: true})

    //*[@id="root"]/div[1]/div[3]/div[2]/div[1]/div/div/div[2]/button
})