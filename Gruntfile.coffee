module.exports = (grunt) ->

  # PACKAGE.JSON, ENV VARIABLES, & OTHER CONFIGURATION
  _ = require("./lib/util")(grunt)
  config = _.config
  assets = _.config.assets

  # GRUNT CONFIGURATION
  grunt.initConfig

    # Copy bower components/**/*.js to assets.js.dest
    bower:
      install:
        dest: assets.js.dest
        options: stripJsAffix: true

    # Build modernizr
    modernizr:
      devFile: 'remote'
      outputFile: assets.js.dest + 'modernizr.js'
      extra:
        printshiv: true  # html5shiv
        load: true       # yepnope
        cssclasses: true
        shiv: false, mq: false
      extensibility: 
        addtest: true 
      uglify: false
      files: [
        assets.css.dest + '**/*.css'
        assets.js.dest + '**/*.js'
      ]

    # Copy assets to public dir
    copy:
      css:
        files: [ 
          expand: true
          flatten: true
          cwd: assets.css.src
          src: ['**/*.css']
          dest: assets.css.dest
        ]
      js:
        files: [ 
          expand: true
          flatten: true
          cwd: assets.js.src
          src: ['**/*.js']
          dest: assets.js.dest
        ]
      img:
        files: [ 
          expand: true
          flatten: true
          cwd: assets.img.src
          src: ['**/*.jpg','**/*.png','**/*.gif']
          dest: assets.img.dest
        ]
      font:
        files: [ 
          expand: true
          flatten: true
          cwd: assets.font.src
          src: ['**/*.eot','**/*.svg','**/*.ttf','**/*.woff']
          dest: assets.font.dest
        ]

    # Compile less to css and move to public dir
    less: 
      compile:
        options:
          dumpLineNumbers: false # commments / mediaquery
        files: [
          expand: true
          cwd: assets.less.src
          src: ['*.less', '!_*.less']
          dest: assets.less.dest
          ext: '.css'
        ]

    # Minify & bannerize css in public dir
    cssmin:
      scripts:
        options: 
          keepSpecialComments: '*'
          banner: config.banner
        files: [
          expand: true
          cwd: assets.css.dest
          src: ['**/*.css']
          dest: assets.css.dest
        ]

    # Compile coffee to js and move to assets.coffee.dest/*.js
    coffee:
      compile:
        options:
          sourceMap: false
        files: [
          expand: true
          cwd: assets.coffee.src
          src: ['*.coffee']
          dest: assets.coffee.dest
          ext: '.js'
        ]


    # Minify & bannerize everything in assets.js.dest/*.js
    uglify:
      scripts:
        options: 
          mangle: true
          preserveComments: 'some'
          banner: config.banner
        files: [
          expand: true
          cwd: assets.js.dest
          src: ['**/*.js']
          dest: assets.js.dest
        ]

    # Script & style concatenation
    concat: config.concat

    # Script & style deletion (including individual parts of concatenated scripts)
    clean: config.clean

    # Watch task.
    watch:
      styles:
        files: [assets.less.src + '**/*.less']
        tasks: ['styles', 'notify:less']
      scripts:
        files: [assets.coffee.src + '**/*.coffee']
        tasks: ['scripts', 'notify:coffee']

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

    # Amazon S3
    s3:
      options:
        bucket: config.bucket
        access: 'public-read'
        secure: false # allow periods in bucket names
        debug: false
        # key and secret in env variables
      cdn:
        upload: [
            src: assets.css.dest + '*.*'
            dest: assets.css.dir
            gzip: false
          ,
            src: assets.js.dest + '*.*'
            dest: assets.js.dir
            gzip: false
          ,
            src: assets.font.dest + '*.*'
            dest: assets.font.dir
          ,
            src: assets.img.dest + '*.*'
            dest: assets.img.dir
        ]

  grunt.loadNpmTasks 'grunt-bower'
  grunt.loadNpmTasks 'grunt-modernizr'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-notify'
  grunt.loadNpmTasks 'grunt-s3'

  # Write coffee & less file with variables
  grunt.registerTask 'variables', 'Set asset variables', (n) ->

    # Define paths
    host    = config.cdn
    scripts = config.cdn + '/' + assets.js.dir.replace(/\/$/,'')
    styles  = config.cdn + '/' + assets.css.dir.replace(/\/$/,'')
    images  = config.cdn + '/' + assets.img.dir.replace(/\/$/,'')
    fonts   = config.cdn + '/' + assets.font.dir.replace(/\/$/,'')

    # Variables for scripts
    contents = [
      '# Generated by Gruntfile.coffee'
      'window.assets ='
      '  host:    "' + host + '"'
      '  scripts: "' + scripts + '"'
      '  styles:  "' + styles + '"'
      '  images:  "' + images + '"'
      '  fonts:   "' + fonts + '"'
    ]
    dest = assets.coffee.src + "_variables.coffee"
    grunt.file.write dest, contents.join "\n"
    grunt.log.writeln "File #{dest.cyan} created."

    # Variables for styles
    contents = [
      '// Generated by Gruntfile.coffee'
      '@host:   "' + host + '";'
      '@fonts:  "' + fonts + '";'
      '@images: "' + images + '";'
    ]
    dest = assets.less.src + "_variables.less"
    grunt.file.write dest, contents.join "\n"
    grunt.log.writeln "File #{dest.cyan} created."

  # Default task(s).
  grunt.registerTask 'styles',  ['variables', 'less', 'concat', 'clean']
  grunt.registerTask 'scripts', ['variables', 'coffee', 'concat', 'clean']

  # grunt.registerTask 'default', 'Do it all.', (n) ->
  #   grunt.task.run 'bower', 'variables', 'less', 'coffee', 'copy', 'modernizr', 'concat', 'cssmin', 'uglify', 's3'
  grunt.registerTask 'default', [
    'bower'
    'variables'
    'less'
    'coffee'
    'copy'
    'modernizr'
    'concat'
    'clean'
    'cssmin'
    'uglify'
    's3'
  ]
