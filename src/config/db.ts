import * as path from 'path';
import {Sequelize} from 'sequelize-typescript';
import {Dialect} from 'sequelize/types';
import config from './config';

export const sequelize = new Sequelize({
  host: config.DB_HOST,
  database: config.DB_NAME,
  port: parseInt(config.DB_PORT),
  dialect: config.DB_DIALECT as Dialect,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  storage: ':memory:',
  logging: console.log,
  modelPaths: [path.resolve(__dirname, '..', 'db', 'models')],
});
