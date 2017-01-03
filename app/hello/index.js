let ioc = require('nan-ioc');
let Joi = require('joi');
let restlib = require('rest-lib');
module.exports = ioc
  .module([restlib.core])
  .controller('helloController', {
    'class': require('./HelloController'),
    'context': '/hello',
    'validator': {
      'list': {
        'query': {
          'name': Joi.string().required()
        }
      }
    }
  });
