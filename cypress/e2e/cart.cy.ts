/// <reference types="cypress" />

import { formatMoney } from "../../src/utils/formatMoney";

describe("Purchase E2E", () => {
  describe("Add Product Flow", () => {
    afterEach(() => {
      cy.SaveLocalStorage();
    });
    it("should add products in the cart", () => {
      cy.clearLocalStorage().should(() => {
        expect(localStorage.getItem("cappucino-cart")).to.be.null;
      });
      cy.visit("/");
      cy.get('[data-testid="product-card"]').first().click();

      cy.get('[data-testid="button-add-cart"]')
        .click()
        .should(() => {
          expect(localStorage.getItem("cappucino-cart")).to.be.not.null;
        });

      cy.visit("/cart");

      cy.get('[data-testid="cart-item"]').should("have.length.greaterThan", 0);
    });
  });

  describe("Cart flow", () => {
    beforeEach(() => {
      cy.RestoreLocalStorage();
      cy.visit("/cart");
    });

    afterEach(() => {
      cy.SaveLocalStorage();
    });

    it("should be on correct page", () => {
      cy.get("h1").contains("Seu Carrinho");
    });

    it("allows the user to update the quantity of a product in the cart", () => {
      cy.get('[data-testid="cart-item"]')
        .first()
        .find('[data-testid="cart-item-price"]')
        .invoke("text")
        .then((price: string) => {
          const priceString = price.replace("R$", "");

          return Number(priceString.replace(",", "."));
        })
        .then((price: number) => {
          // Change this to the new quantity 3
          cy.get('[data-testid="cart-item"]')
            .first()
            .find('[data-testid="select-radix"]')
            .click();
          cy.get('[data-testid="select-option-3"]').click();

          cy.get('[data-testid="cart-item"]')
            .first()
            .find('[data-testid="cart-item-price"]')
            .should("have.text", `${formatMoney(price * 3)}`);
        });
    });

    it("checks whether the total quantity of products text has been correctly maintained", () => {
      cy.get('[data-testid="cart-total-products"]').contains(
        "Total (3 produtos)"
      );
    });

    it("checks if the total price has been updated correctly", () => {
      cy.get('[data-testid="cart-item"]')
        .first()
        .find('[data-testid="cart-item-price"]')
        .invoke("text")
        .then((price: string) => {
          cy.get('[data-testid="cart-total-price"]').should("have.text", price);
        });
    });

    it("should remove product in the cart", () => {
      cy.get('[data-testid="cart-item"]')
        .first()
        .then(() => {
          cy.get('[data-testid="button-remove-product"]').click();
          cy.get('[data-testid="cart-item"]').should("not.exist");
        });
    });

    it("disables the checkout button if the cart is empty", () => {
      cy.get("button").contains("Finalizar Compra").should("be.disabled");
    });
  });

  describe("Checkout Flow", () => {
    it("products checkout", () => {
      cy.clearLocalStorage().should(() => {
        expect(localStorage.getItem("cappucino-cart")).to.be.null;
      });
      cy.visit("/");
      cy.get('[data-testid="product-card"]').first().click();

      cy.get('[data-testid="button-add-cart"]')
        .click()
        .should(() => {
          expect(localStorage.getItem("cappucino-cart")).to.be.not.null;
        });

      cy.visit("/cart");

      cy.get("button").contains("Finalizar Compra").click();

      cy.get('[data-testid="cart-item"]').should("not.exist");
    });
  });
});
