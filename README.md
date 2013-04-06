nessjon.com
===========

Wedding Website for Jonathan Suderman & Janessa Sheppard  
<http://nessjon.com>

Installation
------------

- `brew install node`
- `npm install -g grunt-cli bower foreman`
- `git clone git@github.com:suderman/nessjon.com.git && cd nessjon.com`
- `npm install`
- `bower install`
- `grunt`
- `foreman start`

S3: Setup
--------

1. Visit <https://console.aws.amazon.com/s3/>
2. Create new bucket named `assets.website.com`
3. Visit <https://dnsimple.com/domains/website.com/records/new?record_type=CNAME>
4. Create CNAME record `assets` pointing to `assets.website.com.s3.amazonaws.com`
  - Won't work for SSL (secure: false in grunt-s3)
5. In config.json, set bucket to `assets.website.com` and cdn to `//assets.website.com`

S3: Fix Firefox Webfonts
------------------------

1. Visit <https://console.aws.amazon.com/s3/>
2. Click bucket -> properties -> permissions -> edit CORS configuration
3. Add the following and save (may already be given sample config):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>Authorization</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```
