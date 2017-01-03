const ioc = require('nan-ioc');
const config = require('./config');

ioc
  .module(['./app/post', './app/post', './app/post', './app/hello'])
  .component('application', {
    'class': require('./app/Application'),
    'expressServer': ioc.ref('expressServer')
  })
  .build(config);
