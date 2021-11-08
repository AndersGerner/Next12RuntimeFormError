/*module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "@ijsto"
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'spellcheck'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    // Existing rules
    'comma-dangle': 'off', // https://eslint.org/docs/rules/comma-dangle
    'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
    'global-require': 'off', // https://eslint.org/docs/rules/global-require
    'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations
    // New rules
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'sort-keys':'off',
    'import/order':'off',
    'no-use-before-define':'off',
    'spellcheck/spell-checker': [
      1,
      {
        comments: false,
        strings: true,
        identifiers: false,
        lang: 'en_US',
        skipWords: ['dict', 'aff', 'hunspell', 'utils', 'aws', 'signin','signup'],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+/[-\\w\\.]+$',
          '^#.*$', // For MIME Types
        ],
        skipWordIfMatch: [
          '^foobar.*$','jsx','tsx', // words that begin with foobar will not be checked
        ],
        minLength: 3,
      },
    ]
  },
};
*/

module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,                 // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
      ecmaVersion: 2020,      // Use the latest ecmascript standard
      sourceType: 'module',   // Allows using import/export statements
      ecmaFeatures: {
          jsx: true           // Enable JSX since we're using React
      }
  },
  plugins: ['simple-import-sort'],
  settings: {
      react: {
          version: 'detect'   // Automatically detect the react version
      }
  },
  env: {
      browser: true,          // Enables browser globals like window and document
      amd: true,              // Enables require() and define() as global variables as per the amd spec.
      node: true              // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
      'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'react-native-wcandillon',
    'plugin:@next/next/recommended'
  ],
  rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],  // Use our .prettierrc file as source
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/click-events-have-key-events':'off',
      'jsx-a11y/no-static-element-interactions':'off',
      '@typescript-eslint/explicit-module-boundary-types':'off',
      'react/prop-types':'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
  }
};