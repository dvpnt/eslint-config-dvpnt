'use strict';

module.exports = {
	'extends': './base.js',
	'env': {
		'browser': true,
		'amd': true
	},
	'rules': {
		'no-script-url': 'error',
		'no-alert': 'error',
		'no-debugger': 'error',
		'max-params': 'off'
	}
};
