
const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

var cfg = {
  micro_service_name : "",
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost:'localhost'
}


try {
    var fs = require('fs');
    const cfgInfo = fs.readFileSync('./start.json');
    var cfgInfoObject = {};
    try {
      cfgInfoObject = JSON.parse(cfgInfo);
      cfg.micro_service_name = cfgInfoObject.apps[0]["name"];
    } catch (err) {
      console.error('==>  ERROR: Error parsing your start.json');
      console.error(err);
    }
}catch(e){}

module.exports = Object.assign(cfg, environment);