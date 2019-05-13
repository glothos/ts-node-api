import { Response, Request, Application } from 'express-serve-static-core';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './Router/Router';
import Swagger from './Swagger/Swagger';

export default class App extends Router{
    private _port: number;
    swagger = new Swagger();

    constructor(instance) {
        super(instance);
        const { swagger } = this;
        // for now middleware set up should be done here here
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger.swaggerSpec));
        this.app.use(cors());
        this.app.get('*', this.catchAllFunc);
        this.app.get('/api-docs.json', swagger.setUpSwagger);
    }

    catchAllFunc(req: Request, res: Response): Response {
        return res.status(200).send({
            message: 'Welcome to nothing',
        })
    };

    set port(value: number) {
        this._port = value;
        this.app.set('port', value);
    }

    get port(): number {
        return this._port;
    }

    get instance(): Application {
        return this.app;
    }
}

