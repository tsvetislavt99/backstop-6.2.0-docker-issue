const scenarios = require('./backstop/scenarios');

module.exports = {
  id: 'test',
  viewports: [
    {
      label: 'mobile',
      width: 375,
      height: 668,
    },
    {
      label: 'desktop',
      width: 1920,
      height: 1080,
    },
  ],
  onBeforeScript: 'playwright/onBefore.js',
  onReadyScript: 'playwright/onReady.js',
  scenarios,
  paths: {
    bitmaps_reference: 'backstop/bitmaps_reference',
    bitmaps_test: 'backstop/bitmaps_test',
    engine_scripts: 'backstop/engine_scripts',
    html_report: 'backstop/html_report',
    ci_report: 'backstop/ci_report',
  },
  report: ['browser'],
  engine: 'playwright',
  engineOptions: {
    browser: 'chromium',
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  misMatchThreshold: 2, // 5%
  requireSameDimensions: false,
  asyncCompareLimit: 2,
  debug: false,
  debugWindow: false,
};
