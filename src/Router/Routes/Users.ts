import UserController from '../../Controllers/Users/UserController';
import { Application, Response } from 'express';
import { CRUD } from "../../Globals/CrudInterface";
import Router from '../Router';
import UserController from '../../Controllers/Users/UserController';

export default class Users extends UserController implements CRUD{
    app: Application;
    constructor(instance: Application) {
        super();
        this.app = instance;
        this.get();
        this.post();
    }

    get() {
        this.app.get('/api/users', this.list)
    }

    post() {
        this.app.post('/api/users', this.create);
    }

    put() {
        this.app.put('/api/users/:userId', this.update);
    }

    delete() {
        this.app.delete('/api/users/:userId', this.remove);
    }

}
