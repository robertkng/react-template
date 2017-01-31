module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react", "jsx-a11y", "import"
  ],

  "env": {
    "browser": true,
    "node": true
  },

  "globals": {
  // Put things like jQuery, etc
  "jQuery": true,
  "$": true
  },

  "rules": {
    "new-cap": [
      2,
      {
        "capIsNewExceptions": [
          "Map",
          "List"
        ]
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "global-require": 0,
    "react/forbid-prop-types": 0,
    // I am adding this rule because eslint cannot resolve extension .scss
    "import/extensions": 0,
  },
};
