const envExports = require('./src/env');
const withImages = require('next-images');
const withVideos = require('next-videos'); 

{
  true;
}

module.exports = withImages(withVideos(envExports));