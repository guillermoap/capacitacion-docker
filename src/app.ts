import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";
import apiV1 from "./apiV1";
import config from "./config/config";
import * as errorHandler from "./helpers/errorHandler";
import router from './helpers/unknownRoutes';

class App {
  public express: express.Application;

	constructor() {
		this.express = express();
		this.setMiddlewares();
		this.setRoutes();
		this.catchErrors();
	}

	private setMiddlewares(): void {
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({extended: false}));
		this.express.use(cors(this.corsOptionsHandler));
		this.express.use(
			morgan((tokens, req, res) => {
				return [
					tokens.method(req, res),
					tokens.url(req, res),
					tokens.status(req, res),
					tokens.res(req, res, 'content-length'),
					'-',
					tokens['response-time'](req, res),
					'ms',
				].join(' ');
			})
		);
		this.express.use(helmet());
	}

	private setRoutes(): void {
		this.express.use('/v1', apiV1);
		this.express.use('', router);
	}

	private catchErrors(): void {
    this.express.use(errorHandler.notFound);
    this.express.use(errorHandler.internalServerError);
  }

	private corsOptionsHandler = (
		req: express.Request,
		callback: (err: Error | null, options?: cors.CorsOptions) => void
	) => {
		const WHITELIST_URLS = ['http://localhost:4200'];
		const corsOptions: cors.CorsOptions = {
			origin(origin: string, call: (err: Error | null, allow?: boolean) => void) {
				if (WHITELIST_URLS.includes(origin) || !origin) {
					call(null, true);
				} else {
					call(new Error('Not allowed'), false);
				}
			},
			credentials: true,
			allowedHeaders: ['Save-Data', 'Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
			preflightContinue: false,
			optionsSuccessStatus: 204,
		};
		callback(null, corsOptions);
	};
}

export default new App().express;
