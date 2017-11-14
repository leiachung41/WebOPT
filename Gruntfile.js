module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: 'eighty',
						width: '80%',
						quality: 50
					}]
				},
					files: [{
						expand: true,
						src: ['*.{gif,jpg,png,JPG}'],
						cwd: 'img/opt_img',
						dest: 'img/opt_img'
					}]
				}
			},
	  });

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};
