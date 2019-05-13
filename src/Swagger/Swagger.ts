import swaggerJSDoc from "swagger-jsdoc";
import {Request, Response} from "@types/express-serve-static-core";

export default class Swagger {
    options: any = {
        swaggerDefinition: {
            info: {
                title: 'TS-Node Api Document', // Title (required)
                version: '1.0.0', // Version (required),
            },
            basePath: '/api',
        },
        apis: ['./src/Router/**/*.ts'], // Path to the API docs
    };
    swaggerSpec = swaggerJSDoc(this.options);

    setUpSwagger(req: Request, res: Response): void {
        const { swaggerSpec } = this;
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    };
}