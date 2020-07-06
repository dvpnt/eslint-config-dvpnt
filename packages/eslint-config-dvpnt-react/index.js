module.exports = {
	parser: require.resolve('babel-eslint'),

	overrides: [{files: '*.jsx'}],

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
		'node/global-require': 'error',

		'import/no-dynamic-require': 'error',

		'react/destructuring-assignment': 'off',
		'react/forbid-prop-types': ['error', {forbid: ['object', 'array']}],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/no-array-index-key': 'off',
		'react/no-danger': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': ['error', 'static public field'],

		'jsx-a11y/click-events-have-key-events': 'off',
		// is deprecated, use label-has-associated-control
		'jsx-a11y/label-has-for': 'off',
		'jsx-a11y/label-has-associated-control': 'error',
		'jsx-a11y/no-autofocus': 'off',
		'jsx-a11y/no-static-element-interactions': 'off'
	},

	settings: {
		'import/resolver': {node: {extensions: ['.js', '.jsx', '.json']}},
		react: {version: 'detect'}
	}
};
