// hooks -> Executar antes, durante ou depois dos testes
// before -> Executar antes de todos os testes
// after -> Executar depois de todos os testes
//  beforeEach -> Executar antes de cada teste
// afterEach -> Executar depois de cada teste


/// Adicionando para teste

describe('Transações', () => {


    beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#")

});

it ('Cadastrar uma entrada', () => {
    
    criarTransacao("Freela", 500)

    cy.get("tbody tr td.description").should("have.text", "Freela")


});

it('Cadastrar uma saída', () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#")

    criarTransacao("Cinema", -45)

    cy.get("tbody tr td.description").should("have.text", "Cinema")

    });

    it('Excluir transação', () => {
        criarTransacao("Freela", 100)
        criarTransacao("Uber", 45)

        cy.contains("tbody tr td.description", "Freela")
        .siblings()
        .find('img')
        .click()

        cy.get("tbody tr td.description").should("have.length", 1)
    });
});


function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type('2025-06-01')

    cy.contains("Salvar").click()
}