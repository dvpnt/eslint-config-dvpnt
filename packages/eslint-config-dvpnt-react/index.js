module.exports = {
	'plugins': ['react-dvpnt'],
	'extends': [
		'dvpnt/base',
		'eslint-config-airbnb/rules/react',
		'eslint-config-airbnb/rules/react-a11y'
	],
	'env': {
		'commonjs': true,
		// for server side rendering
		'node': true
	},
	'globals': {
		// enable only these globals for browser env
		'window': true,
		'document': true
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
