import { join } from 'path';
import express from 'express';
import compression from 'compression';
import { configureRoutes } from './routes/routes';

const app = express();
const port = process.env.PORT || 4000;

configureRoutes().then((routes) => {
	/** Basic App Setup **/
	app.set('views', join(process.cwd(), 'server/templates'));
	app.set('view engine', 'ejs');
	app.use(compression());

	app.use(express.static(`${process.cwd()}/dist`));
	app.use('/', routes);

	app.listen(port, () => console.log(`Running localhost on port ${port}`));
});
