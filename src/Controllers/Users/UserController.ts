import Controller from '../Controller';
import { Response, Application } from 'express';

export default class UserController extends Controller {
    list(req, res): Response {
        return res.status(200).send({});
    }
    read(req, res): Response {
        return res.status(200).send({});
    }
    create(req, res): Response {
        return res.status(200).send({});
    }
    update(req, res): Response {
        return res.status(200).send({});
    }
    delete(req, res): Response {
        return res.status(200).send({});
    }
}
