module.exports = (grunt) ->

  # Add custom utilities to grunt.util

  # Wrap all strings within object with prefix/suffix
  grunt.util.wrap = (prefix='', input, suffix='') ->
    _ = grunt.util._
    @process = (obj) ->
      _.forEach obj, (val, key) =>
        if _.isObject(val) then @process(val)
        else obj[key] = ((if _(val).startsWith(prefix) then '' else prefix)) + val + ((if _(val).endsWith(suffix) then '' else suffix))
    @process input


  # On with the show!
  pkg = grunt.file.readJSON "package.json"
  cmp = grunt.file.readJSON "component.json"

  asset = 
    coffee: src: 'app/scripts', dest: 'public/scripts'
    js:     src: 'app/scripts', dest: 'public/scripts'
    less:   src: 'app/styles',  dest: 'public/styles'
    css:    src: 'app/styles',  dest: 'public/styles'
  grunt.util.wrap '', asset, '/'


  # Project configuration.
  grunt.initConfig
    pkg: pkg
    cmp: cmp
    banner: [ "/*!",
              pkg.name + ' (' + grunt.template.today('yyyy-mm-dd') + ')',
              pkg.description,
              "\n*/"
            ].join "\n"

    # Copy bower components/**/*.js to asset.js.dest
    bower:
      install:
        dest: asset.js.dest
        options: stripJsAffix: true

    # Build modernizr
    modernizr:
      devFile: "remote"
      outputFile: asset.js.dest + 'modernizr.js'
      extra:
        printshiv: true  # html5shiv
        load: true       # yepnope
        cssclasses: true
        shiv: false, mq: false
      extensibility: 
        addtest: true 
      uglify: false
      files: [
        asset.css.dest + '**/*.css'
        asset.js.dest + '**/*.js'
      ]

    # Copy assets to public dir
    copy:
      css:
        files: [ 
          expand: true
          cwd: asset.css.src
          src: ['**/*.css']
          dest: asset.css.dest
        ]
      js:
        files: [ 
          expand: true
          cwd: asset.js.src
          src: ['**/*.js']
          dest: asset.js.dest
        ]

    # Compile less to css and move to public dir
    less: 
      compile:
        options:
          dumpLineNumbers: false # commments / mediaquery
        files: [
          expand: true
          cwd: asset.less.src
          src: ['*.less']
          dest: asset.less.dest
          ext: '.css'
        ]

    # Minify & bannerize css in public dir
    cssmin:
      scripts:
        options: 
          keepSpecialComments: '*'
          banner: "<%= banner %>"
        files: [
          expand: true
          cwd: asset.css.dest
          src: ['**/*.css']
          dest: asset.css.dest
        ]

    # Compile coffee to js and move to asset.coffee.dest/*.js
    coffee:
      compile:
        options:
          sourceMap: false
        files: [
          expand: true
          cwd: asset.coffee.src
          src: ['*.coffee']
          dest: asset.coffee.dest
          ext: '.js'
        ]


    # Minify & bannerize everything in asset.js.dest/*.js
    uglify:
      scripts:
        options: 
          mangle: true
          preserveComments: 'some'
          banner: "<%= banner %>"
        files: [
          expand: true
          cwd: asset.js.dest
          src: ['**/*.js']
          dest: asset.js.dest
        ]

    # Script concatenation set in bower's component.json
    concat: grunt.util.wrap asset.js.dest, cmp.concat, '.js'

    # Watch task.
    watch:
      styles:
        files: [asset.less.src + '**/*.less']
        tasks: ['styles', 'notify:less']
      scripts:
        files: [asset.coffee.src + '**/*.coffee']
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


  grunt.loadNpmTasks 'grunt-bower'
  grunt.loadNpmTasks 'grunt-modernizr'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-notify'

  # Default task(s).
  grunt.registerTask 'styles',  ['less', 'concat']
  grunt.registerTask 'scripts', ['coffee', 'concat']

  grunt.registerTask 'default', 'Do it all.', (n) ->
    grunt.task.run 'bower', 'less', 'coffee', 'copy', 'modernizr', 'concat', 'cssmin', 'uglify'
