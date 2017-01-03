const ioc = require('nan-ioc');
const Joi = require('joi');
const restlib = require('rest-lib');

module.exports = ioc
  .module([restlib.core, restlib.model])
  .controller('postController', {
    'class': require('./PostController'),
    'context': '/post',
    'service': ioc.ref('postService'),
    'validator': require('./PostValidator'),
  })
  .service('postService', {
    'class': require('./PostService'),
    'model': ioc.ref('postModel')
  })
  .model('postModel' ,{
    'class': require('./PostModel')
  });
