module.exports = (grunt) ->

  # package.json 
  pkg = grunt.file.readJSON "package.json"

  # Read bower components
  cmp = grunt.file.readJSON "component.json"

  # Build banner from banner.txt and package info
  banner = [ 
    grunt.file.read('banner.txt'),
    pkg.name + ' (' + grunt.template.today('yyyy-mm-dd') + ')',
    pkg.description 
  ].join "\n"

  # Project configuration.
  grunt.initConfig
    pkg: pkg
    cmp: cmp
    banner: banner

    # Copy components/**/*.js to public/scripts/*.js
    bower:
      install:
        dest: 'public/scripts'
        options: stripJsAffix: true

    # Build modernizr
    modernizr:
      devFile: "remote"
      outputFile: "public/scripts/modernizr.js"
      extra:
        printshiv: true  # html5shiv
        load: true       # yepnope
        cssclasses: true
        shiv: false, mq: false
      extensibility: 
        addtest: true 
      uglify: false
      files: ['public/styles/**/*.css', 'public/scripts/**/*.js']

    # Compile less to css and move to public/styles/*.css
    less: 
      compile:
        options:
          yuicompress: true
        files: [
          expand: true
          cwd: 'assets/'
          src: ['*.less']
          dest: 'public/styles/'
          ext: '.css'
        ]

    # Compile coffee to js and move to public/scripts/*.js
    coffee:
      compile:
        options:
          sourceMap: false
        files: [
          expand: true
          cwd: 'assets/'
          src: ['*.coffee']
          dest: 'public/scripts/'
          ext: '.js'
        ]


    # Minify & bannerize everything in public/scripts/*.js
    uglify:
      scripts:
        options: 
          mangle: true
          preserveComments: 'some'
          banner: "/*!\n <%= banner %> \n\n*/\n"
        files: [
          expand: true
          cwd: 'public/scripts/'
          src: ['**/*.js']
          dest: 'public/scripts/'
        ]

    # Script concatenation set in bower's component.json
    concat: 
      cmp.concat

    # Watch task.
    watch:
      styles:
        files: ['assets/**/*.less']
        tasks: ['styles', 'notify:less']
      scripts:
        files: ['assets/**/*.coffee']
        tasks: ['scripts', 'uglify', 'notify:coffee']

    # Growl notifications
    notify:
      coffee:
        options:
          title: 'Task Complete'
          message: 'Compiled coffeescript'
      less:
        options:
          title: 'Task Complete'
          message: 'Compiled less'

  grunt.loadNpmTasks 'grunt-bower'
  grunt.loadNpmTasks 'grunt-modernizr'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-notify'

  # Default task(s).
  grunt.registerTask 'styles',  ['less']
  grunt.registerTask 'scripts', ['coffee', 'concat']
  grunt.registerTask 'default', ['bower', 'modernizr', 'styles', 'scripts', 'uglify']
