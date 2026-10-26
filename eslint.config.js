import js from '@eslint/js'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'

export default [
  { ignores: ['dist/**', 'node_modules/**', 'public/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react, 'react-hooks': hooks },
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', parserOptions: { ecmaFeatures: { jsx: true } }, globals: { window:'readonly', document:'readonly', navigator:'readonly', URL:'readonly', Blob:'readonly', alert:'readonly', console:'readonly', Image:'readonly', setTimeout:'readonly', clearTimeout:'readonly' } },
    rules: { 'react/react-in-jsx-scope': 'off', 'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }] },
  },
]
