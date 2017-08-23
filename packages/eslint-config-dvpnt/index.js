module.exports = {
	'extends': './base.js',
	'parserOptions': {
		'ecmaVersion': 2017
	},
	'env': {
		'node': true
	},
	'rules': {
		'no-await-in-loop': 'error',
		'no-return-await': 'error',
		'require-await': 'error'
	}
};
