module.exports = {
  extends: [
    'airbnb-base', // Usa le regole di Airbnb per JavaScript
  ],
  env: {
    browser: true, // Specifica che il codice è destinato ad essere eseguito nel browser
    node: true, // Se lavori anche con Node.js
    es2021: true, // Usa ECMAScript 2021
  },
  parserOptions: {
    ecmaVersion: 12, // Specifica la versione ECMAScript da usare
    sourceType: 'module', // Per usare moduli ES (import/export)
  },
  rules: {
    // Aggiungi eventuali regole personalizzate qui
    'no-console': 'warn', // Avvisa sull'uso di console.log
    'import/prefer-default-export': 'off', // Disabilita la regola sull'uso dell'export predefinito
  },
};
