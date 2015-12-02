/*
This default implementation uses redis, sitting on top of NodeRedis
https://github.com/NodeRedis/node_redis?_ga=1.222160667.2024829943.1446679745
*/

// UUID generator, which is a better GUID apparently
var uuid = require('node-uuid');

// set a value against a key
exports.set = function(key, value)
{
  if(config.verbose){
    console.log("setting " + key);
  }

  dbClient.set(key, JSON.stringify(value));
}

// get a value from a key
// callback should accept 1 argument
exports.get = function(key,callback)
{
  if(config.verbose){
    console.log("getting " + key);
  }

  dbClient.get(key, function(err, reply){
    callback(JSON.parse(reply));
  })
}

// delete a key
exports.delete = function(key)
{
  if(config.verbose){
    console.log("deleting " + key);
  }

  dbClient.del(key);
}

// get all keys
// callback should accept 1 argument
exports.keys = function(prefix, callback)
{
  if(config.verbose){
    console.log("getting keys " + prefix);
  }

  dbClient.keys(prefix, function(err, replies){
    callback({keys:replies});
  });
}

// generate a new UUID
exports.newId = function(){return uuid.v1();}

// initialize the database and open a connection
exports.init = function(){
  if(config.verbose){
    console.log("Initializing DB");
  }

  dbClient = require('redis').createClient({host:config.databaseHost, port:config.databasePort});

  if(config.verbose){
    console.log("Authenticating DB");
  }
  dbClient.auth(config.databasePassword);

  dbClient.on('error', function (err) {
    console.log('Error ' + err);
  });
}

// close the connection
exports.close = function(){
  if(config.verbose){
    console.log("Closing DB");
  }

  dbClient.quit();
}
