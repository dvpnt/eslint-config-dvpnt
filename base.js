'use strict';

module.exports = {
	'rules': {
		'strict': ['error', 'global'],

		// Possible Errors
		'comma-dangle': ['error', 'never'],
		'no-cond-assign': ['error', 'always'],
		'no-console': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-extra-semi': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-unreachable': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',

		// Best Practices
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': ['error', {
			'allowKeywords': false
		}],
		'eqeqeq': ['error', 'smart'],
		'guard-for-in': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-fallthrough': 'error',
		'no-implicit-coercion': ['error', {
			'boolean': true,
			'number': true,
			'string': true
		}],
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-native-reassign': 'error',
		'no-new': 'error',
		'no-new-wrappers': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'radix': ['error', 'always'],
		'wrap-iife': ['error', 'any'],
		'yoda': ['error', 'never'],

		// Variables
		'no-delete-var': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unused-vars': ['error', {
			'vars': 'all',
			'args': 'after-used'
		}],

		// Node
		'no-new-require': 'error',

		// Stylistic Issues
		'semi': ['error', 'always'],
		'quotes': ['error', 'single', 'avoid-escape'],
		'indent': ['error', 'tab', {
			'SwitchCase': 1,
			'VariableDeclarator': 1
		}],
		'max-len': ['error', {
			'code': 80,
			'tabWidth': 1,
			'ignorePattern': '^\\s*\\*\\s',
			'ignoreUrls': true
		}],
		'no-trailing-spaces': 'error',
		'eol-last': 'error',
		'no-multiple-empty-lines': ['error', {
			'max': 3,
			'maxBOF': 0,
			'maxEOF': 1
		}],
		'camelcase': ['error', {
			'properties': 'never'
		}],
		'array-bracket-spacing': ['error', 'never'],
		'brace-style': ['error', '1tbs', {
			'allowSingleLine': true
		}],
		'block-spacing': ['error', 'never'],
		'comma-spacing': ['error', {
			'before': false,
			'after': true
		}],
		'comma-style': ['error', 'last'],
		'consistent-this': ['error', 'self'],
		'id-blacklist': ['error', 'cb'],
		'id-length': ['error', {
			'min': 1,
			'max': 32,
			'properties': 'never',
			'exceptions': []
		}],
		'key-spacing': ['error', {
			'beforeColon': false,
			'afterColon': true,
			'mode': 'strict'
		}],
		'keyword-spacing': ['error', {
			'before': true,
			'after': true
		}],
		'linebreak-style': ['error', 'unix'],
		'max-depth': ['error', {
			'max': 3
		}],
		'max-nested-callbacks': ['error', {
			'max': 4
		}],
		'max-params': ['error', {
			'max': 16
		}],
		'max-statements-per-line': ['error', {
			'max': 1
		}],
		'new-parens': 'error',
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-spaced-func': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': ['error', 'never'],
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': ['error', 'after'],
		'quote-props': ['error', 'as-needed', {
			'keywords': true,
			'unnecessary': true,
			'numbers': false
		}],
		'semi-spacing': ['error', {
			'before': false,
			'after': true
		}],
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': ['error', {
			'words': true,
			'nonwords': false
		}],
		'spaced-comment': ['error', 'always', {
			'exceptions': ['*']
		}]
	}
};
