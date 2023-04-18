/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    SaveLocalStorage(): void;
    RestoreLocalStorage(): void;
  }
}
