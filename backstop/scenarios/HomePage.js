const { DOCKER_URL } = require('../config');

module.exports = {
  CreateNextApp: {
    label: 'CreateNextApp',
    url: DOCKER_URL,
    readySelector: '[data-testid]',
    hideSelectors: ['[class*="_thirteen_"]'],
    selectors: ['[class*="_main_"]'],
  },
};
