/// <reference types="cypress" />

describe("Product E2E", () => {
  describe("Product list flow", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    describe("Product filter", () => {
      it("should display the products", () => {
        // Check if the products are displayed
        cy.get('[data-testid="product-card"]').should(
          "have.length.greaterThan",
          0
        );
      });

      it("should change the order of the products", () => {
        // Click on the order by dropdown
        cy.get('[data-testid="order-by-dropdown"]').click();

        // Select "Price: high to low" option
        cy.get('[data-testid="order-by-price-max-min"]').click();

        cy.log("**sort by price**").wait(1000);

        cy.get('[data-testid="product-card-price"]')
          .invoke("text")
          .then((prices: any) => {
            const pricesArray = prices
              .split("R$")
              .slice(1)
              .map((priceString: string) =>
                Number(priceString.replace(/[^0-9,]/g, "").replace(",", "."))
              );

            return pricesArray;
          })
          .then((prices) => {
            // Compare each price with the previous one to check if they are ordered
            for (let i = 1; i < prices.length; i++) {
              expect(prices[i]).to.be.at.most(prices[i - 1]);
            }
          });
      });

      it("should filter products by category", () => {
        cy.get('[data-testid="mugs"]').click();

        cy.log("** filtering... **").wait(1000);

        cy.get('[data-testid="product-card"]').each(($el) => {
          cy.wrap($el).within(() => {
            cy.get('[data-testid="product-card-name"]').should(
              "contain.text",
              "Caneca"
            );
          });
        });
      });

      it("should display the results according to a search", () => {
        cy.get('[data-testid="search-input"]')
          .type("caneca the grounds")
          .type("{enter}");

        cy.log("**searching...**").wait(1000);

        cy.location().should((loc) => {
          expect(loc.search).to.contains("search=caneca+the+grounds");
          expect(loc.pathname).to.eq("/");
        });

        cy.get('[data-testid="product-card"]').each(($el) => {
          cy.wrap($el).within(() => {
            cy.get('[data-testid="product-card-name"]').should(
              "contain",
              "Caneca The Grounds"
            );
          });
        });
      });

      it("should display the results not found message", () => {
        cy.get('[data-testid="search-input"]').type("nothing").type("{enter}");

        // Check if the results not found message is displayed
        cy.get('[data-testid="results-not-found"]').should("exist");
      });
    });

    describe("Product Pagination", () => {
      it("should display pagination", () => {
        // Check if the pagination is displayed
        cy.get('[data-testid="pagination"]').should("exist");
      });
      it("should change the page", () => {
        // Check if the pagination is displayed
        cy.get('[data-testid="pagination"]').should("exist");

        // Click on the second page button
        cy.get('[data-testid="page-2"]').first().click();

        // Wait for the page to load
        cy.wait(1000);

        cy.url().should("include", "page=2");

        cy.get(' [data-testid="product-card-name"]')
          .filter(':contains("Camiseta not today.")')
          .should("have.length.gte", 1);
      });
    });

    describe("Product Redirect", () => {
      it("should display the product detail page when user click in the product card", () => {
        cy.get('[data-testid="product-card"]').first().click();

        cy.url().should("include", "/product/");
      });
    });
  });

  describe("Product detail flow", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[data-testid="product-card"]').first().click();
    });

    describe("Product detail", () => {
      it("should display the product category", () => {
        cy.get("strong").should("be.visible");
      });

      it("should display the product image", () => {
        cy.get("img").should("be.visible");
      });

      it("should display the product title", () => {
        cy.get("h1").should("be.visible");
      });
      it("should display the product price", () => {
        cy.get("h2").should("be.visible");
      });

      it("should display the product description", () => {
        cy.get("p").should("be.visible");
      });

      it("should go back to product list when user clicks in button back", () => {
        cy.get('[data-testid="button-back"]').click();

        cy.wait(1000);

        cy.url().should("eq", Cypress.config("baseUrl"));
      });
    });
  });
});
