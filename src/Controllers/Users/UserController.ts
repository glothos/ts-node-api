import Controller from '../Controller';
import { Response } from 'express';

export default class UserController implements Controller {
    list(req, res): Response {
        return res.status(200).send('OK');
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
    remove(req, res): Response {
        return res.status(200).send({});
    }
}
