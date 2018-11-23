module.exports = {
  root: true,
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'rule-empty-line-before': 'never',
    'number-leading-zero': 'never',
    'function-comma-space-after': 'never',
    'function-url-quotes': 'never',
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': ['function', 'if', 'each', 'include', 'mixin', 'extend', 'else']
    }],
    'order/properties-order': require('fs-css-order').propertiesOrder
  }
}
