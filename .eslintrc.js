module.exports = {
  "extends": "google",
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules":{
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"]
  },
  "require-jsdoc": ["error", {
      "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": false,
          "ClassDeclaration": false,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
      }
  }]
};
