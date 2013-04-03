module.exports = (grunt) ->

  # UTILITIES
  # Add custom utilities to grunt.util._
  _ = grunt.util._

  # Wrap all strings within object with prefix/suffix
  _.wrap = (prefix='', input, suffix='') ->
    @process = (obj) ->
      _.forEach obj, (val, key) =>
        if _.isObject(val) then @process(val)
        else obj[key] = ((if _(val).startsWith(prefix) then '' else prefix)) + val + ((if _(val).endsWith(suffix) then '' else suffix))
    @process input


  # PACKAGE.JSON, ENV VARIABLES, & OTHER CONFIGURATION
  pkg = grunt.file.readJSON "package.json"
  cfg = grunt.file.readJSON "config.json"

  # Where to look for assets, where to put them, & their public dir
  assets =
    coffee: src: 'app/assets/scripts', dest: 'public/scripts', dir: 'scripts'
    js:     src: 'app/assets/scripts', dest: 'public/scripts', dir: 'scripts'
    less:   src: 'app/assets/styles',  dest: 'public/styles',  dir: 'styles'
    css:    src: 'app/assets/styles',  dest: 'public/styles',  dir: 'styles'
    img:    src: 'app/assets/images',  dest: 'public/images',  dir: 'images'
    font:   src: 'app/assets/fonts',   dest: 'public/fonts',   dir: 'fonts'
  _.wrap '', assets, '/'

  # Load environment variables from .env if it exists
  if grunt.file.exists ".env"
    _.forEach grunt.file.read(".env").split("\n"), (line) ->
      process.env[_.first(line.split("="))] = _.last(line.split("="))

  # Prepare cfg.concat from assets.js.src, assets.css.src for concat task
  cfg.concat = {}
  _.forEach [ 'js', 'css' ], (type) ->
    _.forEach grunt.file.expand(assets[type].src + "*.json"), (file) ->
      name = _.first(file.replace(/^.*[\/\\]/g, '').split('.json'))
      key = "#{name}.#{type}"
      cfg.concat[key] =
        dest: name
        src: grunt.file.readJSON file
      cfg.concat[key] = _.wrap(assets[type].dest, cfg.concat[key], '.' + type)

  # Ensure the CDN is set to something
  cfg.bucket = pkg.name unless cfg.bucket?
  cfg.cdn = "http://#{cfg.bucket}.s3.amazonaws.com" unless cfg.cdn?


  # GRUNT CONFIGURATION
  grunt.initConfig
    pkg: pkg
    cfg: cfg

    # Time-stamped banner for all minified assets
    banner: [ "/*!",
              pkg.name + ' (' + grunt.template.today('yyyy-mm-dd') + ')',
              pkg.description,
              "\n*/"
            ].join "\n"

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
          banner: "<%= banner %>"
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
          banner: "<%= banner %>"
        files: [
          expand: true
          cwd: assets.js.dest
          src: ['**/*.js']
          dest: assets.js.dest
        ]

    # Script & style concatenation
    concat: cfg.concat

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
        bucket: cfg.bucket
        access: 'public-read'
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
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-notify'
  grunt.loadNpmTasks 'grunt-s3'


  # Write coffee & less file with variables
  grunt.registerTask 'variables', 'Set asset variables', (n) ->

    # Define paths
    host    = cfg.cdn
    scripts = cfg.cdn + '/' + assets.js.dir.replace(/\/$/,'')
    styles  = cfg.cdn + '/' + assets.css.dir.replace(/\/$/,'')
    images  = cfg.cdn + '/' + assets.img.dir.replace(/\/$/,'')
    fonts   = cfg.cdn + '/' + assets.font.dir.replace(/\/$/,'')

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
  grunt.registerTask 'styles',  ['variables', 'less', 'concat']
  grunt.registerTask 'scripts', ['variables', 'coffee', 'concat']

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
    'cssmin'
    'uglify'
    's3'
  ]
