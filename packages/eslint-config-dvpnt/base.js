module.exports = {
	extends: 'airbnb-base',

	env: {es6: true},

	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {globalReturn: true}
	},

	rules: {
		// Possible Errors
		'no-console': 'error',
		'no-extra-parens': [
			'error',
			'all',
			{ignoreJSX: 'all', nestedBinaryExpressions: false}
		],

		// Best Practices
		'array-callback-return': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'no-implicit-coercion': [
			'error',
			{boolean: true, number: true, string: true}
		],
		'no-param-reassign': 'off',
		'wrap-iife': ['error', 'inside'],

		// Variables
		'no-shadow': 'off',

		// Stylistic Issues
		'array-bracket-newline': ['error', 'consistent'],
		'array-element-newline': ['error', 'consistent'],
		'block-spacing': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'consistent-this': 'off',
		'func-names': ['error', 'as-needed'],
		'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
		'function-paren-newline': ['error', 'multiline-arguments'],
		'id-blacklist': ['error', 'cb'],
		'id-length': [
			'error',
			{min: 1, max: 32, properties: 'never', exceptions: []}
		],
		'id-match': [
			'error',
			'^([a-zA-Z0-9_$]+|[а-яА-Я0-9_$]+)$',
			{properties: true}
		],
		indent: ['error', 'tab', {SwitchCase: 1}],
		'keyword-spacing': [
			'error',
			{before: true, after: true}
		],
		// Was deprecated in ESLint v4.0.0
		// and replaced by the padding-line-between-statements rule.
		'lines-around-directive': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{exceptAfterSingleLine: true}
		],
		'max-depth': ['error', {max: 4}],
		'max-len': [
			'error',
			{
				code: 80,
				tabWidth: 1,
				ignorePattern: '^\\s*\\*\\s',
				ignoreUrls: true,
				ignoreRegExpLiterals: true
			}
		],
		'max-nested-callbacks': ['error', {max: 4}],
		'max-params': ['error', {max: 16}],
		'max-statements-per-line': ['error', {max: 1}],
		'newline-before-return': 'error',
		'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],
		'no-mixed-operators': [
			'error',
			{
				groups: [['&', '|', '^', '~', '<<', '>>', '>>>']],
				allowSamePrecedence: true
			}
		],
		'no-multiple-empty-lines': [
			'error',
			{max: 2, maxBOF: 0, maxEOF: 0}
		],
		'no-nested-ternary': 'off',
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {multiline: true, consistent: true},
				ObjectPattern: {multiline: true, consistent: true},
				ImportDeclaration: {multiline: true, consistent: true},
				ExportDeclaration: {multiline: true, consistent: true}
			}
		],
		'object-curly-spacing': ['error', 'never'],
		'object-property-newline': 'error',
		'operator-linebreak': ['error', 'after'],
		'space-before-function-paren': [
			'error',
			{anonymous: 'never', named: 'never', asyncArrow: 'always'}
		],

		// ES6
		'no-confusing-arrow': 'off',
		// discuss maybe ['error', 'always', {avoidExplicitReturnArrows: true}] ?
		'object-shorthand': ['error', 'properties'],
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: false,
					object: false
				}
			},
			{enforceForRenamedProperties: true}
		],

		// Imports
		'import/order': [
			'error',
			{
				groups: [['builtin', 'external', 'internal']],
				pathGroups: [{pattern: '@root/**', group: 'external', position: 'after'}],
				pathGroupsExcludedImportTypes: ['builtin'],
				'newlines-between': 'never'
			}
		]
	}
};
