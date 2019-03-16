const appConfig = {}

appConfig.port = 3000;
appConfig.allowedCorsOrigin = '*';
appConfig.db = {
    uri:'mongodb://127.0.0.1:27017/brainwave'
}
appConfig.env = 'dev';
appConfig.apiVersion = '/api/v1';

module.exports = {
    port:appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    db:appConfig.db,
    env:appConfig.env,
    apiVersion:appConfig.apiVersion
}