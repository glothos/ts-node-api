import UserController from '../../Controllers/Users/UserController';
import { Application } from 'express';

class Users {
    app: Application;
    constructor(app: Application){
        this.app = app;
    }
}