import { Request, Response } from "@types/express-serve-static-core";

export namespace HandlerInterface {
    export interface Static {
        (req: Request, res: Response): Response;
    }
}