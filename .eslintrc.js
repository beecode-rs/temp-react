const namingConvention = () => {
  const helper = (selector, format, types) => {
    return [
      { selector, format, types }, // filter: filterIgnoreUnderscores },
      { selector, format, types, modifiers: ['protected'], leadingUnderscore: 'require' },
      { selector, format, types, modifiers: ['private'], prefix: ['__'] },
    ]
  }
  return [
    { selector: ['default'], format: ['camelCase'], modifiers: ['protected'], leadingUnderscore: 'require' },
    { selector: ['default'], format: ['camelCase'], modifiers: ['private'], prefix: ['__'] },
    ...helper(['accessor'], ['PascalCase', 'camelCase']),
    { selector: ['enum'], format: ['PascalCase'] },
    { selector: ['enumMember'], format: ['UPPER_CASE'] },
  ]
}

const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'react-app',
    'react-app/jest',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'import', 'jest'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/index'],
            message: 'Please use `.../something` instead of ``.../something/index`',
          },
        ],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/naming-convention': ['error', ...namingConvention()],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'arrow-parens': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object']],
        'newlines-between': 'always',
      },
    ],
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
}
module.exports = config
