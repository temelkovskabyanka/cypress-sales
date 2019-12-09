import Component from "../components/Sales/Component";
import Data from "../components/Sales/Data";

describe("Sales test", () => {
    beforeEach(() => {

    });
    let salesComponent = new Component();
    let salesData = new Data();

    it("Checking the items in the cart - Sales Test", () => {
        cy.visit("https://demo.phppointofsale.com/index.php/home");
        salesComponent.loginButton.click();
        salesComponent.salesButton.contains("Sales").click();
        salesComponent.itemSearchField.type(salesData.item1);
        salesComponent.firstItemSelector.click();
        cy.wait(1000);
        salesComponent.itemSearchField.type(salesData.item2);
        cy.wait(1000);
        salesComponent.secondItemSelector.click();
        salesComponent.totalPriceFiled.should($el => expect($el.text().trim()).to.equal('$16.90'));
        salesComponent.deleteItemFiled.click();
        salesComponent.deleteItemFiled.click();
        salesComponent.totalPriceFiled.should($el => expect($el.text().trim()).to.equal('$0.00'));
    });
});