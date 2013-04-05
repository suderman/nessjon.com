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
  _.config = grunt.file.readJSON "config.json"
  _.config.pkg = grunt.file.readJSON "package.json"

  # Load environment variables from .env if it exists
  if grunt.file.exists ".env"
    _.forEach grunt.file.read(".env").split("\n"), (line) ->
      process.env[_.first(line.split("="))] = _.last(line.split("="))

  # Where to look for assets, where to put them, & their public dir
  _.config.assets =
    coffee: src: 'app/assets/scripts', dest: 'public/scripts', dir: 'scripts'
    js:     src: 'app/assets/scripts', dest: 'public/scripts', dir: 'scripts'
    less:   src: 'app/assets/styles',  dest: 'public/styles',  dir: 'styles'
    css:    src: 'app/assets/styles',  dest: 'public/styles',  dir: 'styles'
    img:    src: 'app/assets/images',  dest: 'public/images',  dir: 'images'
    font:   src: 'app/assets/fonts',   dest: 'public/fonts',   dir: 'fonts'
  _.wrap '', _.config.assets, '/'

  # Prepare cfg.concat from assets.js.src, assets.css.src for concat task
  _.config.concat = {}
  _.forEach [ 'js', 'css' ], (type) ->
    _.forEach grunt.file.expand(_.config.assets[type].src + "*.json"), (file) ->
      name = _.first(file.replace(/^.*[\/\\]/g, '').split('.json'))
      key = "#{name}.#{type}"
      _.config.concat[key] =
        dest: name
        src: grunt.file.readJSON file
      _.config.concat[key] = _.wrap(_.config.assets[type].dest, _.config.concat[key], '.' + type)

  # Ensure the CDN is set to something
  _.config.bucket = _.config.pkg.name unless _.config.bucket?
  _.config.cdn = "//#{_.config.bucket}.s3.amazonaws.com" unless _.config.cdn?

  # Time-stamped banner for all minified assets
  _.config.banner = [ "/*!",
                      _.config.pkg.name + ' (' + grunt.template.today('yyyy') + ')',
                      # _.config.pkg.name + ' (' + grunt.template.today('yyyy-mm-dd') + ')',
                      _.config.pkg.description,
                      "\n*/"
                    ].join "\n"
  return _
