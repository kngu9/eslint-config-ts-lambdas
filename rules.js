module.exports = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/array-type': ['error', 'array-simple'],
  'camelcase': 'off',
  '@typescript-eslint/camelcase': ['error', { 'properties': 'always' }],
  '@typescript-eslint/class-name-casing': 'error',
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/ban-types': ['error', {
    'types': {
      'Result': 'Please use more semantic words instead of this type.',
      'Results': 'Please use more semantic words instead of this type.',
    },
  }],
  'indent': 'off',
  '@typescript-eslint/indent': ['error', 2, {
    'SwitchCase': 1,
    'MemberExpression': 1,
    'CallExpression': { 'arguments': 1 },
    'ArrayExpression': 1,
    'ObjectExpression': 1,
  }],
  '@typescript-eslint/member-delimiter-style': ['error', {
    'multiline': {
      'delimiter': 'none',
      'requireLast': false,
    },
    'singleline': {
      'delimiter': 'comma',
      'requireLast': false,
    },
  }],
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-triple-slash-reference': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-for-in-array': 'error',
}