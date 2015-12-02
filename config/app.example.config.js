
/* Database config */
// should any sort of database initialization happen. If you don't want a database layer, set this to false
exports.databaseInit = true;
exports.databaseHost = "127.0.0.1";
exports.databasePort = 6370;
exports.databasePassword="";
exports.databaseUsername= "";

/* HTTPS config */
// if you're not using SSL, you can delete the sample keys in the config directory
exports.enableSsl = false;
exports.sslKeyFile = './config/localhost.key';
exports.sslCertificateFile = './config/localhost.cert'
exports.sslPort = '443';

// compression settings
exports.compression = true;

/* Logging config */
// verbose determines the amount of logging which happens by default
exports.verbose = true;
