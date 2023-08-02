describe("User checkout product", () => {
  it("Add items to cart", () => {
    const vegetables = [];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".products").as("productList");

    //Add cashew product to cart
    // cy.get("@productList")
    //   .find(".product")
    //   .each(($el, index, $list) => {
    //     const vegetableName = $el.find(".product-name").text();

    //     if (vegetableName.includes("Cashews")) {
    //       cy.wrap($el).contains("ADD TO CART").click();
    //     }
    //   });

    cy.get("@productList")
      .find(".product")
      .each(($el, index, $list) => {
        const vegetableName = $el.find(".product-name").text();
        vegetables.push(vegetableName);
        cy.wrap($el).contains("ADD TO CART").click();
      });

    cy.get(".cart-icon").click();

    //validate item in the cart
    cy.get(".cart-items")
      .find(".cart-item:visible")
      .each(($el, index, $list) => {
        cy.wrap($el).find(".product-name").should("contain", vegetables[index]);
      });

    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
