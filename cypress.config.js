const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implemente listeners de eventos aqui se necessário
    },
  },
});