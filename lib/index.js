/**
 * sails-generate-model
 *
 * Usage:
 * `sails generate model`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-model) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

