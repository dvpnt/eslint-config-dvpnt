module.exports = {
	parser: require.resolve('babel-eslint'),

	extends: [
		'eslint-config-airbnb/rules/react',
		'eslint-config-airbnb/rules/react-a11y',
		'eslint-config-airbnb/rules/react-hooks',
		'eslint-config-dvpnt/base'
	].map(require.resolve),

	env: {
		commonjs: true,
		// for server side rendering
		node: true
	},

	globals: {
		// enable only these globals for browser env
		window: true,
		document: true
	},

	rules: {
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/forbid-prop-types': ['error', {forbid: ['object', 'array']}],

		'react/no-array-index-key': 'off',
		'react/no-danger': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-one-expression-per-line': 'off',

		'jsx-a11y/no-autofocus': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',

		// is deprecated, use label-has-associated-control
		'jsx-a11y/label-has-for': 'off',
		'jsx-a11y/label-has-associated-control': 'error'
	},

	settings: {
		react: {
			version: '16.0'
		}
	}
};
