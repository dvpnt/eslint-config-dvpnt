module.exports = {
	'parser': 'babel-eslint',
	'plugins': ['react-dvpnt'],
	'extends': [
		'eslint-config-airbnb/rules/react',
		'eslint-config-airbnb/rules/react-a11y',
		'dvpnt/base'
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
		'jsx-a11y/no-autofocus': 'off',

		'react-dvpnt/jsx-require-buttons-type': ['error', 'always']
	},
	'settings': {
		'react': {
			'version': '15.5'
		}
	}
};
