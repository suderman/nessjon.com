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

S3: Setup
--------

1. Create new bucket named "assets.website.com"
2. Create CNAME record "assets" pointing to "assets.website.com.s3.amazonaws.com"
3. Won't work for SSL (secure: false in grunt-s3)
4. In config.json, set bucket to "assets.website.com" and cdn to "//assets.website.com"

S3: Fix Firefox Webfonts
------------------------

1. Visit <https://console.aws.amazon.com/s3/>
2. Click bucket -> properties -> permissions -> edit CORS configuration
3. Add the following and save (may already be given sample config):
    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>GET</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <AllowedHeader>Authorization</AllowedHeader>
        </CORSRule>
    </CORSConfiguration>
