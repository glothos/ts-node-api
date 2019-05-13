import { Application } from 'express';
import { REST } from "../../Globals/Interfaces/REST";
import Controller from "../../Controllers/Controller";

export default class Users extends Controller implements REST {
    app: Application;
    constructor(instance: Application) {
        super();
        this.app = instance;
        /**
         * @swagger
         * tags:
         *  name: Users
         *  description: Users' profiles operation
         */
        this.get();
    }
    // setup routes and swagger doc
    get(): void {
        /**
         * @swagger
         * /users:
         *   get:
         *     description: get user profile
         *     tags: [Users]
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: user found
         */
        this.app.get('/api/users', this.userController.list);
    }

    post(): void {
        this.app.post('/api/users', this.userController.create);
    }

    put(): void {
        this.app.put('/api/users/:userId', this.userController.update);
    }

    delete(): void {
        this.app.delete('/api/users/:userId', this.userController.remove);
    }

}
