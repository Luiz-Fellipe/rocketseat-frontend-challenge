/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
interface LocalStorageMemory {
  [key: string]: string;
}

let LOCAL_STORAGE_MEMORY: LocalStorageMemory = {};

Cypress.Commands.add("SaveLocalStorage", () => {
  Object.keys(localStorage).forEach((key: string) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage.getItem(key) || "";
  });
});

Cypress.Commands.add("RestoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key: string) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
