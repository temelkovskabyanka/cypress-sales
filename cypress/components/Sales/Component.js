export default class Component {

    get loginButton() {
        return cy.get(".btn.btn-primary.btn-block");
    }

    get salesButton() {
        return cy.get("#mainMenu");
    }

    get itemSearchField() {
        return cy.get("#item");
    }

    get firstItemSelector() {
        return cy.get("#ui-id-3");
    }

    get secondItemSelector() {
        return cy.get("#ui-id-6");
    }

    get totalPriceFiled() {
        return cy.get(".amount.total-amount");
    }

    get deleteItemFiled() {
        return cy.get(".delete-item");
    }
}