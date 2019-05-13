import { Request, Response } from 'express';
import {CRUD} from "../../Globals/Interfaces/CRUD";

export default class UserController implements CRUD {
    list(req: Request, res: Response): Response {
        return res.status(200).send('OK');
    }
    read(req: Request, res: Response): Response {
        return res.status(200).send({});
    }
    create(req: Request, res: Response): Response {
        return res.status(200).send({});
    }
    update(req: Request, res: Response): Response {
        return res.status(200).send({});
    }
    remove(req: Request, res: Response): Response {
        return res.status(200).send({});
    }
}
