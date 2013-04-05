nessjon.com
===========

Wedding Website for Jonathan Suderman & Janessa Sheppard  
<http://nessjon.com>

Installation
------------

1. `brew install node`
2. `npm install -g grunt-cli bower foreman`
3. `git clone git@github.com:suderman/nessjon.com.git && cd nessjon.com`
4. `npm install`
5. `bower install`
6. `grunt`
7. `foreman start`

S3 Setup
--------

Create new bucket named "assets.website.com"
Create CNAME record "assets" pointing to "assets.website.com.s3.amazonaws.com"
Won't work for SSL (secure: false in grunt-s3)
In config.json, set bucket to "assets.website.com" and cdn to "//assets.website.com"
