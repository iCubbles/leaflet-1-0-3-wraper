const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: "Wrapper for leaflet-1.0.3. An open-source JavaScript library for mobile-friendly interactive maps. See: https://leafletjs.com/reference-1.0.3.html",
    resources: [
      "leaflet.css",
      "leaflet.js"
    ]
  };
};
