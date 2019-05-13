import { Request, Response } from "@types/express-serve-static-core";

export interface CREATE{
    create(req: Request, res: Response): void;
}
export interface READ {
    list(req: Request, res: Response): void;
    read(req: Request, res: Response): void;
}
export interface UPDATE{
    update(req: Request, res: Response): void;
}
export interface DELETE{
    remove(req: Request, res: Response): void;
}
export interface CRUD extends CREATE, READ, UPDATE, DELETE {}
