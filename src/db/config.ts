import config from '../config/config'

const devConfig = {
	port: config.DB_PORT,
	host: config.DB_HOST,
	database: config.DB_NAME,
	dialect: config.DB_DIALECT,
	username: config.DB_USERNAME,
	password: config.DB_PASSWORD,
};

const prodConfig = {
	port: config.DB_PORT,
	host: config.DB_HOST,
	database: config.DB_NAME,
	dialect: config.DB_DIALECT,
	username: config.DB_USERNAME,
	password: config.DB_PASSWORD,
};

module.exports = {
	development: devConfig,
	production: prodConfig,
};
