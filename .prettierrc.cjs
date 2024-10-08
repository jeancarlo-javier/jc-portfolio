/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,

  plugins: [require.resolve('prettier-plugin-astro')],

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
