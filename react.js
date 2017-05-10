'use strict';

module.exports = {
	'plugins': ['react-dvpnt'],
	'extends': [
		'./base.js',
		'eslint-config-airbnb/rules/react',
		'eslint-config-airbnb/rules/react-a11y'
	],
	'env': {
		'es6': true,
		'browser': true
	},
	'rules': {
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/forbid-prop-types': ['error', {'forbid': ['object', 'array']}],

		'react/no-array-index-key': 'off',
		'react/no-danger': 'off',
		'react/prefer-es6-class': 'off',

		'react-dvpnt/jsx-require-buttons-type': ['error', 'always']
	}
};
