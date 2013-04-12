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
  process.env.NODE_ENV = 'development' unless process.env.NODE_ENV?

  # Where to look for assets, where to put them, & their public dir
  _.config.assets =
    coffee: src: 'app/assets/scripts', dest: 'public/scripts', dir: 'scripts'
    js:     src: 'app/assets/scripts', dest: 'public/scripts', dir: 'scripts'
    less:   src: 'app/assets/styles',  dest: 'public/styles',  dir: 'styles'
    css:    src: 'app/assets/styles',  dest: 'public/styles',  dir: 'styles'
    img:    src: 'app/assets/images',  dest: 'public/images',  dir: 'images'
    font:   src: 'app/assets/fonts',   dest: 'public/fonts',   dir: 'fonts'
  _.wrap '', _.config.assets, '/'

  # Prepare config.concat, config.clean from assets.js.src, assets.css.src
  _.config.concat = {}
  _.config.clean = []

  # Look for json files where js/css source files are kept
  _.forEach [ 'js', 'css' ], (type) ->
    _.forEach grunt.file.expand(_.config.assets[type].src + "*.json"), (file) ->

      # The filename (without the json ext) will be the concatenated destination name
      name = _.first(file.replace(/^.*[\/\\]/g, '').split('.json'))
      ext = '.' + type

      # Keep a list of concatenated files for the banner
      list = _.wrap('', grunt.file.readJSON(file), ext).join(', ')

      # Assemble a valid object for the grunt concat task
      _.config.concat[name+ext] =
        dest: name
        src: grunt.file.readJSON(file)

      # Include the path and extension in each filename; also throw in a banner
      _.config.concat[name+ext] = _.wrap(_.config.assets[type].dest, _.config.concat[name+ext], ext)
      _.config.concat[name+ext]['options'] = banner: [
                                          '/*! Concatenated:', list, '', '*/'
                                        ].join "\n"

      # Assemble a valid object for the grunt clean task
      # Delete all concatenation source files, excluding any destination files
      _.config.clean = _.union(_.config.clean, _.config.concat[name+ext].src)
      _.config.clean = _.without(_.config.clean, _.config.concat[name+ext].dest)


  # Amazon S3 bucket and CDN host
  _.config.cdn = "" unless _.config.cdn?
  _.config.bucket = _.config.pkg.name unless _.config.bucket?

  # Time-stamped banner for all minified assets
  _.config.banner = [ "/*!",
                      _.config.pkg.name,
                      _.config.pkg.description,
                      "\n*/"
                    ].join "\n"
  return _
