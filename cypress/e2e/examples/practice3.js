describe("Practice checbox, radio button, dropdown", () => {
  it("Click checkbox", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //check a checkbox
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    //uncheck checkbox
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
  });

  it("Click static dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("select").select("option2").should("have.value", "option2");
  });

  it("Click dynamic dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#autocomplete").type("Ind");

    cy.get("#ui-id-1")
      .find(".ui-menu-item")
      .each(($el, index, $list) => {
        if ($el.find(".ui-menu-item-wrapper").text() === "Indonesia") {
          cy.wrap($el).click();
        }
      });

    cy.get("#autocomplete").should("have.value", "Indonesia");

    //Alternative more simpler
    // cy.get(".ui-menu-item div").each(($el, index, $list) => {
    //   if ($el.text() === "Indonesia") {
    //     cy.wrap($el).click();
    //   }
    // });
  });

  it("Show and hide element and select radiobox ", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    cy.get(".radioButton").check(["radio2"]);
  });
});
