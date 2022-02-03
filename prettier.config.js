module.exports = {
  parser: 'typescript',
  endOfLine: 'auto',
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: true,
  overrides: [
    {
      files: '*.{json}',
      options: {
        parser: 'json'
      }
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown'
      }
    }
  ]
};
