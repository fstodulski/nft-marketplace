module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/typescript'
  ],
  plugins: ['svelte3', '@typescript-eslint', 'unused-imports', 'simple-import-sort'],
  ignorePatterns: ['*.cjs'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowTypedFunctionExpressions: true }
        ],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'unused-imports/no-unused-imports': 'error',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^svelte', '^@?\\w'],
              ['^\\$app/*', '^@?\\w'],
              ['^\\$(routes)(\\/.*|$)'],
              ['^\\$(core)(\\/.*|$)'],
              ['^\\$(views)(\\/.*|$)'],
              ['^\\$(constants)(\\/.*|$)'],
              ['^\\$(containers)(\\/.*|$)'],
              ['^\\$(components)(\\/.*|$)'],
              ['^\\.']
            ]
          }
        ],
        'import/no-unresolved': ['error'],
        'import/no-extraneous-dependencies': ['warn'],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_'
          }
        ]
      }
    }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
