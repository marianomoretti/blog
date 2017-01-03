// This module loads a config file in the current working directory matching the first command line argument.
// I.e. either './dev.json' or './prod.json' based on the first command line argument.
// If not set, it defaults to './dev.json'.
// Can load custom environment files as well, as long as the argument variable matches
// a file in the current directory. E.g. './staging.json'
// Usage: calling code can just require this module, e.g. "var config = require('./config')"
// assuming this file is named "index.js" and lives in a subdirectory named "config" of the app root.

const fs = require('fs'),
  path = require('path'),
  program = require('commander');

program
  .option('-e, --env <environment>', 'Specify the environment.')
  .option('-c, --config <configFile>', 'Specify config file location')
  .parse(process.argv);

let nodeEnv = program.env ? program.env : 'dev';
let config = program.config ? path.normalize(program.config) : `./${nodeEnv}.json`;
let config_file = program.config ? path.normalize(program.config) : `./${nodeEnv}.json`;

try {
  config = require(config_file);
  console.log(`Config loaded for ${nodeEnv} environment.`);
} catch (err) {
  if (err.code && err.code === 'MODULE_NOT_FOUND') {
    console.error(`No config file matching ${nodeEnv}. Requires "${__dirname}/${nodeEnv}.json"`);
    process.exit(1);
  } else {
    throw err;
  }
}
config.configFile = `./config/${nodeEnv}.json`;
config.environment = nodeEnv;

if (config.noProxy) {
  console.warn('THIS INSTANCE IS RUNNING WITHOUT PROXIES');
}

let dir = `${__dirname}/resources`;
let module_dir = './resources';

if (fs.existsSync(dir)) {
  console.log(`Load resources from: ${dir}`);

  fs.readdirSync(dir).forEach((file) => {
    var name = file.split('.')[0];
    console.log(`Load resource: ${name}`);
    config[name] = require(`${module_dir}/${name}`);
  });
}

module.exports = config;
