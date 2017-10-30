module.exports = function (grunt) {
    
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'src/<%= pkg.name %>.js',
                    dest: 'build/<%= pkg.name %>.min.js'
                }
            }
        });
    
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-uglify');
    
        // Default task(s).
        grunt.registerTask('default', ['uglify']);
    
        /// simple custom task
        grunt.registerTask('foo', 'A sample task that logs stuff.', function (arg1, arg2) {
            if (arguments.length === 0) {
                grunt.log.writeln(this.name + ", no args");
            } else {
                grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
            }
        });
    
    
        ///------------------------------------------------------------
        /// simple customer task: try to run `grunt All`
        ///------------------------------------------------------------
    
        grunt.registerTask('All', 'Task both `A` and `B`', function () {
            grunt.task.run('B:1:3', 'A:4:5');
        });
    
        grunt.registerTask('A', 'Task A', function (a, b) {
            grunt.log.writeln(a + ' + ' + b + ' = ' + a + b);
        });
    
        grunt.registerTask('B', 'Task B', function (a, b) {
            grunt.log.writeln(a + ' x ' + b + ' = ' + a * b);
        });
    
    
        ///------------------------------------------------------------
        /// async Task
        ///------------------------------------------------------------
        grunt.registerTask('AsyncTask', 'simple timeout task', function () {
            // Force task into async mode and grab a handle to the "done" function.
            var done = this.async();
            // Run some sync stuff.
            grunt.log.writeln('Processing task...');
            // And some async stuff.
            setTimeout(function () {
                grunt.log.writeln('All done!');
                done();
            }, 1000);
        });
    
        //-----------------------------------
        // example: how to return error
        //-----------------------------------
        grunt.registerTask('ft', 'My "foo" task.', function() {
            if (false) {
              grunt.log.error('This is an error message.');
            }
          
            // Fail by returning false if this task had errors
            var ifErrors = true;
            if (ifErrors) { return false; }
          
            grunt.log.writeln('This is the success message');
          });
    
    
          //---------------------------------------
          // dependence
          //---------------------------------------
          grunt.registerTask('foo', 'My "foo" task.', function() {
            return false;
          });
          
          grunt.registerTask('bar', 'My "bar" task.', function() {
            // Fail task if "foo" task failed or never ran.
            grunt.task.requires('foo');
            // This code executes if the "foo" task ran successfully.
            grunt.log.writeln('Hello, world.');
          });
    
    
    };