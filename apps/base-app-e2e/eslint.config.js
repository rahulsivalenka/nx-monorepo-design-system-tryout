const baseConfig = require('../../eslint.base.config.js');
const cypress = require('eslint-plugin-cypress/flat');

module.exports = [
  cypress.configs['recommended'],
  
  ...baseConfig,

  {
    // Override or add rules here
    rules: {},
  },
];
