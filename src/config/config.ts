import dotEnv = require('dotenv');
dotEnv.config();

export default {
	APP: process.env.APP,
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV,

	DB_DIALECT: process.env.DB_DIALECT,
	DB_HOST: process.env.DB_HOST,
	DB_NAME: process.env.DB_NAME,
	DB_PORT: process.env.DB_PORT,
	DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,

  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION,
  SALT_ROUNDS: process.env.SALT_ROUNDS
};
