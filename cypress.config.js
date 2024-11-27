/// <reference types="cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://teste-qa-devio.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
