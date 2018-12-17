module.exports = {
    "extends": "standard",
    rules: {
         "indent": ["error", 4],
         "no-unused-vars": ["off", {
             "vars": "all",
             "args": "after-used",
             "ignoreRestSiblings": false
         }],
         "no-multiple-empty-lines": ["off", {
             "max": 2,
             "maxBOF": 1
         }],
         "semi": ["error", "always"]
    }
};