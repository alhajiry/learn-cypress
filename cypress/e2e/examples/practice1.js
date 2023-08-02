describe("My first test suite", () => {
  it("My first test case", () => {
    // visit base url
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    // type a string into an input
    cy.get(".search-keyword").type("ca");
    // need to wait as the web does not show anyloading during search
    cy.wait(2000);
    //save selector to variable
    cy.get(".products").as("productList");
    //search for element with state visible and total count of 4
    cy.get(".product:visible").should("have.length", 4);
    // accesing child of an parent element and find the total count
    cy.get("@productList").find(".product").should("have.length", 4);
    // accesing index of an element
    cy.get(".products")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(() => console.log("bijikuda"));
    // if you want console.log, use must use "then" to resolve the promise

    // click button which is a child of an element that have lenght > 1
    cy.get("@productList")
      .find(".product")
      .each(($el, index, $list) => {
        const vegetableName = $el.find(".product-name").text();
        if (vegetableName.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    //assert if logo text is correct
    cy.get(".brand").should("have.text", "GREENKART");
  });
});
