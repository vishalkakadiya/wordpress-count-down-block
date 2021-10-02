'use strict';
module.exports = function ( grunt ) {

	grunt.initConfig( {
		// Make POT file - Internationalize WordPress plugins.
		// Ref. https://www.npmjs.com/package/grunt-wp-i18n
		makepot: {
			plugin: {
				options: {
					cwd: './', // Directory of files to internationalize.
					domainPath: 'languages/', // Where to save the POT file.
					exclude: [ 'node_modules/*' ], // List of files or directories to ignore.
					mainFile: 'plugin.php', // Main project file.
					potFilename: 'count-down-block.pot', // Name of the POT file.
					potHeaders: { // Headers to add to the generated POT file.
						poedit: true, // Includes common Poedit headers.
						'Last-Translator': 'Vishal Kakadiya <vishalkakadiya123@gmail.com>',
						'Language-Team': 'Dev',
						'report-msgid-bugs-to': 'https://github.com/vishalkakadiya/wordpress-count-down-block/issues',
						'x-poedit-keywordslist': true, // Include a list of all possible gettext functions.
					},
					type: 'wp-plugin', // Type of project (wp-plugin or wp-theme).
					updateTimestamp: true, // Whether the POT-Creation-Date should be updated without other changes.
				},
			},
		},

	} );

	grunt.loadNpmTasks( 'grunt-wp-i18n' );

	// Register task
	grunt.registerTask( 'default', [ 'makepot' ] );
};
