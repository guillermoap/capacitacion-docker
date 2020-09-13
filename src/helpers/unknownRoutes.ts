import {Request, Response, Router} from 'express';
import config from '../config/config';

const router: Router = Router();

// Default root, to check the env health
router.get('/', (req: Request, res: Response) => {
	res.status(200).send();
});

const log = (req: Request) => {
	if (config.NODE_ENV !== 'production') {
		return;
	}
	const path = (req.originalUrl || '').trim();
	if (path === '/' || path.startsWith('/v1') || path.startsWith('/v2')) {
		return;
	}
	const ip = JSON.stringify(req.headers);
	console.log(ip);
	// handle
};

router.get('/*', (req: Request, res: Response) => {
	log(req);
	res.status(404).send();
});

router.post('/*', (req: Request, res: Response) => {
	log(req);
	res.status(404).send();
});

router.put('/*', (req: Request, res: Response) => {
	log(req);
	res.status(404).send();
});

router.delete('/*', (req: Request, res: Response) => {
	log(req);
	res.status(404).send();
});

export default router;
