module.exports = {
  parser: '@typescript-eslint/parser', // если используешь TypeScript
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // если используешь TypeScript
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint', // если используешь TypeScript
    'import',
    'unused-imports',
  ],
  rules: {
    // Популярные правила ESLint
    'react/react-in-jsx-scope': 'off', // для React 17+
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-unresolved': 'off', // для алиасов
    'prettier/prettier': 'error',
    'no-console': 'warn', // для консольных логов
    'no-unused-vars': 'warn',
    'import/no-duplicates': 'warn',
    'unused-imports/no-unused-imports': ['error'],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_', // игнорировать переменные с подчеркиванием
        args: 'after-used',
        argsIgnorePattern: '^_', // игнорировать аргументы с подчеркиванием
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@app', './app'],
          ['@components', './app/components'],
          ['@screens', './app/screens'],
          ['@assets', './app/assets'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
