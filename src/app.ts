import express from 'express';
import { Response, Request, Application } from 'express-serve-static-core';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './Router/Router';

export default class App extends Router{
    private _port: number;
    options: any = {
        swaggerDefinition: {
            info: {
                title: 'TS-Node Api Document', // Title (required)
                version: '1.0.0', // Version (required),
            },
            basePath: '/api',
        },
        apis: ['./src/routes/**/*.ts'], // Path to the API docs
    };
    swaggerSpec = swaggerJSDoc(this.options);
    constructor(instance) {
        super(instance);
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(this.swaggerSpec));
        this.app.use(cors());
        this.app.get('*', this.catchAllFunc);
        this.app.get('/api-docs.json', this.setUpSwagger);
    }

    catchAllFunc(req: Request, res: Response): Response {
        return res.status(200).send({
            message: 'Welcome to nothing',
        })
    };

    setUpSwagger(req: Request, res: Response): void {
        const { swaggerSpec } = this;
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    };

    set port(value: number) {
        this._port = value;
        this.app.set('port', value);
    }

    get port(): number {
        return this._port;
    }

    get instance(): express.Application {
        return this.app;
    }
}

